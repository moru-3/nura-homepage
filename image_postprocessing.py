import os
import random
from PIL import Image, ImageFilter

# HEIC 지원
try:
    import pyheif
    HEIC_SUPPORT = True
except ImportError:
    HEIC_SUPPORT = False

input_dir = './source/overview'
output_dir = './source/overview/blurred'
sort_mode = 'random'  # 'random', 'name', 'mtime' 중 선택

os.makedirs(output_dir, exist_ok=True)
exts = ('.jpg', '.jpeg', '.png', '.webp', '.heic')

files = [f for f in os.listdir(input_dir) if f.lower().endswith(exts)]

if sort_mode == 'random':
    random.shuffle(files)
elif sort_mode == 'name':
    files.sort()
elif sort_mode == 'mtime':
    files.sort(key=lambda f: os.path.getmtime(os.path.join(input_dir, f)))
else:
    raise ValueError("sort_mode must be 'random', 'name', or 'mtime'")

for idx, filename in enumerate(files, 1):
    img_path = os.path.join(input_dir, filename)
    ext = os.path.splitext(filename)[1].lower()
    # HEIC 파일 처리
    if ext == '.heic':
        if not HEIC_SUPPORT:
            print(f"pyheif가 설치되어 있지 않아 {filename}을(를) 건너뜁니다.")
            continue
        import pyheif
        heif_file = pyheif.read(img_path)
        img = Image.frombytes(
            heif_file.mode,
            heif_file.size,
            heif_file.data,
            "raw",
            heif_file.mode,
            heif_file.stride,
        )
    else:
        img = Image.open(img_path)
    blurred = img.filter(ImageFilter.GaussianBlur(radius=24))
    out_name = f"slide{idx}.jpg"
    # JPG로 저장 (RGBA는 RGB로 변환)
    if blurred.mode in ("RGBA", "LA"):
        blurred = blurred.convert("RGB")
    blurred.save(os.path.join(output_dir, out_name), "JPEG", quality=90)
    print(f"Saved: {out_name}")

print("모든 이미지 블러 및 JPG 변환 완료!")