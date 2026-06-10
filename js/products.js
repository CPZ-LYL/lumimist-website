// ===== 产品页面 JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
  // 标签页切换功能
  initTabs();

  // 产品图片切换
  initProductGallery();

  // 颜色选择
  initColorSelector();

  // 数量选择器
  initQuantitySelector();

  // 购买按钮
  initPurchaseButtons();
});

// 标签页切换
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      // 移除所有活动状态
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // 添加活动状态
      button.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
}

// 产品图片切换
function initProductGallery() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.product-main-image img');
  const mainImageContainer = document.querySelector('.product-main-image');

  // 图片数组
  const images = [
    'images/hero-product.png',
    'images/product-angle-1.jpg',
    'images/product-angle-2.jpg',
    'images/product-angle-3.jpg'
  ];

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      // 移除所有活动状态
      thumbnails.forEach(t => t.classList.remove('active'));

      // 添加活动状态
      thumbnail.classList.add('active');

      // 获取图片索引
      const index = parseInt(thumbnail.getAttribute('data-index'));

      // 切换大图片
      if (mainImage && images[index]) {
        // 添加淡出效果
        mainImage.style.opacity = '0';
        mainImage.style.transform = 'scale(0.95)';

        setTimeout(() => {
          // 更新图片源
          mainImage.src = images[index];

          // 添加淡入效果
          mainImage.style.opacity = '1';
          mainImage.style.transform = 'scale(1)';
        }, 200);
      }

      console.log('Switch to image:', images[index]);
    });
  });

  // 添加图片切换动画样式
  if (mainImage) {
    mainImage.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  }
}

// 颜色选择器
function initColorSelector() {
  const colorButtons = document.querySelectorAll('.color-btn');

  colorButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 移除所有活动状态
      colorButtons.forEach(btn => btn.classList.remove('active'));

      // 添加活动状态
      button.classList.add('active');

      // 获取选中的颜色
      const selectedColor = button.getAttribute('data-color');
      console.log('Selected color:', selectedColor);

      // 这里可以添加更新产品图片的逻辑
      // updateProductImage(selectedColor);
    });
  });
}

// 数量选择器
function initQuantitySelector() {
  const minusBtn = document.querySelector('.qty-btn.minus');
  const plusBtn = document.querySelector('.qty-btn.plus');
  const qtyInput = document.querySelector('.qty-input');

  if (minusBtn && plusBtn && qtyInput) {
    minusBtn.addEventListener('click', () => {
      let currentValue = parseInt(qtyInput.value);
      if (currentValue > 1) {
        qtyInput.value = currentValue - 1;
      }
    });

    plusBtn.addEventListener('click', () => {
      let currentValue = parseInt(qtyInput.value);
      if (currentValue < 10) {
        qtyInput.value = currentValue + 1;
      }
    });

    qtyInput.addEventListener('change', () => {
      let currentValue = parseInt(qtyInput.value);
      if (currentValue < 1) {
        qtyInput.value = 1;
      } else if (currentValue > 10) {
        qtyInput.value = 10;
      }
    });
  }
}

// 购买按钮
function initPurchaseButtons() {
  const addToCartBtn = document.querySelector('.btn-add-cart');
  const buyNowBtn = document.querySelector('.btn-buy-now');
  const wishlistBtn = document.querySelector('.btn-wishlist');

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const color = document.querySelector('.color-btn.active')?.getAttribute('data-color') || 'white';
      const quantity = document.querySelector('.qty-input')?.value || 1;

      // 这里添加购物车逻辑
      showNotification(`Added ${quantity} Cozy Light Pro (${color}) to cart!`);

      // 实际项目中，这里会调用购物车API
      console.log('Add to cart:', { color, quantity });
    });
  }

  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      const color = document.querySelector('.color-btn.active')?.getAttribute('data-color') || 'white';
      const quantity = document.querySelector('.qty-input')?.value || 1;

      // 这里添加立即购买逻辑
      showNotification('Redirecting to checkout...');

      // 实际项目中，这里会跳转到结账页面
      console.log('Buy now:', { color, quantity });
    });
  }

  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => {
      wishlistBtn.classList.toggle('active');

      if (wishlistBtn.classList.contains('active')) {
        wishlistBtn.querySelector('svg').setAttribute('fill', 'currentColor');
        showNotification('Added to wishlist!');
      } else {
        wishlistBtn.querySelector('svg').setAttribute('fill', 'none');
        showNotification('Removed from wishlist');
      }
    });
  }
}

// 通知功能
function showNotification(message) {
  // 创建通知元素
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #333;
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;

  document.body.appendChild(notification);

  // 3秒后移除
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
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
