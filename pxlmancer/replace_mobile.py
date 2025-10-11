import re

# Read the file
with open('index.htm', 'r', encoding='utf-8') as f:
    content = f.read()

# Counter for replacements
replacements = 0

# Pattern 1: Inline mobile conditionals for text like "(F)" and "(S)"
# <?php if($mobile==0){ ?>(F) <?php } ?>
inline_pattern = r'\<\?php if\(\$mobile==0\)\{ \?\>(\([A-Z]\) )\<\?php \} \?\>'
def inline_replace(match):
    global replacements
    replacements += 1
    hotkey = match.group(1)
    return f'<span class="desktop-only">{hotkey}</span>'

content = re.sub(inline_pattern, inline_replace, content)

print(f"Replaced {replacements} inline mobile conditionals")

# Pattern 2: Block-level conditionals - we need to track opening and closing tags
# This is more complex, so we'll do it in multiple passes

# First, let's mark the opening tags with unique identifiers
block_id = 0
def mark_opening_tag(match):
    global block_id
    block_id += 1
    mobile_val = match.group(1)
    class_name = 'mobile-only' if mobile_val == '1' else 'desktop-only'
    return f'<!--MOBILE_BLOCK_START:{block_id}:{class_name}-->' + match.group(0)

# Match opening tags: <?php if($mobile==0){ ?> or <?php if($mobile==1){ ?>
opening_pattern = r'\<\?php if\(\$mobile==([01])\)\{ \?\>'
content = re.sub(opening_pattern, mark_opening_tag, content)

# Now mark the closing tags
def mark_closing_tag(match):
    return match.group(0) + '<!--MOBILE_BLOCK_END-->'

closing_pattern = r'\<\?php \} \?\>'
content = re.sub(closing_pattern, mark_closing_tag, content)

# Now process the marked blocks
def wrap_block(match):
    global replacements
    replacements += 1
    block_num = match.group(1)
    class_name = match.group(2)
    php_open = match.group(3)
    block_content = match.group(4)
    php_close = match.group(5)
    
    return f'<div class="{class_name}">{block_content}</div>'

# Match marked blocks
block_pattern = r'<!--MOBILE_BLOCK_START:(\d+):([^>]+)-->(\<\?php if\(\$mobile==[01]\)\{ \?\>)(.*?)((?:\s*)\<\?php \} \?\>)<!--MOBILE_BLOCK_END-->'
content = re.sub(block_pattern, wrap_block, content, flags=re.DOTALL)

print(f"Total replacements: {replacements}")

# Clean up any remaining markers
content = re.sub(r'<!--MOBILE_BLOCK_START:\d+:[^>]+-->', '', content)
content = re.sub(r'<!--MOBILE_BLOCK_END-->', '', content)

# Pattern 3: Handle <?php }else{ ?> patterns
else_pattern = r'\<\?php \}else\{ \?\>'
content = re.sub(else_pattern, '</div><div class="mobile-desktop-swap">', content)

# Write the result
with open('index.htm', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Completed! Wrapped mobile conditionals in divs/spans with classes.")
print(f"Classes used: 'mobile-only', 'desktop-only', 'mobile-desktop-swap'")
