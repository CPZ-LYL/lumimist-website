# 部署指南

## 🚀 部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库

1. 登录 GitHub
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名建议使用: `lumimist-website` 或 `your-username.github.io`
4. 选择 "Public"
5. 点击 "Create repository"

### 步骤 2: 上传文件

#### 方法 A: 使用 Git 命令行（推荐）

```bash
# 1. 进入网站目录
cd lumimist-website-improved

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件
git add .

# 4. 提交更改
git commit -m "Initial commit: Cozy Light website"

# 5. 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 6. 推送到 GitHub
git branch -M main
git push -u origin main
```

#### 方法 B: 使用 GitHub 网页界面

1. 进入你的 GitHub 仓库页面
2. 点击 "Add file" → "Upload files"
3. 拖拽所有文件到页面中
4. 点击 "Commit changes"

### 步骤 3: 启用 GitHub Pages

1. 进入仓库的 "Settings" 页面
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - 文件夹选择 "/ (root)"
4. 点击 "Save"

### 步骤 4: 访问你的网站

等待 2-5 分钟，然后访问：
- 如果仓库名是 `your-username.github.io`: `https://your-username.github.io/`
- 如果仓库名是其他: `https://your-username.github.io/repo-name/`

## 🌐 自定义域名（可选）

如果你有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件，内容为你的域名：
   ```
   www.yourdomain.com
   ```

2. 在你的域名服务商处添加 DNS 记录：
   - 类型: CNAME
   - 名称: www
   - 值: your-username.github.io

3. 在 GitHub Pages 设置中勾选 "Enforce HTTPS"

## 📝 更新网站

每次修改后，只需：

```bash
# 1. 添加修改的文件
git add .

# 2. 提交更改
git commit -m "Update: 描述你的修改"

# 3. 推送到 GitHub
git push
```

GitHub Pages 会自动重新部署（通常 1-5 分钟）。

## 🔧 本地预览

在上传之前，可以在本地预览网站：

### 方法 1: 直接打开 HTML 文件
双击 `index.html` 文件，用浏览器打开。

### 方法 2: 使用 Python 简单服务器
```bash
# Python 3
python -m http.server 8000

# 然后在浏览器中访问 http://localhost:8000
```

### 方法 3: 使用 Node.js
```bash
# 安装 http-server
npm install -g http-server

# 启动服务器
http-server -p 8000

# 然后在浏览器中访问 http://localhost:8000
```

## ❓ 常见问题

### Q: 网站没有显示？
A: 
1. 检查 GitHub Pages 是否已启用
2. 确认文件已正确上传
3. 等待几分钟让部署完成
4. 检查仓库是否是 Public

### Q: 图片不显示？
A:
1. 检查图片路径是否正确
2. 确认图片文件已上传
3. 检查文件名大小写是否匹配

### Q: 样式没有加载？
A:
1. 检查 CSS 文件路径
2. 确认 `css/style.css` 文件存在
3. 检查浏览器控制台是否有错误

### Q: 如何回滚到之前的版本？
A:
```bash
# 查看提交历史
git log --oneline

# 回滚到指定版本
git reset --hard COMMIT_HASH

# 强制推送
git push -f
```

## 📞 需要帮助？

- GitHub Pages 文档: https://docs.github.com/en/pages
- Git 教程: https://git-scm.com/docs/gittutorial

---

**祝你部署顺利！** 🎉
