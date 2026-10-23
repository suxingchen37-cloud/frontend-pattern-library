// 用法：先 <script src="blocks/donut-progress.js"></script>，再调用 window.INITS['donut-progress'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['donut-progress'] = (root => {
  const fg = root.querySelector('.d-dp2-fg');
  if (!fg) return;
  const pct = 68, r = 46, C = 2 * Math.PI * r;
  const set = () => { fg.setAttribute('stroke-dasharray', (C * pct / 100).toFixed(1) + ' ' + C.toFixed(1)); };
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { set(); return; }
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { set(); io.disconnect(); } }), { threshold: .4 });
  io.observe(root.querySelector('.d-dp2-svg') || fg);
});
