# 🚀 快速开始指南

欢迎使用 Cozy Light 网站模板！这个指南将帮助你在 5 分钟内启动并运行网站。

## 📋 前提条件

- 一个文本编辑器（推荐 VS Code）
- 一个现代浏览器（Chrome、Firefox、Edge 等）
- 可选：Python 或 Node.js（用于本地预览）

## ⚡ 快速开始

### 1. 打开网站

**方法 A：直接打开（最简单）**
- 双击 `index.html` 文件
- 网站将在浏览器中打开

**方法 B：本地服务器（推荐）**
```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx http-server -p 8000
```
然后访问 http://localhost:8000

### 2. 自定义颜色

打开 `config.js` 文件，修改颜色值：

```javascript
colors: {
  primary: '#4A90D9',        // 改成你想要的主色调
  accent: '#FF8C42',         // 改成你想要的强调色
  // ... 其他颜色
}
```

保存后刷新浏览器即可看到效果！

### 3. 添加图片

1. 将你的图片放入 `images/` 文件夹
2. 参考 `images/README.md` 了解推荐尺寸
3. 图片会自动加载（如果加载失败会显示占位符）

**快速生成占位符图片：**
```bash
# 需要 Python 和 Pillow 库
pip install Pillow
python generate-placeholders.py
```

### 4. 修改文字内容

**修改网站标题和描述：**
编辑 `config.js` 中的 `site` 部分

**修改页面内容：**
直接编辑对应的 HTML 文件：
- `index.html` - 首页
- `features.html` - 功能页面
- `specs.html` - 规格页面
- `about.html` - 关于页面

**提示：** 使用 `Ctrl+F` 搜索关键词快速定位

### 5. 启用深色模式

深色模式默认启用。要禁用它，编辑 `config.js`：

```javascript
features: {
  darkMode: false,  // 改为 false 可禁用
},
```

## 🌐 部署到互联网

### GitHub Pages（免费）

1. 创建 GitHub 仓库
2. 上传所有文件
3. 在仓库设置中启用 GitHub Pages
4. 等待几分钟，你的网站就上线了！

详细步骤请参考 `DEPLOY.md`

## 📁 文件结构

```
lumimist-website/
├── index.html          # 首页
├── features.html       # 功能页面
├── specs.html          # 规格页面
├── about.html          # 关于页面
├── config.js           # 配置文件（颜色、文字等）
├── css/style.css       # 样式文件
├── js/main.js          # JavaScript 文件
├── images/             # 图片文件夹
├── README.md           # 详细文档
├── QUICKSTART.md       # 本文件
└── DEPLOY.md           # 部署指南
```

## 🎨 自定义技巧

### 修改导航菜单

编辑 `config.js` 中的 `navigation` 数组：

```javascript
navigation: [
  { name: '首页', href: 'index.html' },
  { name: '功能', href: 'features.html' },
  { name: '规格', href: 'specs.html' },
  { name: '关于', href: 'about.html' },
],
```

### 添加新页面

1. 复制一个现有的 HTML 文件
2. 修改内容
3. 在导航菜单中添加链接

### 修改字体

编辑 `css/style.css` 文件：

```css
body {
  font-family: '你的字体', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

## ❓ 常见问题

### Q: 修改后没有变化？
A: 强制刷新浏览器（Ctrl+Shift+R）

### Q: 图片不显示？
A: 检查图片路径和文件名是否正确

### Q: 如何添加联系表单？
A: 需要后端支持，可以考虑使用 Formspree 或 Netlify Forms

### Q: 如何添加多语言支持？
A: 需要额外开发，可以考虑使用 i18n 库

## 📚 更多资源

- `README.md` - 完整文档
- `DEPLOY.md` - 部署指南
- `images/README.md` - 图片指南
- `CHANGELOG.md` - 版本历史

## 💡 需要帮助？

- 检查浏览器控制台是否有错误
- 确认文件路径是否正确
- 参考 GitHub Pages 文档

---

**祝你使用愉快！** 🎉

如果觉得有用，欢迎给个 ⭐ Star！
