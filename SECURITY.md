# 安全政策

## 支持的版本

| 版本 | 支持状态 |
| ---- | -------- |
| 1.0.x | ✅ 支持 |
| < 1.0 | ❌ 不支持 |

## 报告漏洞

如果你发现安全漏洞，请**不要**在公开的 Issue 中报告。

相反，请通过以下方式联系我们：

1. **Email**: security@cozylight.com
2. **GitHub**: 使用私有漏洞报告功能

### 报告内容

请包含以下信息：

- 漏洞类型
- 完整的重现步骤
- 受影响的版本
- 潜在影响
- 修复建议（如果有）

### 响应时间

- **确认收到**: 48 小时内
- **初步评估**: 1 周内
- **修复发布**: 根据严重程度，1-4 周

## 安全最佳实践

### 对于用户

1. 保持浏览器更新
2. 使用 HTTPS 访问网站
3. 不要在不安全的网络中输入敏感信息

### 对于开发者

1. 定期更新依赖
2. 使用 HTTPS
3. 实施内容安全策略（CSP）
4. 验证用户输入
5. 使用安全的 HTTP 头

## 安全相关配置

### Content Security Policy

建议添加以下 CSP 头：

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';
```

### HTTP 安全头

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## 已知安全问题

目前没有已知的安全问题。

## 安全更新

安全更新将通过以下方式发布：

1. GitHub Security Advisories
2. 版本更新
3. CHANGELOG.md

## 致谢

感谢所有报告安全问题的研究人员！

---

**安全是我们的首要任务。** 🔒
