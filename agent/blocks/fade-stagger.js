// 用法：先 <script src="blocks/fade-stagger.js"></script>，再调用 window.INITS['fade-stagger'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['fade-stagger'] = (root => root.querySelector('[data-replay]')?.addEventListener('click', () => {
    root.querySelectorAll('.d-chip').forEach(c => { c.style.animation = 'none'; void c.offsetWidth; c.style.animation = ''; });
  }));
