// ===== Cozy Light 网站主脚本 =====

// 从 config.js 加载配置并应用颜色
function applyConfig() {
  if (typeof SITE_CONFIG === 'undefined') {
    console.warn('config.js not loaded, using default colors');
    return;
  }

  const root = document.documentElement;
  const colors = SITE_CONFIG.colors;

  // 应用颜色配置到 CSS 变量
  root.style.setProperty('--primary', colors.primary);
  root.style.setProperty('--primary-light', colors.primaryLight);
  root.style.setProperty('--primary-dark', colors.primaryDark);
  root.style.setProperty('--accent', colors.accent);
  root.style.setProperty('--accent-light', colors.accentLight);
  root.style.setProperty('--bg-light', colors.background);
  root.style.setProperty('--bg-white', colors.backgroundWhite);
  root.style.setProperty('--text-dark', colors.textDark);
  root.style.setProperty('--text-medium', colors.textMedium);
  root.style.setProperty('--text-light', colors.textLight);
  root.style.setProperty('--border', colors.border);

  console.log('✅ Config applied successfully');
}

// ===== 移动端菜单切换 =====
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // 点击链接时关闭菜单
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // 点击外部时关闭菜单
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

// ===== 滚动动画（淡入效果）=====
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 观察所有 fade-in 元素
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// ===== 头部滚动效果 =====
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // 滚动时添加阴影
    if (currentScrollY > 10) {
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
  });
}

// ===== 平滑滚动到锚点 =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // 跳过只有 "#" 的链接
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80; // 考虑固定头部的高度
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===== 高亮当前页面的导航链接 =====
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ===== 深色模式切换 =====
function initDarkMode() {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  if (!darkModeToggle) return;

  // 检查本地存储
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    updateDarkModeIcon(true);
  }

  // 切换深色模式
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateDarkModeIcon(isDark);
  });
}

function updateDarkModeIcon(isDark) {
  const toggle = document.querySelector('.dark-mode-toggle');
  if (!toggle) return;

  // 使用太阳/月亮图标
  toggle.innerHTML = isDark
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// ===== 控制台欢迎信息 =====
function showWelcome() {
  console.log('%c Cozy Light ', 'background: #4A90D9; color: white; font-size: 20px; padding: 10px; border-radius: 4px;');
  console.log('Welcome to Cozy Light - Bluetooth Night Light & Humidifier');
  console.log('Edit config.js to customize colors and settings');
}

// ===== 初始化所有功能 =====
function init() {
  applyConfig();           // 应用配置
  initMobileMenu();        // 初始化移动端菜单
  initScrollAnimations();  // 初始化滚动动画
  initHeaderScroll();      // 初始化头部滚动效果
  initSmoothScroll();      // 初始化平滑滚动
  setActiveNavLink();      // 设置活动导航链接
  initDarkMode();          // 初始化深色模式
  showWelcome();           // 显示欢迎信息
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 如果页面已经加载完成，立即初始化
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  init();
}
