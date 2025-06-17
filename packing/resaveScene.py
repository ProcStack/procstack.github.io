import sys
import os
from PyQt6.QtWidgets import (QApplication, QMainWindow, QPushButton, 
                            QVBoxLayout, QWidget, QFileDialog, QLabel)
from PyQt6.QtCore import Qt
import bpy

class FBXConverterWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("FBX to GLB Converter")
        self.setMinimumSize(400, 200)

        # Create central widget and layout
        central_widget = QWidget()
        self.setCentralWidget(central_widget)
        layout = QVBoxLayout(central_widget)

        # Create and add widgets
        self.status_label = QLabel("Select an FBX file to convert")
        self.status_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(self.status_label)

        load_button = QPushButton("Load FBX File")
        load_button.clicked.connect(self.load_fbx)
        layout.addWidget(load_button)

    def load_fbx(self):
        file_path, _ = QFileDialog.getOpenFileName(
            self,
            "Select FBX File",
            "",
            "FBX Files (*.fbx)"
        )

        if file_path:
            try:
                # Clear existing objects
                bpy.ops.object.select_all(action='SELECT')
                bpy.ops.object.delete()

                # Import FBX
                bpy.ops.import_scene.fbx(filepath=file_path)

                # Get output path
                directory = os.path.dirname(file_path)
                filename = os.path.splitext(os.path.basename(file_path))[0]
                output_path = os.path.join(directory, f"{filename}_convert.glb")

                # Export as GLB
                bpy.ops.export_scene.gltf(
                    filepath=output_path,
                    export_format='GLB',
                    use_selection=False
                )

                self.status_label.setText(f"Conversion successful!\nSaved to: {output_path}")
            except Exception as e:
                self.status_label.setText(f"Error during conversion: {str(e)}")

if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = FBXConverterWindow()
    window.show()
    sys.exit(app.exec())