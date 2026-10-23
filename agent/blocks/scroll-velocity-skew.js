// 用法：先 <script src="blocks/scroll-velocity-skew.js"></script>，再调用 window.INITS['scroll-velocity-skew'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['scroll-velocity-skew'] = (root => {
  const box = root.querySelector('.d-vel');
  if (!box) return;
  const body = box.querySelector('.d-vel-body');
  if (!body) return;
  if (root.__dVelStop) root.__dVelStop();
  let raf = 0, prevY = box.scrollTop, prevT = 0, cur = 0;
  const paint = () => {
    body.style.transform = Math.abs(cur) < .05 ? '' : 'skewY(' + cur.toFixed(2) + 'deg)';
  };
  const frame = now => {
    const y = box.scrollTop;
    const dt = prevT ? Math.max(8, now - prevT) : 16;
    const perFrame = (y - prevY) * (16 / dt);
    prevY = y;
    prevT = now;
    const want = Math.max(-6, Math.min(6, perFrame * .28));
    cur = cur + (want - cur) * .45;
    if (Math.abs(want) < .05 && Math.abs(cur) < .05) {
      cur = 0; paint(); prevT = 0; raf = 0;
      return;
    }
    paint();
    raf = requestAnimationFrame(frame);
  };
  const onScroll = () => {
    if (raf) return;
    prevY = box.scrollTop;
    raf = requestAnimationFrame(frame);
  };
  box.addEventListener('scroll', onScroll, { passive: true });
  root.__dVelStop = () => {
    box.removeEventListener('scroll', onScroll);
    if (raf) cancelAnimationFrame(raf);
    raf = 0; prevT = 0; cur = 0;
    body.style.transform = '';
  };
});
