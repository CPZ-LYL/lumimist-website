// ===== Cozy Light 网站配置文件 =====
// 修改这个文件可以快速更改网站的颜色和基本设置

const SITE_CONFIG = {
  // ===== 颜色配置 =====
  // 修改这些颜色值可以改变整个网站的配色
  colors: {
    primary: '#4A90D9',        // 主色调（蓝色）
    primaryLight: '#6BA3E0',   // 主色调浅色
    primaryDark: '#3A7BC8',    // 主色调深色
    accent: '#FF8C42',         // 强调色（橙色）
    accentLight: '#FFA366',    // 强调色浅色
    background: '#F5F7FA',     // 背景色
    backgroundWhite: '#FFFFFF', // 白色背景
    textDark: '#2C3E50',       // 深色文字
    textMedium: '#5A6C7D',     // 中等文字
    textLight: '#8899AA',      // 浅色文字
    border: '#E8ECF0',         // 边框颜色
  },

  // ===== 网站信息 =====
  site: {
    name: 'Cozy Light',                                          // 网站名称
    title: 'Cozy Light - Bluetooth Night Light & Humidifier',   // 网站标题
    description: 'Cozy Light combines a soothing night light with a refreshing humidifier. Bluetooth-enabled for smart control.',
    author: '温馨光辉',
    url: 'https://cpz-lyl.github.io/lumimist-website/',
  },

  // ===== 图片路径配置 =====
  // 在这里管理所有图片路径，方便统一修改
  images: {
    logo: 'images/logo.svg',
    hero: 'images/hero-product.png',
    features: {
      bluetooth: 'images/features/bluetooth.jpg',
      nightlight: 'images/features/nightlight.jpg',
      humidifier: 'images/features/humidifier.jpg',
      portable: 'images/features/portable.jpg',
    },
    showcase: 'images/showcase-lifestyle.jpg',
    about: {
      story: 'images/about/story.jpg',
      team: 'images/about/team.jpg',
    },
    specs: {
      general: 'images/specs/general.jpg',
      colors: 'images/specs/colors.jpg',
    }
  },

  // ===== 社交媒体链接 =====
  social: {
    instagram: '#',
    twitter: '#',
    facebook: '#',
    youtube: '#',
  },

  // ===== 联系信息 =====
  contact: {
    email: 'support@cozylight.com',
    phone: '+1 (800) 555-1234',
    address: '123 Innovation Drive, Tech Valley, CA 94025',
  },

  // ===== 功能开关 =====
  features: {
    darkMode: true,           // 是否启用深色模式切换
    animations: true,         // 是否启用动画效果
    smoothScroll: true,       // 是否启用平滑滚动
  },

  // ===== 导航菜单 =====
  navigation: [
    { name: 'Home', href: 'index.html' },
    { name: 'Features', href: 'features.html' },
    { name: 'Specs', href: 'specs.html' },
    { name: 'About', href: 'about.html' },
  ],

  // ===== 首页功能卡片 =====
  featureCards: [
    {
      icon: 'bluetooth',
      title: 'Bluetooth Control',
      description: 'Control your Cozy Light remotely via Bluetooth app. Adjust settings, set timers, and customize lighting modes from your phone.',
    },
    {
      icon: 'light',
      title: 'Ambient Night Light',
      description: 'Choose from multiple color modes and brightness levels. Create the perfect atmosphere for any mood.',
    },
    {
      icon: 'mist',
      title: 'Cool Mist Humidifier',
      description: 'Ultra-fine mist moisturizes the air, relieving dry skin and improving breathing comfort while you sleep.',
    },
    {
      icon: 'battery',
      title: 'Portable & Rechargeable',
      description: 'Built-in battery lasts up to 8 hours. Take it anywhere - bedroom, office, or outdoor adventures.',
    },
  ],

  // ===== 规格参数 =====
  specifications: {
    general: {
      model: 'Cozy Light Pro',
      dimensions: '120 x 120 x 180 mm',
      weight: '380g (without water)',
      materials: 'ABS + Silicone',
      waterTank: '200ml',
    },
    battery: {
      capacity: '2000mAh',
      life: '6-8 hours',
      chargingPort: 'USB-C',
      chargingTime: '2-3 hours',
      input: '5V/1A',
    },
    bluetooth: {
      version: 'Bluetooth 5.0',
      range: 'Up to 10m (33ft)',
      profiles: 'A2DP, HFP, HSP',
      frequency: '2.4GHz',
      multiDevice: 'Yes (2 devices)',
    },
    light: {
      type: 'RGB + Warm/Cool White',
      colors: '7 colors + cycling',
      brightness: 'Adjustable (10-100%)',
      modes: 'Static, Breathing, Cycling',
      lifespan: '50,000 hours',
    },
    humidifier: {
      technology: 'Ultrasonic',
      mistOutput: '30-50ml/hour',
      runtime: '4-6 hours',
      noiseLevel: '<30dB',
      autoShutoff: 'Yes (low water)',
    },
    audio: {
      speaker: '5W',
      frequencyResponse: '100Hz - 20kHz',
      snr: '≥85dB',
      microphone: 'Built-in (hands-free)',
      codec: 'SBC, AAC',
    },
  },

  // ===== 颜色选项 =====
  colorOptions: [
    { name: 'Pure White', hex: '#FFFFFF', description: 'Classic & Clean' },
    { name: 'Midnight Black', hex: '#2C3E50', description: 'Sleek & Modern' },
    { name: 'Warm Beige', hex: '#F5E6D3', description: 'Natural & Cozy' },
    { name: 'Light Wood', hex: '#E8D5C4', description: 'Scandinavian Style' },
  ],
};

// 导出配置（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
