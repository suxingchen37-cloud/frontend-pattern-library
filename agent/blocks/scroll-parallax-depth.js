// 用法：先 <script src="blocks/scroll-parallax-depth.js"></script>，再调用 window.INITS['scroll-parallax-depth'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['scroll-parallax-depth'] = (root => {
  const box = root.querySelector('.d-pp-scroll');
  if (!box) return;
  const map = [['.d-pp-back', 0.18], ['.d-pp-mid', 0.42], ['.d-pp-front', 0.8]]
    .map(p => [box.querySelector(p[0]), p[1]])
    .filter(p => p[0]);
  const apply = () => {
    const y = box.scrollTop;
    map.forEach(p => { p[0].style.transform = 'translate3d(0,' + (-y * p[1]).toFixed(1) + 'px,0)'; });
  };
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) box.addEventListener('scroll', apply, { passive: true });
  apply();
});
