// 用法：先 <script src="blocks/tag-sphere.js"></script>，再调用 window.INITS['tag-sphere'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['tag-sphere'] = (root => {
  const stage = root.querySelector('.d-ts-stage');
  if (!stage) return;
  const tags = [...stage.querySelectorAll('.d-ts-tag')];
  if (!tags.length) return;
  const R = 96, FOV = 260;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pts = tags.map((el, i) => {
    const y = 1 - (i / (tags.length - 1)) * 2;
    const rad = Math.sqrt(Math.max(0, 1 - y * y));
    const th = i * 2.399963229728653;
    return { el, x: Math.cos(th) * rad, y, z: Math.sin(th) * rad };
  });
  let ry = 0.4, rx = -0.18, vy = reduce ? 0 : 0.0035, vx = 0, raf = 0, live = false, drag = null;
  const draw = () => {
    const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
    for (const p of pts) {
      const x1 = p.x * cy - p.z * sy;
      const z1 = p.x * sy + p.z * cy;
      const y1 = p.y * cx - z1 * sx;
      const z2 = p.y * sx + z1 * cx;
      const s = FOV / (FOV + z2 * R);
      p.el.style.transform = 'translate3d(' + (x1 * R * s).toFixed(1) + 'px,' + (y1 * R * s).toFixed(1) + 'px,0) translate(-50%,-50%) scale(' + s.toFixed(3) + ')';
      p.el.style.opacity = (0.35 + 0.65 * ((s - 0.62) / 0.55)).toFixed(3);
      p.el.style.zIndex = String(Math.round((z2 + 1) * 100));
    }
  };
  const tick = () => {
    if (!live) return;
    ry += vy; rx += vx;
    rx = Math.max(-1.1, Math.min(1.1, rx));
    vy *= 0.96; vx *= 0.9;
    if (Math.abs(vy) < 0.0004) vy = reduce ? 0 : 0.0035;
    draw();
    raf = requestAnimationFrame(tick);
  };
  const start = () => { if (!live) { live = true; raf = requestAnimationFrame(tick); } };
  const stop = () => { live = false; cancelAnimationFrame(raf); };
  stage.addEventListener('pointerdown', e => {
    drag = { x: e.clientX, y: e.clientY };
    stage.classList.add('d-ts-drag');
    stage.setPointerCapture(e.pointerId);
    vy = 0; vx = 0;
  });
  stage.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    drag = { x: e.clientX, y: e.clientY };
    ry += dx * 0.006; rx = Math.max(-1.1, Math.min(1.1, rx + dy * 0.004));
    vx = dy * 0.0006; vy = 0;
    draw();
  });
  const release = () => { drag = null; stage.classList.remove('d-ts-drag'); };
  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(es => es.forEach(x => (x.isIntersecting ? start() : stop())), { rootMargin: '120px' }).observe(stage);
  } else start();
  draw();
});
