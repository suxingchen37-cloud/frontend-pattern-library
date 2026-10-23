// 用法：先 <script src="blocks/lazy-media.js"></script>，再调用 window.INITS['lazy-media'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['lazy-media'] = (root => {
    const box = root.querySelector('[data-lz]');
    const rows = [...root.querySelectorAll('[data-lzrow]')];
    const load = (row) => {
      setTimeout(() => {
        if (!row.isConnected) return;
        row.classList.add('loaded');
        row.querySelector('span').textContent = '已加载';
      }, 350);
    };
    if (!('IntersectionObserver' in window)) { rows.forEach(load); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting || e.target.dataset.done) return;
      e.target.dataset.done = '1'; load(e.target); io.unobserve(e.target);
    }), { root: box, rootMargin: '20px' });
    rows.forEach((r) => io.observe(r));
  });
