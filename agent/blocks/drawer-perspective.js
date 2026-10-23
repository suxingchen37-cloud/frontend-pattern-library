// 用法：先 <script src="blocks/drawer-perspective.js"></script>，再调用 window.INITS['drawer-perspective'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drawer-perspective'] = (root => {
  const box = root.querySelector('.d-dw');
  if (!box) return;
  const btn = box.querySelector('.d-dw-handle');
  if (!btn) return;
  btn.onclick = () => {
    const on = !box.classList.contains('d-dw-on');
    box.classList.toggle('d-dw-on', on);
    btn.setAttribute('aria-expanded', on ? 'true' : 'false');
    btn.textContent = on ? '推回' : '拉出';
  };
});
