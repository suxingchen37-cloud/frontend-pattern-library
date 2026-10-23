// 用法：先 <script src="blocks/currency-input.js"></script>，再调用 window.INITS['currency-input'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['currency-input'] = (root => {
    const input = root.querySelector('[data-cu3]');
    input.addEventListener('input', () => {
      const digits = input.value.replace(/[^\d]/g, '').slice(0, 9);
      input.value = digits ? Number(digits).toLocaleString('en-US') : '';
    });
  });
