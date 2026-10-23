// 用法：先 <script src="blocks/cursor-grid-light.js"></script>，再调用 window.INITS['cursor-grid-light'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['cursor-grid-light'] = (root => {
  const box = root.querySelector('.d-grid-light');
  if (!box || box.dataset.dgl) return;
  box.dataset.dgl = '1';
  const grid = box.querySelector('.d-gl-grid');
  const cols = 12, rows = 5, step = 23;
  if (!grid.children.length) {
    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement('span');
      cell.className = 'd-gl-cell';
      grid.appendChild(cell);
    }
  }
  const cells = [...grid.children];
  let at = -1, kx = 5, ky = 2;
  const clear = () => { cells.forEach(c => { c.className = 'd-gl-cell'; }); at = -1; };
  const paint = (col, row) => {
    if (col < 0 || row < 0 || col >= cols || row >= rows) { clear(); return; }
    const idx = row * cols + col;
    if (idx === at) return;
    at = idx;
    cells.forEach((c, i) => {
      const d = Math.hypot(i % cols - col, Math.floor(i / cols) - row);
      c.className = 'd-gl-cell' + (d <= 1 ? ' is-l1' : d <= 2.2 ? ' is-l2' : d <= 3.2 ? ' is-l3' : '');
    });
  };
  const atPointer = e => {
    const r = grid.getBoundingClientRect();
    kx = Math.floor((e.clientX - r.left) / step);
    ky = Math.floor((e.clientY - r.top) / step);
    paint(kx, ky);
  };
  grid.addEventListener('pointermove', atPointer);
  grid.addEventListener('pointerdown', atPointer);
  grid.addEventListener('pointerleave', clear);
  box.addEventListener('focus', () => paint(kx, ky));
  box.addEventListener('blur', clear);
  box.addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'ArrowLeft' || k === 'ArrowRight' || k === 'ArrowUp' || k === 'ArrowDown') {
      e.preventDefault();
      kx = Math.max(0, Math.min(cols - 1, kx + (k === 'ArrowRight' ? 1 : k === 'ArrowLeft' ? -1 : 0)));
      ky = Math.max(0, Math.min(rows - 1, ky + (k === 'ArrowDown' ? 1 : k === 'ArrowUp' ? -1 : 0)));
      paint(kx, ky);
    } else if (k === 'Escape') { clear(); }
  });
});
