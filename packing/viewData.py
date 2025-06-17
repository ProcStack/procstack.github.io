
from PyQt6.QtWidgets import (QApplication, QMainWindow, QPushButton, QVBoxLayout, 
                           QHBoxLayout, QWidget, QListWidget, QFileDialog, QDialog, QSlider,
                           QComboBox, QDialogButtonBox, QScrollArea, QLabel,
                           QListWidgetItem, QInputDialog, QMessageBox)
from PyQt6.QtCore import Qt, QTimer
from pygltflib import GLTF2
import json
import numpy as np
import sys
import os

########################################


class MimeTypeDialog(QDialog):
    def __init__(self, parent=None, current_mime=None, mime_types=None):
        super().__init__(parent)
        self.setWindowTitle('Edit MimeType')
        self.setModal(True)
        
        layout = QVBoxLayout(self)
        
        # Combo box for mime type selection
        self.mime_combo = QComboBox()
        self.mime_combo.addItems(mime_types)
        if current_mime in mime_types:
            self.mime_combo.setCurrentText(current_mime)
        self.mime_combo.currentTextChanged.connect(self.on_mime_changed)
        layout.addWidget(self.mime_combo)
        
        # Quality slider
        quality_layout = QHBoxLayout()
        self.quality_label = QLabel('Quality:')
        self.quality_value = QLabel('80')
        self.quality_slider = QSlider(Qt.Orientation.Horizontal)
        self.quality_slider.setRange(1, 100)
        self.quality_slider.setValue(80)
        self.quality_slider.valueChanged.connect(
            lambda v: self.quality_value.setText(str(v))
        )
        
        quality_layout.addWidget(self.quality_label)
        quality_layout.addWidget(self.quality_slider)
        quality_layout.addWidget(self.quality_value)
        layout.addLayout(quality_layout)
        
        # Buttons
        buttons = QDialogButtonBox(
            QDialogButtonBox.StandardButton.Ok | 
            QDialogButtonBox.StandardButton.Cancel
        )
        buttons.accepted.connect(self.accept)
        buttons.rejected.connect(self.reject)
        layout.addWidget(buttons)
        
        # Initial state
        self.on_mime_changed(current_mime)
        
    def on_mime_changed(self, mime_type):
        # Enable quality controls only for JPEG and WebP
        show_quality = mime_type in ['image/jpeg', 'image/webp']
        self.quality_label.setVisible(show_quality)
        self.quality_slider.setVisible(show_quality)
        self.quality_value.setVisible(show_quality)

########################################

class GLTFDataWidget(QWidget):
    def __init__(self, glbData, key, value, parent=None, index=None, path=None):
        super().__init__(parent)
        self.main = parent
        self.gltf_data = glbData
        self.key = key
        self.value = value
        self.index = index
        self.path = path or []  # Path to this item in the GLTF structure

        self.editTypes = {}
        self.editTypes['mimeType'] = [
          'image/jpeg',
          'image/png',
          'image/webp'
        ]

        self.init_ui()
    
    def init_ui(self):
        layout = QHBoxLayout(self)
        layout.setContentsMargins(0, 0, 0, 0)
        
        # Create indentation based on path depth
        indent = "    " * len(self.path)
        
        # Display format depends on whether it's an indexed item
        if self.index is not None:
            display_text = f"{indent}[{self.index}]: {str(self.value)}"
        else:
            display_text = f"{indent}{self.key}: {str(self.value)}"
        
        self.label = QLabel(display_text)
        layout.addWidget(self.label)
        layout.addStretch()
        
        # Add edit button
        self.edit_btn = QPushButton("Edit")
        self.edit_btn.setMaximumWidth(50)
        self.edit_btn.clicked.connect(self.edit_value)
        layout.addWidget(self.edit_btn)
        
        # Add delete button for list items
        if self.index is not None:
            self.delete_btn = QPushButton("X")
            self.delete_btn.setMaximumWidth(30)
            self.delete_btn.clicked.connect(self.delete_item)
            layout.addWidget(self.delete_btn)
    
    def edit_value(self):
        text, ok = None, False
        if self.key == 'mimeType':
            dialog = MimeTypeDialog(
                self,
                current_mime=self.value,
                mime_types=self.editTypes['mimeType']
            )
            
            if dialog.exec():
                new_mime = dialog.mime_combo.currentText()
                quality = dialog.quality_slider.value()
                
                try:
                    # Get image index from path
                    image_index = int(self.path[-2])  # Assumes path like ['images', '0', 'mimeType']
                    
                    if new_mime != self.value:
                        # Convert image with new format and quality
                        self.main.convert_images(
                            self.path,
                            image_index,
                            mime_type=new_mime,
                            quality=quality
                        )
                        
                        # Update the UI
                        self.value = new_mime
                        self.label.setText(f"{self.key}: {str(new_mime)}")
                        
                        # Update GLTF data structure
                        #self.main.update_gltf_value(self.path, self.index, new_mime)
                        
                except Exception as e:
                    QMessageBox.warning(
                        self,
                        "Conversion Error",
                        f"Failed to convert image: {str(e)}"
                    )
        elif self.path[0] == "images":
            file_name, _ = QFileDialog.getOpenFileName(
              self, "Open Image File", "",
              "Image Files (*.jpg *.jpeg *.png *.webp)"
            )

            if file_name:
              self.image_path = file_name
              #self.main.updateInternalImage(self.path, self.index, file_name)
        else:
          text, ok = QInputDialog.getText(
              self, 'Edit Value', 
              'Enter new value:', 
              text=str(self.value)
          )
        
        if ok and text:
            try:
                # Convert string input to appropriate type
                if isinstance(self.value, int):
                    new_value = int(text)
                elif isinstance(self.value, float):
                    new_value = float(text)
                else:
                    new_value = text
                
                # Update the value
                self.value = new_value
                # Update label
                self.label.setText(f"{self.key}: {str(new_value)}")
                
                # Update the value in the GLTF data structure
                #self.main.update_gltf_value(self.path, self.index, new_value)
                
            except ValueError:
                QMessageBox.warning(
                    self,
                    "Invalid Input",
                    f"Please enter a valid {type(self.value).__name__} value."
                )
    
    def delete_item(self):
        if isinstance(self.main, GLTFViewer):
            self.main.delete_gltf_value(self.path, self.index)



########################################


class GLTFViewer(QMainWindow):
    def __init__(self):
        super().__init__()
        self.gltf_data = None
        self.current_file = None
        self.scene = None

        self.cancel_processing = False
        self.processTimer = QTimer()
        self.processTimer.timeout.connect(self.process_next_item)
        self.process_queue = []

        self.typeExtensions = {
          'image/jpeg': 'jpg',
          'image/png': 'png',
          'image/webp': 'webp',
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'webp': 'image/webp'
        }
        
        self.initUI()
        
    def keyPressEvent(self, event):
        if event.key() == Qt.Key.Key_Escape:
            if not self.cancel_processing:
                quit()
            else:
              self.cancel_processing = True
              self.processTimer.stop()

    def initUI(self):
        self.setWindowTitle('GLTF/GLB Viewer')
        self.setGeometry(100, 100, 800, 600)
        
        # Create main widget and layout
        main_widget = QWidget()
        self.setCentralWidget(main_widget)
        layout = QHBoxLayout(main_widget)
        
        # Left side - Controls and Data Keys
        left_panel = QWidget()
        left_layout = QVBoxLayout(left_panel)
        
        # Buttons
        btn_layout = QHBoxLayout()
        self.import_btn = QPushButton('Import File')
        self.save_btn = QPushButton('Save File')
        self.import_btn.clicked.connect(self.import_file)
        self.save_btn.clicked.connect(self.save_file)
        btn_layout.addWidget(self.import_btn)
        btn_layout.addWidget(self.save_btn)
        left_layout.addLayout(btn_layout)
        
        # Data Keys List
        self.keys_list = QListWidget()
        self.keys_list.clicked.connect(self.show_key_data)
        left_layout.addWidget(QLabel("Data Keys:"))
        left_layout.addWidget(self.keys_list)
        
        # Right side - Data Display with ScrollArea
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        self.data_list = QListWidget()
        scroll.setWidget(self.data_list)
        
        # Status bar for processing information
        self.statusBar().showMessage('Ready')
        
        layout.addWidget(left_panel)
        layout.addWidget(scroll)
        
    def import_file(self):
        file_name, _ = QFileDialog.getOpenFileName(
            self, "Open GLTF/GLB File", "",
            "GLTF Files (*.gltf *.glb)")
        
        if file_name:
            self.current_file = file_name
            self.load_gltf(file_name)
            
    def load_gltf(self, file_path):
        try:
            # Load the file with pygltflib
            self.gltf_data = GLTF2.load(file_path)
            self.update_keys_list()
                    
        except Exception as e:
            print(f"Error loading file: {e}")
            
    def update_keys_list(self):
        self.keys_list.clear()
        if self.gltf_data:
            # Get all available attributes from the GLTF data
            attributes = self.gltf_data.to_dict().keys()
            self.keys_list.addItems(attributes)

    def show_key_data(self):
        self.data_list.clear()
        current_key = self.keys_list.currentItem().text()
        
        try:
            data = self.gltf_data.to_dict().get(current_key)
            self.process_queue = []
            self.cancel_processing = False
            self.recursiveAdd(data, self.data_list, current_key)
        except Exception as e:
            print(f"Error showing key data: {e}")
            self.statusBar().showMessage(f'Error: {str(e)}')

    def process_next_item(self):
        """Process one queued item at a time"""
        if self.cancel_processing or not self.process_queue:
            self.processTimer.stop()
            self.statusBar().showMessage('Ready')
            return

        item = self.process_queue.pop(0)
        remaining = len(self.process_queue)
        self.statusBar().showMessage(f'Processing... {remaining} items remaining')

        if item['type'] == 'header':
            header = "    " * item['depth'] + f"{item['key']}:"
            list_item = QListWidgetItem(header)
            font = list_item.font()
            font.setBold(True)
            font.setPointSize(12)
            list_item.setFont(font)
            list_item.setFlags(list_item.flags() & ~Qt.ItemFlag.ItemIsSelectable)
            self.data_list.addItem(list_item)
        else:
            widget = GLTFDataWidget( self.gltf_data, item['key'], item['value'], self, None, item['path'])
            list_item = QListWidgetItem()
            list_item.setSizeHint(widget.sizeHint())
            self.data_list.addItem(list_item)
            self.data_list.setItemWidget(list_item, widget)

        QApplication.processEvents()

    def recursiveAdd(self, data, list_widget, parent_key="", depth=0, path=None):
        """Queue items for incremental processing"""
        if path is None:
            path = [parent_key]
            
        if isinstance(data, dict):
            for key, value in data.items():
                current_path = path + [key]
                self.process_queue.append({
                    'type': 'header',
                    'key': key,
                    'depth': depth,
                    'path': current_path
                })
                
                if isinstance(value, (dict, list)):
                    self.recursiveAdd(value, list_widget, key, depth + 1, current_path)
                else:
                    self.process_queue.append({
                        'type': 'value',
                        'value': value,
                        'key': key,
                        'path': current_path
                    })
        elif isinstance(data, list):
            for idx, item in enumerate(data):
                current_path = path + [str(idx)]
                if isinstance(item, (dict, list)):
                    self.recursiveAdd(item, list_widget, f"[{idx}]", depth + 1, current_path)
                else:
                    self.process_queue.append({
                        'type': 'value',
                        'value': item,
                        'key': f"[{idx}]",
                        'path': current_path
                    })
                    
        # Start processing if not already running
        if not self.processTimer.isActive():
            self.processTimer.start(1)  # Process every 1ms

    def add_gltf_data(self, key, data, path):
        if isinstance(data, (list, tuple)):
            for idx, item in enumerate(data):
                if isinstance(item, dict):
                    for k, v in item.items():
                        new_path = path + [str(idx), k]
                        self.add_gltf_data(k, v, new_path)
                else:
                    widget = GLTFDataWidget(self.gltf_data, key, item, self, idx, path)
                    list_item = QListWidgetItem()
                    list_item.setSizeHint(widget.sizeHint())
                    self.data_list.addItem(list_item)
                    self.data_list.setItemWidget(list_item, widget)
        elif isinstance(data, dict):
            for k, v in data.items():
                new_path = path + [k]
                self.add_gltf_data(k, v, new_path)
        else:
            widget = GLTFDataWidget(self.gltf_data, key, data, self, None, path)
            list_item = QListWidgetItem()
            list_item.setSizeHint(widget.sizeHint())
            self.data_list.addItem(list_item)
            self.data_list.setItemWidget(list_item, widget)
    
    def update_gltf_value(self, path, index, new_value):
        """Update value in GLTF data structure using path"""
        if not self.gltf_data:
            return

        target = self.gltf_data
        for p in path[:-1]:
            if isinstance(target, list):
                target = target[int(p)]
            elif isinstance(target, dict):
                target = target.get(p)
                if target is None:
                    print("Error: Incorrect path")
                    return

        if index is not None:
            target[path[-1]][index] = new_value
        else:
            target[path[-1]] = new_value

        # Refresh display
        self.show_key_data()


    def updateInternalImage(self, path, index, file_name):
        """Update image in GLTF data structure using path"""
        if not self.gltf_data:
            return
        

        try:
            # Navigate to the target in gltf_data
            target = self.gltf_data
            for p in path[:-1]:
                if isinstance(target, list):
                    target = target[int(p)]
                elif isinstance(target, dict):
                    target = target.get(p)
                    if target is None:
                        raise ValueError(f"Invalid path: {path}")

            # Update image properties
            target['uri'] = file_name
            target['name'] = os.path.basename(file_name)
            
            # Set mime type based on file extension
            file_ext = os.path.splitext(file_name)[1][1:].lower()
            if file_ext in self.typeExtensions:
                target['mimeType'] = self.typeExtensions[file_ext]

            # If working with binary GLB, we need to update the buffer data
            if hasattr(self.scene, 'geometry') and 'bufferView' in target:
                # Read the new image file
                with open(file_name, 'rb') as f:
                    image_data = f.read()
                
                # Update buffer view data
                buffer_view_index = target['bufferView']
                if 'bufferViews' in self.gltf_data:
                    buffer_view = self.gltf_data['bufferViews'][buffer_view_index]
                    buffer_view['byteLength'] = len(image_data)
                    
                    # Update the main buffer if it exists
                    if 'buffers' in self.gltf_data and buffer_view.get('buffer') is not None:
                        buffer_index = buffer_view['buffer']
                        buffer = self.gltf_data['buffers'][buffer_index]
                        
                        # Update buffer with new image data
                        if 'uri' in buffer and buffer['uri'].startswith('data:'):
                            # Handle embedded buffer
                            import base64
                            encoded = base64.b64encode(image_data).decode('ascii')
                            mime_type = target.get('mimeType', 'application/octet-stream')
                            buffer['uri'] = f'data:{mime_type};base64,{encoded}'
                        else:
                            # External buffer case
                            buffer['byteLength'] = len(image_data)

            
            # Refresh the display
            self.show_key_data()

        except Exception as e:
            print(f"Error updating image: {e}")
            QMessageBox.warning(
                self,
                "Update Error",
                f"Failed to update image: {str(e)}"
            )



    def convert_images(self, path, index, mime_type, quality):
        """Convert image to new format and quality"""
        current = self.gltf_data.to_dict()
        target = current
        
        # Navigate to the parent of the target value
        for p in path[:-1]:
            if type(target) is list:
                target = target[int(p)]
                break;
            elif type(target) is dict:
              target = target[p]
        
        # Get the image data
        image_data = target[path[-1]][index]
        
        target['mimeType'] = mime_type
        
        curName = target['name']
        curExt = curName.split('.')
        if mime_type in self.typeExtensions:
            curExt.pop()
            curExt.append(self.typeExtensions[mime_type])
            curName = '.'.join(curExt)
        target['name'] = curName

        curBuffer = self.gltf_data.bufferViews[ target['bufferView'] ]
        print(dir(self.gltf_data))
        print("")
        print(dir(curBuffer))
        return
        # Convert the image


    def delete_gltf_value(self, path, index):
        """Delete value from GLTF data structure using path"""
        current = self.gltf_data.to_dict()
        target = current
        
        # Navigate to the parent of the target value
        for p in path[:-1]:
            target = target[p]
        
        # Delete the item
        if index is not None:
            target[path[-1]].pop(index)
        
        # Refresh display
        self.show_key_data()

    def save_file(self):
        if not self.gltf_data:
            return
                
        file_name, _ = QFileDialog.getSaveFileName(
            self, "Save GLB File", "",
            "GLB Files (*.glb)")
                
        if file_name:
            try:
                # Export using pygltflib
                self.gltf_data.save(file_name)
            except Exception as e:
                print(f"Error saving file: {e}")

def main():
    app = QApplication(sys.argv)
    viewer = GLTFViewer()
    viewer.show()
    sys.exit(app.exec())

if __name__ == '__main__':
    main()