// 用法：先 <script src="blocks/drag-threshold-hint.js"></script>，再调用 window.INITS['drag-threshold-hint'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drag-threshold-hint'] = (root => {
  const box = root.querySelector('.d-bound');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const frame = box.querySelector('.d-bound-box');
  const knob = box.querySelector('.d-bound-knob');
  const hint = box.querySelector('.d-bound-hint');
  const NAME = { l: '左', r: '右', t: '上', b: '下' };
  const PAD = 8;
  const W = knob.offsetWidth, H = knob.offsetHeight;
  const MAX_X = frame.clientWidth - PAD * 2 - W;
  const MAX_Y = frame.clientHeight - PAD * 2 - H;
  const IDLE = '越界位移按 0.18 折算';
  let x = MAX_X / 2, y = MAX_Y / 2, drag = null;

  function draw(animate) {
    knob.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
    knob.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
  }
  function down(e) {
    if (drag) return;
    e.preventDefault();
    knob.focus({ preventScroll: true });
    knob.setPointerCapture(e.pointerId);
    knob.dataset.drag = '1';
    drag = { x0: e.clientX - x, y0: e.clientY - y };
  }
  function move(e) {
    if (!drag) return;
    let nx = e.clientX - drag.x0, ny = e.clientY - drag.y0;
    const push = { l: 0, r: 0, t: 0, b: 0 };
    if (nx < 0) { push.l = Math.min(1, -nx / 44); nx = nx * .18; }
    else if (nx > MAX_X) { push.r = Math.min(1, (nx - MAX_X) / 44); nx = MAX_X + (nx - MAX_X) * .18; }
    if (ny < 0) { push.t = Math.min(1, -ny / 44); ny = ny * .18; }
    else if (ny > MAX_Y) { push.b = Math.min(1, (ny - MAX_Y) / 44); ny = MAX_Y + (ny - MAX_Y) * .18; }
    x = nx; y = ny;
    draw(false);
    const side = Object.keys(push).sort((a, b) => push[b] - push[a])[0];
    if (push[side] > 0) {
      frame.dataset.push = side;
      hint.textContent = '顶住「' + NAME[side] + '」边 · 位移按 0.18 折算';
    } else {
      delete frame.dataset.push;
      hint.textContent = IDLE;
    }
  }
  function up() {
    if (!drag) return;
    drag = null;
    delete knob.dataset.drag;
    x = Math.max(0, Math.min(MAX_X, x));
    y = Math.max(0, Math.min(MAX_Y, y));
    draw(true);
    delete frame.dataset.push;
    hint.textContent = IDLE;
  }
  function key(e) {
    const mv = { ArrowLeft: [-12, 0], ArrowRight: [12, 0], ArrowUp: [0, -12], ArrowDown: [0, 12] }[e.key];
    if (!mv) return;
    e.preventDefault();
    const side = mv[0] < 0 && x <= 0 ? 'l' : mv[0] > 0 && x >= MAX_X ? 'r' : mv[1] < 0 && y <= 0 ? 't' : mv[1] > 0 && y >= MAX_Y ? 'b' : '';
    x = Math.max(0, Math.min(MAX_X, x + mv[0]));
    y = Math.max(0, Math.min(MAX_Y, y + mv[1]));
    draw(true);
    if (!side) return;
    frame.dataset.push = side;
    hint.textContent = '到「' + NAME[side] + '」边 · 再推就是阻力';
    clearTimeout(box._pushT);
    box._pushT = setTimeout(() => { delete frame.dataset.push; hint.textContent = IDLE; }, 900);
  }

  knob.addEventListener('pointerdown', down);
  knob.addEventListener('pointermove', move);
  knob.addEventListener('pointerup', up);
  knob.addEventListener('pointercancel', up);
  knob.addEventListener('keydown', key);
  draw(false);
});
