// 用法：先 <script src="blocks/caption-zoom.js"></script>，再调用 window.INITS['caption-zoom'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['caption-zoom'] = (root => {
  const box = root.querySelector('.d-cz');
  if (!box || box.dataset.cz) return;
  box.dataset.cz = '1';
  const dots = Array.from(box.querySelectorAll('.d-cz-dot'));
  const caps = Array.from(box.querySelectorAll('.d-cz-cap'));
  const on = i => {
    dots.forEach((d, k) => d.classList.toggle('is-on', k === i));
    caps.forEach((c, k) => c.classList.toggle('is-hot', k === i));
  };
  const off = () => {
    dots.forEach(d => d.classList.remove('is-on'));
    caps.forEach(c => c.classList.remove('is-hot'));
  };
  dots.forEach((d, i) => {
    d.addEventListener('pointerenter', () => on(i));
    d.addEventListener('focus', () => on(i));
    d.addEventListener('blur', off);
    d.addEventListener('click', () => on(i));
  });
  box.addEventListener('pointerleave', off);
});
