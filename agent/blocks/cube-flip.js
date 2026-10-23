// 用法：先 <script src="blocks/cube-flip.js"></script>，再调用 window.INITS['cube-flip'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['cube-flip'] = (root => {
  const box = root.querySelector('.d-cube');
  if (!box) return;
  box.onclick = () => {
    const on = !box.classList.contains('d-cube-on');
    box.classList.toggle('d-cube-on', on);
    box.setAttribute('aria-pressed', on ? 'true' : 'false');
  };
});
