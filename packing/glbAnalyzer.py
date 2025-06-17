import argparse
import json
import struct

def parse_glb(file_path):
  #if not file_path.startswith("..\\"):
  #  file_path = "..\\" + file_path

  ret = {}

  with open(file_path, 'rb') as f:
    magic = f.read(4)
    if magic != b'glTF':
      raise ValueError("File is not a valid GLB file")

    version, length = struct.unpack('<II', f.read(8))
    if version != 2:
      raise ValueError("Only GLB version 2 is supported")

    content_length, content_format = struct.unpack('<II', f.read(8))
    if content_format != 0x4E4F534A:  # JSON format
      raise ValueError("GLB content is not in JSON format")

    content = json.loads(f.read(content_length))
    print("Keys in GLB content:", content.keys())

    # Check for Draco and KTX compression
    for buffer_view in content.get('bufferViews', []):
      if 'extensions' in buffer_view:
        if 'KHR_draco_mesh_compression' in buffer_view['extensions']:
          print("Draco compression found")
        if 'KHR_texture_basisu' in buffer_view['extensions']:
          print("KTX compression found")
    
    ret = content

  return ret

def write_glb(file_path, content):
  with open(file_path, 'wb') as f:
    f.write(b'glTF')
    f.write(struct.pack('<II', 2, 0))  # version 2, placeholder for length

    content_bytes = json.dumps(content).encode('utf-8')
    content_length = len(content_bytes)
    f.write(struct.pack('<II', content_length, 0x4E4F534A))  # JSON format
    f.write(content_bytes)

    # Update the total length of the GLB file
    total_length = f.tell()
    f.seek(8)
    f.write(struct.pack('<I', total_length))
  
if __name__ == "__main__":
  parser = argparse.ArgumentParser(description='Parse a GLB file and print its keys.')
  parser.add_argument('-i', '--input', required=True, help='Path to the input GLB file')
  parser.add_argument('-o', '--output', required=True, help='Path to the output GLB file')
  args = parser.parse_args()

  glbContent = parse_glb(args.input)
  print("GLB content:", glbContent)