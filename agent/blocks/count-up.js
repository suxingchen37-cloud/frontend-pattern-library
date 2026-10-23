// 用法：先 <script src="blocks/count-up.js"></script>，再调用 window.INITS['count-up'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['count-up'] = (root => {
    const el = root.querySelector('.d-num');
    const run = () => { const t0 = performance.now(), to = 18888;
      const step = now => { const p = Math.min(1, (now - t0) / 800); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString(); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step); };
    run(); root.querySelector('[data-count]')?.addEventListener('click', run);
  });
