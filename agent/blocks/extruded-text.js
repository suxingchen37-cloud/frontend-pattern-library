// 用法：先 <script src="blocks/extruded-text.js"></script>，再调用 window.INITS['extruded-text'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['extruded-text'] = (root => {
  const stage = root.querySelector('.d-xt-stage');
  const word = stage && stage.querySelector('.d-xt-word');
  if (!stage || !word) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const move = e => {
    const r = stage.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    word.style.transform = 'rotateY(' + (x * 8).toFixed(1) + 'deg) rotateX(' + (-y * 6).toFixed(1) + 'deg)';
  };
  stage.addEventListener('pointermove', move);
  stage.addEventListener('pointerleave', () => { word.style.transform = 'none'; });
});
