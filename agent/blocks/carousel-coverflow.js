// 用法：先 <script src="blocks/carousel-coverflow.js"></script>，再调用 window.INITS['carousel-coverflow'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['carousel-coverflow'] = (root => {
  const items = Array.from(root.querySelectorAll('.d-cf-item'));
  if (!items.length) return;
  const set = i => items.forEach((el, k) => {
    el.dataset.pos = String(k - i);
    el.setAttribute('aria-current', k === i ? 'true' : 'false');
  });
  items.forEach((el, k) => { el.onclick = () => set(k); });
  set(1);
});
