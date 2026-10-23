// 用法：先 <script src="blocks/particle-depth.js"></script>，再调用 window.INITS['particle-depth'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['particle-depth'] = (root => {
  const cv = root.querySelector('.d-pd-canvas');
  if (!cv || !cv.getContext) return;
  const ctx = cv.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w = 0, h = 0, dpr = 1, ps = [], raf = 0, live = false;
  const seed = (n) => {
    const ink = getComputedStyle(cv).getPropertyValue('--ink').trim() || '#20241e';
    const out = [];
    for (let i = 0; i < n; i++) out.push({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2, z: Math.random() * 1.8 + 0.1, ink });
    return out;
  };
  const draw = () => {
    if (!w) return;
    ctx.clearRect(0, 0, w, h);
    for (const p of ps) {
      const s = 1 / p.z;
      const x = w / 2 + (p.x * w) * s * 0.5;
      const y = h / 2 + (p.y * h) * s * 0.5;
      const r = Math.max(0.6, 2.4 * s);
      ctx.globalAlpha = Math.max(0.12, Math.min(0.85, 0.75 / p.z));
      ctx.fillStyle = p.ink;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  };
  const resize = () => {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = cv.clientWidth; h = cv.clientHeight;
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!ps.length) ps = seed(46);
    draw();
  };
  const tick = () => {
    for (const p of ps) {
      p.z -= 0.006 + (1.9 - p.z) * 0.0045;
      if (p.z < 0.12) { p.z = 1.9; p.x = (Math.random() - 0.5) * 2; p.y = (Math.random() - 0.5) * 2; }
    }
    draw();
    raf = requestAnimationFrame(tick);
  };
  const start = () => { if (!live && !reduce) { live = true; raf = requestAnimationFrame(tick); } };
  const stop = () => { live = false; cancelAnimationFrame(raf); };
  new ResizeObserver(resize).observe(cv);
  resize();
  if (!reduce) {
    if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(x => (x.isIntersecting ? start() : stop())), { rootMargin: '120px' }).observe(cv);
    else start();
  }
});
