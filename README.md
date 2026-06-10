# Cozy Light 网站编辑指南

## 📁 文件结构

```
F:\网站\
├── index.html              # 首页
├── products.html           # 产品中心页面 ⭐ 新增
├── about.html              # 关于我们页面 ⭐ 更新
├── services.html           # 服务支持页面 ⭐ 新增
├── news.html               # 新闻中心页面 ⭐ 新增
├── contact.html            # 联系我们页面 ⭐ 新增
├── features.html           # 功能页面（旧版）
├── specs.html              # 规格页面（旧版）
├── config.js               # 配置文件（颜色、文字、链接等）
├── favicon.svg             # 网站图标
├── generate-placeholders.py # 图片生成脚本
├── css/
│   ├── style.css           # 主样式文件
│   ├── products.css        # 产品页面样式 ⭐ 新增
│   ├── about.css           # 关于我们页面样式 ⭐ 新增
│   ├── services.css        # 服务支持页面样式 ⭐ 新增
│   ├── news.css            # 新闻中心页面样式 ⭐ 新增
│   └── contact.css         # 联系我们页面样式 ⭐ 新增
├── js/
│   ├── main.js             # 主JavaScript文件
│   ├── products.js         # 产品页面功能 ⭐ 新增
│   ├── services.js         # 服务支持页面功能 ⭐ 新增
│   ├── news.js             # 新闻中心页面功能 ⭐ 新增
│   └── contact.js          # 联系我们页面功能 ⭐ 新增
└── images/
    ├── README.md           # 图片说明
    ├── placeholder.svg     # 占位符图片
    ├── hero-product.png    # 首页主图
    ├── about/              # 关于我们页面图片 ⭐ 新增
    ├── team/               # 团队成员图片 ⭐ 新增
    ├── news/               # 新闻图片 ⭐ 新增
    ├── features/           # 功能页面图片
    └── specs/              # 规格页面图片
```

## 🎨 如何修改颜色

### 方法1：修改 config.js（推荐）

打开 `config.js` 文件，找到 `colors` 部分：

```javascript
colors: {
  primary: '#4A90D9',        // 改成你想要的主色调
  primaryLight: '#6BA3E0',   // 主色调的浅色版本
  primaryDark: '#3A7BC8',    // 主色调的深色版本
  accent: '#FF8C42',         // 强调色
  // ... 其他颜色
}
```

修改后刷新页面即可看到效果。

### 方法2：修改 CSS 变量

打开 `css/style.css` 文件，找到最上面的 `:root` 部分：

```css
:root {
  --primary: #4A90D9;        /* 改成你想要的颜色 */
  --primary-light: #6BA3E0;
  /* ... 其他变量 */
}
```

## 🖼️ 如何添加/修改图片

### 步骤1：准备图片

将你的图片放入 `images/` 文件夹，建议的图片尺寸：

**产品页面 (products.html)**
- **hero-product.png**: 800 x 800px（正方形，产品主图）
- **product-angle-1.jpg ~ product-angle-4.jpg**: 600 x 600px（产品多角度）
- **product-lite.jpg**: 400 x 400px（其他产品）
- **product-mini.jpg**: 400 x 400px（其他产品）

**关于我们页面 (about.html)**
- **about/company.jpg**: 800 x 500px（公司照片）
- **team/ceo.jpg**: 400 x 500px（CEO照片）
- **team/designer.jpg**: 400 x 500px（设计总监照片）
- **team/engineer.jpg**: 400 x 500px（工程总监照片）
- **team/marketing.jpg**: 400 x 500px（市场总监照片）
- **team/operations.jpg**: 400 x 500px（运营经理照片）
- **team/support.jpg**: 400 x 500px（客服主管照片）

**新闻中心页面 (news.html)**
- **news/featured.jpg**: 800 x 500px（置顶新闻图片）
- **news/office.jpg**: 600 x 400px（公司新闻图片）
- **news/app-update.jpg**: 600 x 400px（产品新闻图片）
- **news/award.jpg**: 600 x 400px（行业新闻图片）
- **news/press.jpg**: 600 x 400px（媒体报道图片）
- **news/team.jpg**: 600 x 400px（团队新闻图片）
- **news/accessories.jpg**: 600 x 400px（产品新闻图片）

### 步骤2：修改 HTML 中的图片路径

在对应的 HTML 文件中找到图片位置，修改 `src` 属性：

```html
<!-- 之前 -->
<img src="images/placeholder.png" alt="Product">

<!-- 修改为 -->
<img src="images/your-image.jpg" alt="Product">
```

## 📝 如何修改文字内容

### 方法1：修改 config.js（部分文字）

一些通用文字可以在 `config.js` 中修改：

```javascript
site: {
  name: 'Cozy Light',  // 网站名称
  title: 'Cozy Light - Bluetooth Night Light & Humidifier',
  description: '网站描述',
},

contact: {
  email: 'your-email@example.com',
  phone: '+1 (XXX) XXX-XXXX',
  address: '你的地址',
},
```

### 方法2：直接修改 HTML

大部分文字内容需要直接在 HTML 文件中修改：

1. 用文本编辑器打开对应的 HTML 文件
2. 找到要修改的文字
3. 直接修改即可

**提示**：使用 `Ctrl+F` (Windows) 或 `Cmd+F` (Mac) 搜索关键词

## 🔗 如何修改链接

### 导航链接

导航链接在每个 HTML 文件中都有，需要在所有文件中保持一致：

```html
<div class="nav-links">
  <a href="index.html">Home</a>
  <a href="products.html">Products</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="news.html">News</a>
  <a href="contact.html">Contact</a>
</div>
```

### 社交媒体链接

在 `config.js` 中修改 `social` 部分：

```javascript
social: {
  instagram: 'https://instagram.com/your-account',
  twitter: 'https://twitter.com/your-account',
  facebook: 'https://facebook.com/your-page',
},
```

## 🌙 如何启用/禁用深色模式

在 `config.js` 中修改：

```javascript
features: {
  darkMode: true,   // 改为 false 可禁用深色模式切换按钮
},
```

## 📱 响应式设计

网站已经内置了响应式设计，会自动适配：
- 桌面电脑（>1024px）
- 平板电脑（768px-1024px）
- 手机（<768px）

## 🚀 部署到 GitHub Pages

1. 将所有文件上传到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 `master` 分支作为源
4. 等待几分钟，网站就会发布

## 💡 常见问题

### Q: 图片不显示怎么办？
A: 检查图片路径是否正确，确保图片文件存在于 `images/` 文件夹中。

### Q: 修改后没有变化？
A: 尝试强制刷新浏览器（Ctrl+Shift+R 或 Cmd+Shift+R）清除缓存。

### Q: 如何添加新页面？
A: 复制一个现有的 HTML 文件，修改内容，然后在导航菜单中添加链接。

### Q: 如何修改字体？
A: 在 `css/style.css` 中修改 `font-family` 属性。

## 📞 需要帮助？

如果遇到问题，可以：
1. 检查浏览器控制台是否有错误信息
2. 确认文件路径是否正确
3. 确保所有文件都已上传

---

**祝你使用愉快！** 🎉
