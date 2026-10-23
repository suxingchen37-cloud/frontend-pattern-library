// 用法：先 <script src="blocks/pointer-light.js"></script>，再调用 window.INITS['pointer-light'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['pointer-light'] = (root => {
  const stage = root.querySelector('.d-lt-stage');
  const card = stage && stage.querySelector('.d-lt-card');
  if (!stage || !card) return;
  stage.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    const y = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    card.style.setProperty('--lx', (x * 100).toFixed(1) + '%');
    card.style.setProperty('--ly', (y * 100).toFixed(1) + '%');
    stage.classList.add('d-lt-on');
  });
  stage.addEventListener('pointerleave', () => stage.classList.remove('d-lt-on'));
});
