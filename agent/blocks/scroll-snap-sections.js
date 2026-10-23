// 用法：先 <script src="blocks/scroll-snap-sections.js"></script>，再调用 window.INITS['scroll-snap-sections'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['scroll-snap-sections'] = (root => {
  const box = root.querySelector('.d-ss-scroll');
  const rail = root.querySelector('.d-ss-rail');
  if (!box || !rail || box.dataset.ss) return;
  box.dataset.ss = '1';
  const sync = () => {
    const h = box.clientHeight || 1;
    const i = Math.max(0, Math.min(2, Math.round(box.scrollTop / h)));
    rail.style.setProperty('--i', String(i));
  };
  box.addEventListener('scroll', sync, { passive: true });
  box.addEventListener('keydown', e => {
    const h = box.clientHeight || 0;
    if (e.key === 'PageDown') { e.preventDefault(); box.scrollTo({ top: Math.min(box.scrollHeight, box.scrollTop + h) }); }
    else if (e.key === 'PageUp') { e.preventDefault(); box.scrollTo({ top: Math.max(0, box.scrollTop - h) }); }
  });
  sync();
});
