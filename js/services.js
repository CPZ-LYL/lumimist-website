// ===== 服务支持页面 JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
  // FAQ 手风琴功能
  initFAQ();

  // 表单提交
  initContactForm();
});

// FAQ 手风琴功能
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // 关闭其他FAQ项
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // 切换当前项
      item.classList.toggle('active');
    });
  });

  // 如果URL包含锚点，自动展开对应的FAQ
  const hash = window.location.hash;
  if (hash && hash.startsWith('#faq')) {
    const targetFAQ = document.querySelector(hash);
    if (targetFAQ && targetFAQ.classList.contains('faq-item')) {
      targetFAQ.classList.add('active');
      targetFAQ.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

// 联系表单
function initContactForm() {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // 获取表单数据
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      // 验证必填字段
      if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
      }

      // 验证邮箱格式
      if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
      }

      // 模拟表单提交
      showNotification('Sending message...', 'info');

      // 模拟API调用
      setTimeout(() => {
        console.log('Form submitted:', data);
        showNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
        contactForm.reset();
      }, 1500);
    });
  }

  // 通讯订阅表单
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value;

      if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
      }

      // 模拟订阅
      showNotification('Subscribing...', 'info');

      setTimeout(() => {
        console.log('Newsletter subscription:', email);
        showNotification('Successfully subscribed! Check your email for confirmation.', 'success');
        emailInput.value = '';
      }, 1000);
    });
  }
}

// 邮箱验证
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 通知功能
function showNotification(message, type = 'success') {
  // 移除现有通知
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // 创建通知元素
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // 根据类型设置颜色
  let bgColor;
  switch (type) {
    case 'success':
      bgColor = '#4CAF50';
      break;
    case 'error':
      bgColor = '#f44336';
      break;
    case 'info':
      bgColor = '#2196F3';
      break;
    default:
      bgColor = '#333';
  }

  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: ${bgColor};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: slideIn 0.3s ease;
    max-width: 400px;
    font-size: 0.95rem;
  `;

  document.body.appendChild(notification);

  // 自动移除
  const duration = type === 'error' ? 5000 : 3000;
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    }
  }, duration);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
