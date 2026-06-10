#!/bin/bash

# Cozy Light 网站本地预览脚本

echo "🚀 Starting Cozy Light website preview..."
echo ""

# 检查是否安装了 Python
if command -v python3 &> /dev/null; then
    echo "✅ Python found, starting server..."
    echo ""
    echo "📍 Website: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python found, starting server..."
    echo ""
    echo "📍 Website: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python -m http.server 8000
elif command -v node &> /dev/null; then
    echo "✅ Node.js found, starting server..."
    echo ""
    echo "📍 Website: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    npx http-server -p 8000
else
    echo "❌ Python or Node.js not found!"
    echo ""
    echo "Please install one of the following:"
    echo "  - Python: https://www.python.org/"
    echo "  - Node.js: https://nodejs.org/"
    echo ""
    echo "Or simply open index.html in your browser."
    exit 1
fi
