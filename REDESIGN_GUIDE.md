# Cozy Light 网站改造指南

## 🎯 目标定位

**用途**: 产品销售网站
**风格**: 简约现代
**核心功能**:
- 多语言支持（中/英）
- 在线购买功能
- 产品画廊
- 用户评价

---

## 📋 改造步骤

### 阶段一：视觉升级（1-2天）

#### 1.1 优化配色方案

编辑 `config.js`，更新为更现代的配色：

```javascript
colors: {
  primary: '#1a1a2e',        // 深蓝黑（主色调）
  primaryLight: '#16213e',   // 浅一点的深蓝
  primaryDark: '#0f0f1a',    // 更深的蓝黑
  accent: '#e94560',         // 红色强调色（用于购买按钮）
  accentLight: '#ff6b6b',   // 浅红色
  background: '#fafafa',    // 浅灰背景
  backgroundWhite: '#ffffff',
  textDark: '#1a1a2e',      // 深色文字
  textMedium: '#666666',    // 中等文字
  textLight: '#999999',     // 浅色文字
  border: '#e0e0e0',        // 边框
}
```

#### 1.2 优化字体

在 `css/style.css` 中添加更现代的字体：

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

#### 1.3 添加产品图片

将你的产品图片放入 `images/` 文件夹：
- `hero-product.png` - 首页主图（800x800px）
- `product-1.jpg` ~ `product-6.jpg` - 产品画廊图片
- `lifestyle.jpg` - 生活场景图

---

### 阶段二：功能增强（3-5天）

#### 2.1 产品画廊功能

在首页添加产品画廊区域，参考以下结构：

```html
<!-- 产品画廊 -->
<section class="product-gallery">
  <div class="container">
    <h2>Product Gallery</h2>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="images/product-1.jpg" alt="Product 1">
        <div class="gallery-overlay">
          <span>View Details</span>
        </div>
      </div>
      <!-- 更多图片... -->
    </div>
  </div>
</section>
```

#### 2.2 用户评价模块

在规格页面后添加用户评价：

```html
<!-- 用户评价 -->
<section class="testimonials">
  <div class="container">
    <h2>What Our Customers Say</h2>
    <div class="testimonial-grid">
      <div class="testimonial-card">
        <div class="stars">★★★★★</div>
        <p>"Amazing product! The mist is so fine and the light is beautiful."</p>
        <div class="author">
          <img src="images/avatar-1.jpg" alt="User">
          <div>
            <h4>Sarah M.</h4>
            <span>Verified Buyer</span>
          </div>
        </div>
      </div>
      <!-- 更多评价... -->
    </div>
  </div>
</section>
```

#### 2.3 在线购买功能

**方案A: 使用 PayPal 按钮（简单）**
1. 注册 PayPal 商家账户
2. 创建购买按钮
3. 将按钮代码添加到网站

**方案B: 使用 Shopify Buy Button（推荐）**
1. 注册 Shopify 账户
2. 创建产品
3. 获取 Buy Button 代码
4. 嵌入到网站

**方案C: 使用 Stripe（高级）**
1. 注册 Stripe 账户
2. 获取 API 密钥
3. 集成支付功能

---

### 阶段三：多语言支持（2-3天）

#### 3.1 创建语言文件

创建 `lang/` 文件夹，添加语言文件：

**lang/en.json**
```json
{
  "nav": {
    "home": "Home",
    "features": "Features",
    "specs": "Specifications",
    "about": "About"
  },
  "hero": {
    "title": "Light. Mist. Music.",
    "subtitle": "Experience the perfect blend...",
    "cta": "Shop Now"
  }
}
```

**lang/zh.json**
```json
{
  "nav": {
    "home": "首页",
    "features": "功能",
    "specs": "规格",
    "about": "关于"
  },
  "hero": {
    "title": "光. 雾. 音乐.",
    "subtitle": "体验完美的结合...",
    "cta": "立即购买"
  }
}
```

#### 3.2 添加语言切换按钮

在导航栏添加语言切换：

```html
<div class="lang-switcher">
  <button class="lang-btn active" data-lang="en">EN</button>
  <button class="lang-btn" data-lang="zh">中文</button>
</div>
```

#### 3.3 创建语言切换脚本

创建 `js/i18n.js` 处理语言切换逻辑。

---

### 阶段四：优化和测试（1-2天）

#### 4.1 性能优化

- 压缩图片（使用 TinyPNG）
- 启用浏览器缓存
- 优化 CSS 和 JS

#### 4.2 SEO 优化

添加 Meta 标签：

```html
<meta name="keywords" content="humidifier, night light, bluetooth speaker">
<meta name="author" content="Cozy Light">
<meta property="og:title" content="Cozy Light - Bluetooth Night Light & Humidifier">
<meta property="og:description" content="...">
<meta property="og:image" content="images/hero-product.png">
```

#### 4.3 测试清单

- [ ] 所有页面在手机上正常显示
- [ ] 图片加载正常
- [ ] 购买按钮可点击
- [ ] 多语言切换正常
- [ ] 深色模式正常
- [ ] 所有链接有效

---

## 🛠️ 具体修改文件清单

### 需要修改的文件

1. **config.js** - 更新颜色配置
2. **css/style.css** - 添加新样式
3. **js/main.js** - 添加新功能
4. **index.html** - 添加画廊和评价
5. **features.html** - 更新内容
6. **specs.html** - 添加购买按钮
7. **about.html** - 更新品牌故事

### 需要创建的新文件

1. **lang/en.json** - 英文语言包
2. **lang/zh.json** - 中文语言包
3. **js/i18n.js** - 多语言脚本
4. **js/gallery.js** - 画廊功能
5. **css/gallery.css** - 画廊样式
6. **css/testimonials.css** - 评价样式

---

## 📐 设计规范

### 间距系统
- 小间距: 8px
- 中间距: 16px
- 大间距: 32px
- 超大间距: 64px

### 圆角
- 按钮: 8px
- 卡片: 12px
- 图片: 16px

### 阴影
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
```

---

## 🎨 参考网站

以下网站的风格可以参考：

1. **Apple.com** - 简约、留白、高质量图片
2. **Dyson.com** - 产品展示、技术规格
3. **Anker.com** - 产品销售、用户评价

---

## 📞 需要帮助？

如果你在改造过程中遇到问题：

1. 查看 `README.md` 了解基础编辑方法
2. 查看 `QUICKSTART.md` 快速上手
3. 告诉我具体需要什么帮助

---

## ✅ 完成检查清单

### 视觉设计
- [ ] 配色方案已更新
- [ ] 字体已优化
- [ ] 产品图片已添加
- [ ] 响应式设计正常

### 功能实现
- [ ] 产品画廊可正常浏览
- [ ] 用户评价已添加
- [ ] 购买按钮可点击
- [ ] 多语言切换正常

### 内容完善
- [ ] 产品描述已更新
- [ ] 技术规格已完善
- [ ] 品牌故事已补充
- [ ] 联系信息已更新

### 测试部署
- [ ] 所有页面测试通过
- [ ] 移动端显示正常
- [ ] 图片加载正常
- [ ] 已部署到 GitHub Pages

---

**祝你改造顺利！** 🚀
