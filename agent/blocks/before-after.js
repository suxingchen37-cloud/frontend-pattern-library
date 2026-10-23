// 用法：先 <script src="blocks/before-after.js"></script>，再调用 window.INITS['before-after'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['before-after'] = (root => {
    const input = root.querySelector('[data-ba3]'), before = root.querySelector('[data-before3]');
    const set = () => { before.style.width = input.value + '%'; };
    input.addEventListener('input', set); set();
  });
