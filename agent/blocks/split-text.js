// 用法：先 <script src="blocks/split-text.js"></script>，再调用 window.INITS['split-text'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['split-text'] = (root => {
    const el = root.querySelector('.d-splittext');
    if (!el.dataset.done) { el.dataset.done = '1'; el.innerHTML = [...el.textContent].map((c, i) => `<span style="animation-delay:${i * 28}ms">${c === ' ' ? '&nbsp;' : c}</span>`).join(''); }
  });
