// 用法：先 <script src="blocks/scrolly.js"></script>，再调用 window.INITS['scrolly'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['scrolly'] = (root => {
    const panes = root.querySelector('.d-scrolly-panes'), steps = [...root.querySelectorAll('[data-s]')];
    panes.addEventListener('scroll', () => { const idx = Math.round(panes.scrollTop / 110); steps.forEach((s, i) => s.classList.toggle('d-scrolly-on', i === idx)); });
  });
