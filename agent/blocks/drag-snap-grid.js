// 用法：先 <script src="blocks/drag-snap-grid.js"></script>，再调用 window.INITS['drag-snap-grid'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drag-snap-grid'] = (root => {
  const box = root.querySelector('.d-snap');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const grid = box.querySelector('.d-snap-grid');
  const tile = box.querySelector('.d-snap-tile');
  const cells = [].slice.call(grid.querySelectorAll('.d-snap-cell'));
  const guide = box.querySelector('.d-snap-guide');
  const lines = guide.querySelectorAll('i');
  const hint = box.querySelector('.d-snap-hint');
  const COLS = 3, ROWS = 2, STEP = 56, SIZE = 48;
  const TW = tile.offsetWidth, TH = tile.offsetHeight;
  const GX = grid.offsetLeft, GY = grid.offsetTop;
  const pos = { x: 216, y: 38 };
  const IDLE = '离格心 26px 内松手就进去';

  function center(c, r) {
    return { x: GX + c * STEP + SIZE / 2, y: GY + r * STEP + SIZE / 2 };
  }
  function draw() {
    tile.style.transform = 'translate(' + pos.x + 'px,' + pos.y + 'px)';
  }
  function moveTo(x, y, animate) {
    tile.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
    pos.x = x; pos.y = y; draw();
  }
  function nearest(x, y) {
    let best = null, bd = 1e9;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const k = center(c, r);
        const d = Math.hypot(k.x - x, k.y - y);
        if (d < bd) { bd = d; best = { c: c, r: r, x: k.x, y: k.y, d: d }; }
      }
    }
    return best;
  }
  function mark(hit) {
    cells.forEach((el, i) => {
      if (hit && i === hit.r * COLS + hit.c) el.dataset.hot = '1'; else delete el.dataset.hot;
    });
    if (!hit) { delete guide.dataset.on; return; }
    lines[0].style.left = (hit.c * STEP + SIZE / 2) + 'px';
    lines[1].style.top = (hit.r * STEP + SIZE / 2) + 'px';
    guide.dataset.on = '1';
  }
  function hot(x, y) {
    const hit = nearest(x, y);
    return hit && hit.d < 26 ? hit : null;
  }

  let drag = null;
  function down(e) {
    if (drag) return;
    e.preventDefault();
    tile.focus({ preventScroll: true });
    tile.setPointerCapture(e.pointerId);
    tile.dataset.drag = '1';
    drag = { x0: e.clientX - pos.x, y0: e.clientY - pos.y };
  }
  function move(e) {
    if (!drag) return;
    pos.x = Math.max(0, Math.min(300 - TW, e.clientX - drag.x0));
    pos.y = Math.max(0, Math.min(150 - TH, e.clientY - drag.y0));
    moveTo(pos.x, pos.y, false);
    const hit = hot(pos.x + TW / 2, pos.y + TH / 2);
    mark(hit);
    hint.textContent = hit ? '吸附中 · 松手进格子' : IDLE;
  }
  function up() {
    if (!drag) return;
    drag = null;
    delete tile.dataset.drag;
    const hit = hot(pos.x + TW / 2, pos.y + TH / 2);
    if (hit) moveTo(hit.x - TW / 2, hit.y - TH / 2, true);
    else moveTo(pos.x, pos.y, true);
    hint.textContent = hit ? '已吸附 · 对齐提示线随落点走' : IDLE;
    clearTimeout(box._hintT);
    box._hintT = setTimeout(() => { mark(null); hint.textContent = IDLE; }, 900);
  }
  function key(e) {
    const mv = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
    if (!mv) return;
    e.preventDefault();
    const from = nearest(pos.x + TW / 2, pos.y + TH / 2);
    const c = Math.max(0, Math.min(COLS - 1, from.c + mv[0]));
    const r = Math.max(0, Math.min(ROWS - 1, from.r + mv[1]));
    const k = center(c, r);
    moveTo(k.x - TW / 2, k.y - TH / 2, true);
    mark({ c: c, r: r });
    clearTimeout(box._hintT);
    box._hintT = setTimeout(() => mark(null), 900);
  }

  tile.addEventListener('pointerdown', down);
  tile.addEventListener('pointermove', move);
  tile.addEventListener('pointerup', up);
  tile.addEventListener('pointercancel', up);
  tile.addEventListener('keydown', key);
  draw();
});
