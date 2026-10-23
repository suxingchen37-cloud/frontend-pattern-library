// 用法：先 <script src="blocks/scroll-tilt-reveal.js"></script>，再调用 window.INITS['scroll-tilt-reveal'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['scroll-tilt-reveal'] = (root => {
  const box = root.querySelector('.d-tt-scroll');
  if (!box) return;
  const cards = [...box.querySelectorAll('.d-tt-card')];
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { cards.forEach(c => { c.style.transform = 'none'; c.style.opacity = '1'; }); return; }
  let queued = false;
  const apply = () => {
    queued = false;
    const r0 = box.getBoundingClientRect();
    cards.forEach(card => {
      const r = card.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (r0.bottom - r.top) / (r0.height * 0.62)));
      card.style.transform = 'rotateX(' + (68 * (1 - p)).toFixed(1) + 'deg) translateY(' + (18 * (1 - p)).toFixed(1) + 'px)';
      card.style.opacity = String(0.35 + 0.65 * p);
    });
  };
  const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(apply); } };
  box.addEventListener('scroll', onScroll, { passive: true });
  apply();
});
