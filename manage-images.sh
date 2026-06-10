#!/bin/bash

# Cozy Light 图片管理脚本

echo "🖼️  Cozy Light Image Manager"
echo ""

# 显示菜单
show_menu() {
    echo "请选择操作:"
    echo "  1. 查看图片状态"
    echo "  2. 生成占位符图片"
    echo "  3. 打开图片文件夹"
    echo "  4. 退出"
    echo ""
    read -p "请输入选项 (1-4): " choice
    echo ""
}

# 查看图片状态
check_images() {
    echo "📊 图片状态:"
    echo ""

    # 首页图片
    echo "首页 (index.html):"
    if [ -f "images/hero-product.png" ]; then
        echo "  ✅ hero-product.png"
    else
        echo "  ❌ hero-product.png (缺失)"
    fi

    if [ -f "images/showcase-lifestyle.jpg" ]; then
        echo "  ✅ showcase-lifestyle.jpg"
    else
        echo "  ❌ showcase-lifestyle.jpg (缺失)"
    fi

    echo ""

    # 功能页面图片
    echo "功能页面 (features.html):"
    for img in bluetooth.jpg nightlight.jpg humidifier.jpg portable.jpg; do
        if [ -f "images/features/$img" ]; then
            echo "  ✅ $img"
        else
            echo "  ❌ $img (缺失)"
        fi
    done

    echo ""

    # 关于页面图片
    echo "关于页面 (about.html):"
    for img in story.jpg team.jpg; do
        if [ -f "images/about/$img" ]; then
            echo "  ✅ $img"
        else
            echo "  ❌ $img (缺失)"
        fi
    done

    echo ""

    # 规格页面图片
    echo "规格页面 (specs.html):"
    for img in general.jpg colors.jpg; do
        if [ -f "images/specs/$img" ]; then
            echo "  ✅ $img"
        else
            echo "  ❌ $img (缺失)"
        fi
    done

    echo ""
}

# 生成占位符图片
generate_placeholders() {
    if command -v python3 &> /dev/null; then
        python3 generate-placeholders.py
    elif command -v python &> /dev/null; then
        python generate-placeholders.py
    else
        echo "❌ Python not found! Cannot generate placeholders."
        echo "Please install Python or add images manually."
    fi
}

# 打开图片文件夹
open_images_folder() {
    if command -v explorer &> /dev/null; then
        explorer images
    elif command -v open &> /dev/null; then
        open images
    elif command -v xdg-open &> /dev/null; then
        xdg-open images
    else
        echo "📂 Image folder: images/"
        echo "Please open this folder manually."
    fi
}

# 主循环
while true; do
    show_menu

    case $choice in
        1)
            check_images
            ;;
        2)
            generate_placeholders
            ;;
        3)
            open_images_folder
            ;;
        4)
            echo "👋 Goodbye!"
            exit 0
            ;;
        *)
            echo "❌ Invalid option. Please try again."
            ;;
    esac

    echo ""
    read -p "Press Enter to continue..."
    echo ""
done
