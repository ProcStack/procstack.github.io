import re

# Read the file
with open('index.htm', 'r', encoding='utf-8') as f:
    content = f.read()

# Define all dialogue names in order they appear
dialogues = [
    ('shapeToolShorts', 894),
    ('swingInfo', 926),
    ('aboutMe', 957),
    ('mobileMenu', 988),
    ('pulldownDisplay', 1220),
    ('contactMe', 1232),
    ('saveLoadDocument', 1271),
    ('sharePxl', 1312),
    ('termsOfService', 1337),
    ('layerEditor', 1363),
    ('backgroundEditor', 1412)
]

# Replace each dialogue section
for dia_name, _ in dialogues:
    # Pattern to match the variable declaration and subsequent echo statements
    # This handles the section-by-section replacement
    pattern = rf"(\<\?php \$curDiaName='{dia_name}'; \?\>)"
    
    # Find this pattern
    match = re.search(pattern, content)
    if match:
        # Get the position after this declaration
        start_pos = match.end()
        
        # Find the next $curDiaName declaration or end of dialogues section
        next_decl = content.find("<?php $curDiaName='", start_pos)
        if next_decl == -1:
            # This is the last one, search until layersWindow or similar
            next_decl = content.find('<div id="layersWindow">', start_pos)
        
        if next_decl > start_pos:
            # Replace all echo statements in this section
            section = content[start_pos:next_decl]
            section = section.replace('<?php echo $curDiaName; ?>', dia_name)
            content = content[:start_pos] + section + content[next_decl:]
        
        # Remove the declaration line itself
        content = content.replace(f"<?php $curDiaName='{dia_name}'; ?>", '')

# Clean up empty lines left by PHP removal
content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)

# Write back
with open('index.htm', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Completed! Replaced PHP dialogue names.')
