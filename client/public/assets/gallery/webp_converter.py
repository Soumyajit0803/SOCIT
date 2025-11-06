from PIL import Image
import os

"""
🪄 REQUIREMENTS:
- Python 3.x
- Pillow package (install with: pip install pillow)

📜 INSTRUCTIONS:
Place this script inside or above the 'teams' directory.
Whenever you add new images (e.g., JPG, PNG) inside the directory,
run this script — it will automatically convert all images to WEBP format.

⚙️ Directory to start: "./client/public/assets/Team"
"""

output_dir = './client/public/assets/gallery'
os.makedirs(output_dir, exist_ok=True)

def resize_and_convert(input_path, output_path):
    img = Image.open(input_path)
    img.thumbnail((700, 700))
    quality = 80
    img.save(output_path, 'WEBP', quality=quality)
    print(f"\033[92mConverted:\033[0m {os.path.basename(output_path)}")

GREEN = "\033[92m"
YELLOW = "\033[93m"
CYAN = "\033[96m"
RESET = "\033[0m"

count = 0
input_dir = './client/public/assets/gallery'
allFiles = os.listdir(input_dir)

print(f"\n{CYAN}Scanning directory:{RESET} {input_dir}")
print(f"Found {len(allFiles)} files.\n")

newchanges = []

for filename in allFiles:
    lower_name = filename.lower()
    if not lower_name.endswith('.webp') and not lower_name.endswith('.py'):
        input_path = os.path.join(input_dir, filename)
        webp_name = os.path.splitext(filename)[0].split(' ')[0].lower() + '.webp'
        output_path = os.path.join(output_dir, webp_name)

        if webp_name in allFiles:
            print(f"{YELLOW}Already exists:{RESET} {webp_name}")
            continue

        count += 1
        newchanges.append(webp_name)
        resize_and_convert(input_path, output_path)

print(f"\n{GREEN}Conversion complete.{RESET}")
print(f"Total files converted: {count}\n")

if newchanges:
    print("New WEBP files created:")
    for i in newchanges:
        print(f"  {i}")
else:
    print(f"{YELLOW}No new files were converted. All up to date.{RESET}")

print()
