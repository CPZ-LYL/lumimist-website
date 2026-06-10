#!/usr/bin/env python3
"""
Cozy Light 占位符图片生成脚本

使用方法:
    python generate-placeholders.py

这个脚本会为所有需要图片的位置生成占位符图片。
需要安装 Pillow 库: pip install Pillow
"""

import os

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("请先安装 Pillow 库: pip install Pillow")
    exit(1)

# 图片配置
IMAGES_CONFIG = {
    # 首页
    "images/hero-product.png": {
        "size": (800, 800),
        "text": "Product Image",
        "bg_color": "#4A90D9",
        "text_color": "#FFFFFF"
    },
    "images/showcase-lifestyle.jpg": {
        "size": (1200, 600),
        "text": "Lifestyle Image",
        "bg_color": "#3A7BC8",
        "text_color": "#FFFFFF"
    },

    # 功能页面
    "images/features/bluetooth.jpg": {
        "size": (600, 400),
        "text": "Bluetooth Control",
        "bg_color": "#6BA3E0",
        "text_color": "#FFFFFF"
    },
    "images/features/nightlight.jpg": {
        "size": (600, 400),
        "text": "Night Light",
        "bg_color": "#FF8C42",
        "text_color": "#FFFFFF"
    },
    "images/features/humidifier.jpg": {
        "size": (600, 400),
        "text": "Humidifier",
        "bg_color": "#4A90D9",
        "text_color": "#FFFFFF"
    },
    "images/features/portable.jpg": {
        "size": (600, 400),
        "text": "Portable Design",
        "bg_color": "#2C3E50",
        "text_color": "#FFFFFF"
    },

    # 关于页面
    "images/about/story.jpg": {
        "size": (800, 600),
        "text": "Our Story",
        "bg_color": "#F5F7FA",
        "text_color": "#2C3E50"
    },
    "images/about/team.jpg": {
        "size": (800, 600),
        "text": "Our Team",
        "bg_color": "#4A90D9",
        "text_color": "#FFFFFF"
    },

    # 规格页面
    "images/specs/general.jpg": {
        "size": (600, 600),
        "text": "Product Specs",
        "bg_color": "#E8ECF0",
        "text_color": "#2C3E50"
    },
    "images/specs/colors.jpg": {
        "size": (800, 400),
        "text": "Color Options",
        "bg_color": "#F5F7FA",
        "text_color": "#2C3E50"
    }
}

def create_placeholder_image(filepath, config):
    """创建占位符图片"""
    # 确保目录存在
    os.makedirs(os.path.dirname(filepath), exist_ok=True)

    # 创建图片
    img = Image.new('RGB', config['size'], config['bg_color'])
    draw = ImageDraw.Draw(img)

    # 尝试加载字体，如果失败则使用默认字体
    try:
        font = ImageFont.truetype("arial.ttf", 36)
        small_font = ImageFont.truetype("arial.ttf", 18)
    except:
        font = ImageFont.load_default()
        small_font = font

    # 绘制文字
    text = config['text']
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]

    x = (config['size'][0] - text_width) // 2
    y = (config['size'][1] - text_height) // 2 - 15

    draw.text((x, y), text, fill=config['text_color'], font=font)

    # 绘制副标题
    subtitle = f"{config['size'][0]}x{config['size'][1]}"
    sub_bbox = draw.textbbox((0, 0), subtitle, font=small_font)
    sub_width = sub_bbox[2] - sub_bbox[0]
    sub_x = (config['size'][0] - sub_width) // 2
    sub_y = y + text_height + 20

    draw.text((sub_x, sub_y), subtitle, fill=config['text_color'], font=small_font)

    # 保存图片
    if filepath.endswith('.png'):
        img.save(filepath, 'PNG')
    else:
        img.save(filepath, 'JPEG', quality=85)

    print(f"✅ Created: {filepath}")

def main():
    """主函数"""
    print("🎨 Generating placeholder images for Cozy Light website...\n")

    for filepath, config in IMAGES_CONFIG.items():
        create_placeholder_image(filepath, config)

    print(f"\n✨ Done! Generated {len(IMAGES_CONFIG)} placeholder images.")
    print("\nYou can now replace these with your actual product images.")
    print("See images/README.md for recommended image sizes.")

if __name__ == "__main__":
    main()
