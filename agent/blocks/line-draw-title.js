// 用法：先 <script src="blocks/line-draw-title.js"></script>，再调用 window.INITS['line-draw-title'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['line-draw-title'] = (root => {
  const box = root.querySelector('.d-ldt');
  if (!box || box.dataset.ldt) return;
  box.dataset.ldt = '1';
  const run = () => { box.classList.remove('is-run'); void box.offsetWidth; box.classList.add('is-run'); };
  box.addEventListener('pointerdown', () => { run(); });
  box.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); run(); }
  });
  run();
});
