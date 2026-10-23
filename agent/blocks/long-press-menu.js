// 用法：先 <script src="blocks/long-press-menu.js"></script>，再调用 window.INITS['long-press-menu'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['long-press-menu'] = (root => {
  const box = root.querySelector('.d-press');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const card = box.querySelector('.d-press-card');
  const menu = box.querySelector('.d-press-menu');
  const bar = box.querySelector('.d-press-bar');
  const hint = box.querySelector('.d-press-hint');
  const items = [].slice.call(box.querySelectorAll('.d-press-item'));
  const HOLD = 420, MOVE = 8;
  const IDLE = '按住 420ms 或 Enter 呼出';
  let timer = 0, raf = 0, t0 = 0, sx = 0, sy = 0, holding = false, cur = 0;

  function progress() {
    const p = Math.min(1, (performance.now() - t0) / HOLD);
    bar.style.width = (p * 100).toFixed(1) + '%';
    if (p < 1 && holding) raf = requestAnimationFrame(progress);
  }
  function stopHold() {
    holding = false;
    clearTimeout(timer);
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    delete card.dataset.hold;
    bar.style.width = '0%';
  }
  function open() {
    stopHold();
    menu.dataset.open = '1';
    menu.setAttribute('aria-hidden', 'false');
    card.setAttribute('aria-expanded', 'true');
    items.forEach(b => b.tabIndex = 0);
    bar.style.width = '100%';
    hint.textContent = '方向键选 · Esc 关';
    cur = 0;
    items[0].focus({ preventScroll: true });
  }
  function close(refocus) {
    if (!menu.dataset.open) return;
    delete menu.dataset.open;
    menu.setAttribute('aria-hidden', 'true');
    card.setAttribute('aria-expanded', 'false');
    items.forEach(b => b.tabIndex = -1);
    bar.style.width = '0%';
    hint.textContent = IDLE;
    if (refocus) card.focus({ preventScroll: true });
  }
  function down(e) {
    if (menu.dataset.open) { close(true); return; }
    holding = true;
    sx = e.clientX; sy = e.clientY; t0 = performance.now();
    card.dataset.hold = '1';
    hint.textContent = '正在长按…移动 8px 就取消';
    timer = setTimeout(open, HOLD);
    raf = requestAnimationFrame(progress);
  }
  function move(e) {
    if (!holding) return;
    if (Math.hypot(e.clientX - sx, e.clientY - sy) > MOVE) {
      stopHold();
      hint.textContent = '已取消 · 移动超过 8px';
      clearTimeout(box._t2);
      box._t2 = setTimeout(() => { hint.textContent = IDLE; }, 900);
    }
  }
  function cardKey(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (menu.dataset.open) close(true); else open();
    } else if (e.key === 'Escape') {
      close(true);
    }
  }
  function menuKey(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      cur = (cur + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items[cur].focus({ preventScroll: true });
    } else if (e.key === 'Escape') {
      e.preventDefault();
      close(true);
    } else if (e.key === 'Tab') {
      close(false);
    }
  }
  function outside(e) {
    if (!menu.dataset.open) return;
    if (card.contains(e.target) || menu.contains(e.target)) return;
    close(false);
  }

  card.addEventListener('pointerdown', down);
  card.addEventListener('pointermove', move);
  card.addEventListener('pointerup', () => { if (!menu.dataset.open) stopHold(); });
  card.addEventListener('pointercancel', stopHold);
  card.addEventListener('pointerleave', () => { if (holding) stopHold(); });
  card.addEventListener('keydown', cardKey);
  menu.addEventListener('keydown', menuKey);
  items.forEach((b, i) => {
    b.addEventListener('focus', () => { cur = i; });
    b.addEventListener('click', () => {
      hint.textContent = '选了「' + b.textContent + '」';
      close(true);
    });
  });
  root.addEventListener('pointerdown', outside);
});
