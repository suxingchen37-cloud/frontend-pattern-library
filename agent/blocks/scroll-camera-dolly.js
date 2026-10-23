// 用法：先 <script src="blocks/scroll-camera-dolly.js"></script>，再调用 window.INITS['scroll-camera-dolly'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['scroll-camera-dolly'] = (root => {
  const box = root.querySelector('.d-cd-scroll');
  if (!box) return;
  const scene = box.querySelector('.d-cd-scene');
  const hint = box.querySelector('.d-cd-hint');
  if (!scene || !hint) return;
  const apply = () => {
    const max = box.scrollHeight - box.clientHeight || 1;
    const p = Math.min(1, box.scrollTop / max);
    scene.style.transform = 'translateZ(' + (p * 150).toFixed(1) + 'px)';
    hint.style.opacity = String(1 - p);
  };
  box.addEventListener('scroll', apply, { passive: true });
  apply();
});
