// 用法：先 <script src="blocks/stagger-grid.js"></script>，再调用 window.INITS['stagger-grid'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['stagger-grid'] = (root => {
  const box = root.querySelector('.d-sg');
  const grid = root.querySelector('.d-sg-grid');
  if (!box || !grid || grid.dataset.sg) return;
  grid.dataset.sg = '1';
  const run = () => { grid.classList.remove('is-run'); void grid.offsetWidth; grid.classList.add('is-run'); };
  box.addEventListener('pointerdown', () => { run(); });
  box.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); run(); }
  });
  run();
});
