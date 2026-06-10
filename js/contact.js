// ===== 联系我们页面 JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
  // 联系表单
  initContactForm();

  // 实时聊天按钮
  initLiveChat();

  // 表单验证
  initFormValidation();
});

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
      const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
      const missingFields = requiredFields.filter(field => !data[field]);

      if (missingFields.length > 0) {
        showNotification('Please fill in all required fields.', 'error');
        highlightMissingFields(missingFields);
        return;
      }

      // 验证邮箱格式
      if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        highlightField('email');
        return;
      }

      // 验证消息长度
      if (data.message.length < 10) {
        showNotification('Please provide more details in your message (at least 10 characters).', 'error');
        highlightField('message');
        return;
      }

      // 模拟表单提交
      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // 模拟API调用
      setTimeout(() => {
        console.log('Contact form submitted:', data);

        // 成功提示
        showNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');

        // 重置表单
        contactForm.reset();

        // 恢复按钮
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // 可选：显示确认页面或模态框
        showConfirmationModal(data.firstName);
      }, 2000);
    });
  }
}

// 高亮缺失字段
function highlightMissingFields(fields) {
  fields.forEach(field => {
    highlightField(field);
  });
}

// 高亮单个字段
function highlightField(fieldName) {
  const field = document.getElementById(fieldName);
  if (field) {
    field.style.borderColor = '#f44336';
    field.style.boxShadow = '0 0 0 3px rgba(244, 67, 54, 0.1)';

    // 移除高亮
    setTimeout(() => {
      field.style.borderColor = '';
      field.style.boxShadow = '';
    }, 3000);
  }
}

// 邮箱验证
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 实时聊天按钮
function initLiveChat() {
  const chatButtons = document.querySelectorAll('[onclick*="alert"]');

  chatButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      showLiveChatModal();
    });
  });
}

// 显示实时聊天模态框
function showLiveChatModal() {
  // 移除现有模态框
  const existingModal = document.querySelector('.chat-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 创建模态框
  const modal = document.createElement('div');
  modal.className = 'chat-modal';
  modal.innerHTML = `
    <div class="chat-modal-content">
      <div class="chat-header">
        <h3>💬 Live Chat</h3>
        <button class="chat-close">&times;</button>
      </div>
      <div class="chat-body">
        <div class="chat-message bot">
          <p>Hello! How can I help you today?</p>
        </div>
        <div class="chat-input-area">
          <input type="text" placeholder="Type your message..." class="chat-input">
          <button class="chat-send">Send</button>
        </div>
      </div>
    </div>
  `;

  // 添加样式
  modal.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    z-index: 10000;
    overflow: hidden;
    animation: slideUp 0.3s ease;
  `;

  document.body.appendChild(modal);

  // 关闭按钮
  const closeBtn = modal.querySelector('.chat-close');
  closeBtn.addEventListener('click', () => {
    modal.style.animation = 'slideDown 0.3s ease';
    setTimeout(() => modal.remove(), 300);
  });

  // 发送消息
  const sendBtn = modal.querySelector('.chat-send');
  const chatInput = modal.querySelector('.chat-input');
  const chatBody = modal.querySelector('.chat-body');

  const sendMessage = () => {
    const message = chatInput.value.trim();
    if (message) {
      // 添加用户消息
      const userMessage = document.createElement('div');
      userMessage.className = 'chat-message user';
      userMessage.innerHTML = `<p>${escapeHtml(message)}</p>`;
      chatBody.insertBefore(userMessage, chatBody.querySelector('.chat-input-area'));

      // 清空输入
      chatInput.value = '';

      // 模拟回复
      setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot';
        botMessage.innerHTML = `<p>Thanks for your message! Our team will respond shortly. In the meantime, you can check our <a href="services.html#faq">FAQ</a> for quick answers.</p>`;
        chatBody.insertBefore(botMessage, chatBody.querySelector('.chat-input-area'));

        // 滚动到底部
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);
    }
  };

  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
}

// HTML转义
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 表单验证
function initFormValidation() {
  // 实时验证邮箱
  const emailInput = document.getElementById('email');
  if (emailInput) {
    emailInput.addEventListener('blur', function() {
      if (this.value && !isValidEmail(this.value)) {
        this.style.borderColor = '#f44336';
        this.style.boxShadow = '0 0 0 3px rgba(244, 67, 54, 0.1)';
      } else {
        this.style.borderColor = '';
        this.style.boxShadow = '';
      }
    });
  }

  // 字符计数
  const messageInput = document.getElementById('message');
  if (messageInput) {
    const counter = document.createElement('div');
    counter.className = 'char-counter';
    counter.style.cssText = `
      text-align: right;
      font-size: 0.875rem;
      color: var(--text-light);
      margin-top: 4px;
    `;
    messageInput.parentNode.appendChild(counter);

    const updateCounter = () => {
      const length = messageInput.value.length;
      counter.textContent = `${length} characters`;

      if (length < 10) {
        counter.style.color = '#f44336';
      } else {
        counter.style.color = 'var(--text-light)';
      }
    };

    messageInput.addEventListener('input', updateCounter);
    updateCounter();
  }
}

// 确认模态框
function showConfirmationModal(name) {
  const modal = document.createElement('div');
  modal.className = 'confirmation-modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <div class="modal-icon">✅</div>
      <h2>Thank You, ${escapeHtml(name)}!</h2>
      <p>Your message has been sent successfully. Our team will review it and get back to you within 24 hours.</p>
      <p>A confirmation email has been sent to your email address.</p>
      <button class="btn btn-primary modal-close">Close</button>
    </div>
  `;

  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  document.body.appendChild(modal);

  // 关闭按钮
  const closeBtn = modal.querySelector('.modal-close');
  const overlay = modal.querySelector('.modal-overlay');

  const closeModal = () => {
    modal.style.opacity = '0';
    setTimeout(() => modal.remove(), 300);
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
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

  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  .chat-modal-content {
    display: flex;
    flex-direction: column;
    height: 400px;
  }

  .chat-header {
    background: #4A90D9;
    color: white;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chat-header h3 {
    margin: 0;
    font-size: 1rem;
  }

  .chat-close {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chat-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 16px;
    overflow-y: auto;
  }

  .chat-message {
    margin-bottom: 12px;
    max-width: 80%;
  }

  .chat-message.user {
    align-self: flex-end;
    background: #4A90D9;
    color: white;
    border-radius: 12px 12px 0 12px;
    padding: 8px 12px;
  }

  .chat-message.bot {
    align-self: flex-start;
    background: #f1f1f1;
    color: #333;
    border-radius: 12px 12px 12px 0;
    padding: 8px 12px;
  }

  .chat-message p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .chat-input-area {
    display: flex;
    gap: 8px;
    margin-top: auto;
    padding-top: 12px;
    border-top: 1px solid #eee;
  }

  .chat-input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 20px;
    font-size: 0.95rem;
  }

  .chat-input:focus {
    outline: none;
    border-color: #4A90D9;
  }

  .chat-send {
    background: #4A90D9;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.95rem;
  }

  .chat-send:hover {
    background: #3A7BC8;
  }

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
  }

  .modal-content {
    background: white;
    padding: 40px;
    border-radius: 12px;
    text-align: center;
    max-width: 400px;
    position: relative;
    animation: slideUp 0.3s ease;
  }

  .modal-icon {
    font-size: 4rem;
    margin-bottom: 16px;
  }

  .modal-content h2 {
    margin: 0 0 16px;
    color: #333;
  }

  .modal-content p {
    color: #666;
    margin-bottom: 12px;
    line-height: 1.6;
  }

  .modal-close {
    margin-top: 20px;
  }
`;
document.head.appendChild(style);

// 地图占位符点击事件
const mapPlaceholder = document.querySelector('.map-placeholder');
if (mapPlaceholder) {
  mapPlaceholder.addEventListener('click', () => {
    // 这里可以添加打开Google Maps的逻辑
    window.open('https://maps.google.com/?q=Shenzhen+China', '_blank');
  });
  mapPlaceholder.style.cursor = 'pointer';
}

// 社交媒体链接点击事件
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const platform = this.getAttribute('aria-label');
    showNotification(`Opening ${platform}...`, 'info');

    // 这里可以添加实际的社交媒体链接
    // window.open('https://...', '_blank');
  });
});
