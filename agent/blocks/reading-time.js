// 用法：先 <script src="blocks/reading-time.js"></script>，再调用 window.INITS['reading-time'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['reading-time'] = (root => {
    const ta = root.querySelector('[data-rt]'), n = root.querySelector('[data-rn]'), m = root.querySelector('[data-rm]');
    const run = () => { const len = ta.value.replace(/\s/g, '').length; n.textContent = len; m.textContent = len ? Math.max(1, Math.round(len / 350)) : 0; };
    ta.addEventListener('input', run); run();
  });
