// 用法：先 <script src="blocks/icon-morph-menu.js"></script>，再调用 window.INITS['icon-morph-menu'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['icon-morph-menu'] = (root => {
  const box = root.querySelector('.d-icon-morph-menu');
  if (!box || box.dataset.dim) return;
  box.dataset.dim = '1';
  const btn = box.querySelector('.d-im-btn'), label = box.querySelector('.d-im-label');
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    label.textContent = open ? '关闭' : '菜单';
  });
});
