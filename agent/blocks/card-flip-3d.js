// 用法：先 <script src="blocks/card-flip-3d.js"></script>，再调用 window.INITS['card-flip-3d'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['card-flip-3d'] = (root => {
  const box = root.querySelector('.d-cf3d');
  if (!box) return;
  box.onclick = () => {
    const on = !box.classList.contains('d-cf3d-on');
    box.classList.toggle('d-cf3d-on', on);
    box.setAttribute('aria-pressed', on ? 'true' : 'false');
  };
});
