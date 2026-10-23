// 用法：先 <script src="blocks/drag-ghost-follow.js"></script>，再调用 window.INITS['drag-ghost-follow'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drag-ghost-follow'] = (root => {
  const box = root.querySelector('.d-ghost');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const card = box.querySelector('.d-ghost-card');
  const copy = box.querySelector('.d-ghost-copy');
  const hint = box.querySelector('.d-ghost-hint');
  const IDLE = '残影每帧按 0.3 追指针';
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, drag = null;

  function loop() {
    cx += (tx - cx) * .3;
    cy += (ty - cy) * .3;
    copy.style.transform = 'translate(' + cx.toFixed(2) + 'px,' + cy.toFixed(2) + 'px)';
    raf = requestAnimationFrame(loop);
  }

  function down(e) {
    if (drag) return;
    e.preventDefault();
    card.focus({ preventScroll: true });
    card.setPointerCapture(e.pointerId);
    drag = { x: e.clientX, y: e.clientY };
    tx = ty = cx = cy = 0;
    box.dataset.drag = '1';
    copy.style.transition = 'none';
    copy.style.opacity = '1';
    if (!raf) raf = requestAnimationFrame(loop);
  }
  function move(e) {
    if (!drag) return;
    tx = e.clientX - drag.x;
    ty = e.clientY - drag.y;
    hint.textContent = '滞后 ' + Math.round(Math.hypot(tx - cx, ty - cy)) + 'px';
  }
  function up() {
    if (!drag) return;
    drag = null;
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    delete box.dataset.drag;
    copy.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1),opacity .18s linear';
    copy.style.transform = 'translate(0px,0px)';
    copy.style.opacity = '0';
    tx = ty = cx = cy = 0;
    hint.textContent = IDLE;
  }
  function key(e) {
    const mv = { ArrowLeft: [-12, 0], ArrowRight: [12, 0], ArrowUp: [0, -12], ArrowDown: [0, 12] }[e.key];
    if (!mv) return;
    e.preventDefault();
    const nx = Math.max(-40, Math.min(64, Number(card.dataset.x || 0) + mv[0]));
    const ny = Math.max(-20, Math.min(24, Number(card.dataset.y || 0) + mv[1]));
    card.dataset.x = String(nx);
    card.dataset.y = String(ny);
    card.style.transition = 'transform .18s cubic-bezier(.34,1.56,.64,1)';
    card.style.transform = 'translate(' + nx + 'px,' + ny + 'px)';
    hint.textContent = '方向键把卡推开 ' + Math.abs(nx + ny) + 'px';
  }

  card.addEventListener('pointerdown', down);
  card.addEventListener('pointermove', move);
  card.addEventListener('pointerup', up);
  card.addEventListener('pointercancel', up);
  card.addEventListener('keydown', key);
});
