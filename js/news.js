// ===== 新闻中心页面 JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
  // 新闻分类筛选
  initNewsFilter();

  // 加载更多功能
  initLoadMore();

  // 通讯订阅
  initNewsletter();
});

// 新闻分类筛选
function initNewsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const newsCards = document.querySelectorAll('.news-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // 更新按钮状态
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 筛选新闻卡片
      newsCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });

      // 更新计数
      const visibleCount = document.querySelectorAll('.news-card[style="display: block;"]').length;
      console.log(`Showing ${visibleCount} news articles`);
    });
  });
}

// 加载更多功能
function initLoadMore() {
  const loadMoreBtn = document.querySelector('.btn-load-more');

  if (loadMoreBtn) {
    let currentPage = 1;
    const articlesPerPage = 6;

    loadMoreBtn.addEventListener('click', () => {
      currentPage++;
      showNotification('Loading more articles...', 'info');

      // 模拟API调用
      setTimeout(() => {
        // 这里应该是实际的API调用
        // 目前只是模拟加载
        console.log(`Loading page ${currentPage}`);

        // 模拟没有更多文章的情况
        if (currentPage > 3) {
          loadMoreBtn.textContent = 'No More Articles';
          loadMoreBtn.disabled = true;
          loadMoreBtn.style.opacity = '0.5';
          showNotification('All articles loaded', 'success');
        } else {
          showNotification('More articles loaded!', 'success');
        }
      }, 1000);
    });
  }
}

// 通讯订阅
function initNewsletter() {
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

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// 新闻卡片点击事件
document.querySelectorAll('.news-card').forEach(card => {
  card.addEventListener('click', function(e) {
    // 如果点击的是链接，不阻止默认行为
    if (e.target.tagName === 'A') return;

    // 获取新闻标题
    const title = this.querySelector('h3').textContent;
    console.log('Clicked news:', title);

    // 这里可以添加跳转到新闻详情页的逻辑
    // window.location.href = `/news/${slug}`;
  });
});

// 新闻详情页返回按钮
const backBtn = document.querySelector('.back-to-news');
if (backBtn) {
  backBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.history.back();
  });
}
