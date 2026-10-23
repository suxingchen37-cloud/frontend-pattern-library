// 用法：先 <script src="blocks/cursor-state-machine.js"></script>，再调用 window.INITS['cursor-state-machine'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['cursor-state-machine'] = (root => {
  const box = root.querySelector('.d-cursor-states');
  if (!box || box.dataset.dcs) return;
  box.dataset.dcs = '1';
  const cur = box.querySelector('.d-cs-cursor');
  const blk = box.querySelector('.d-cs-block');
  const tip = box.querySelector('.d-cs-tip');
  const label = { idle: '待机', hover: '可抓取', drag: '拖动中', wait: '等待结果' };
  let x = 150, y = 66, drag = false, gx = 0, gy = 0, sx = 0, sy = 0, tx = 0, ty = 0;
  const set = s => { box.dataset.s = s; tip.textContent = label[s]; };
  const hit = () => {
    const a = blk.getBoundingClientRect(), r = box.getBoundingClientRect();
    return x >= a.left - r.left && x <= a.right - r.left && y >= a.top - r.top && y <= a.bottom - r.top;
  };
  const place = (nx, ny) => {
    const r = box.getBoundingClientRect();
    x = Math.max(0, Math.min(r.width, nx));
    y = Math.max(0, Math.min(r.height, ny));
    cur.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    if (!drag) set(hit() ? 'hover' : box.dataset.s === 'wait' ? 'wait' : 'idle');
  };
  const moveBlk = () => {
    const w = box.clientWidth, h = box.clientHeight, bw = blk.offsetWidth, bh = blk.offsetHeight;
    tx = Math.max(-blk.offsetLeft, Math.min(w - blk.offsetLeft - bw, sx + (x - gx)));
    ty = Math.max(-blk.offsetTop, Math.min(h - blk.offsetTop - bh, sy + (y - gy)));
    blk.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
  };
  const beginDrag = () => { drag = true; gx = x; gy = y; sx = tx; sy = ty; set('drag'); };
  const endDrag = () => {
    drag = false;
    set('wait');
    clearTimeout(box._dcsT);
    box._dcsT = setTimeout(() => set(hit() ? 'hover' : 'idle'), 900);
  };
  box.addEventListener('focus', () => { box.classList.add('is-live'); place(x, y); });
  box.addEventListener('blur', () => { box.classList.remove('is-live'); });
  box.addEventListener('pointerenter', e => {
    const r = box.getBoundingClientRect();
    box.classList.add('is-live');
    place(e.clientX - r.left, e.clientY - r.top);
  });
  box.addEventListener('pointermove', e => {
    const r = box.getBoundingClientRect();
    place(e.clientX - r.left, e.clientY - r.top);
    if (drag) moveBlk();
  });
  box.addEventListener('pointerdown', e => {
    const r = box.getBoundingClientRect();
    place(e.clientX - r.left, e.clientY - r.top);
    if (hit()) { beginDrag(); box.setPointerCapture(e.pointerId); e.preventDefault(); }
  });
  box.addEventListener('pointerup', () => { if (drag) endDrag(); });
  box.addEventListener('pointerleave', () => { if (!drag) box.classList.remove('is-live'); });
  box.addEventListener('keydown', e => {
    const k = e.key, step = 12;
    if (k === 'ArrowLeft') { e.preventDefault(); place(x - step, y); if (drag) moveBlk(); }
    else if (k === 'ArrowRight') { e.preventDefault(); place(x + step, y); if (drag) moveBlk(); }
    else if (k === 'ArrowUp') { e.preventDefault(); place(x, y - step); if (drag) moveBlk(); }
    else if (k === 'ArrowDown') { e.preventDefault(); place(x, y + step); if (drag) moveBlk(); }
    else if (k === ' ') {
      e.preventDefault();
      if (drag) endDrag();
      else if (hit()) beginDrag();
    }
  });
});
