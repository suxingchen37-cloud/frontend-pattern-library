// 用法：先 <script src="blocks/error-retry.js"></script>，再调用 window.INITS['error-retry'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['error-retry'] = (root => {
    const btn = root.querySelector('[data-retry]');
    btn.onclick = () => { btn.textContent = '重试中…'; setTimeout(() => btn.textContent = '还是不通 · 重试', 900); };
  });
