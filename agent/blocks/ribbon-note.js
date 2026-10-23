// 用法：先 <script src="blocks/ribbon-note.js"></script>，再调用 window.INITS['ribbon-note'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['ribbon-note'] = (root => {
  const box = root.querySelector('.d-rn');
  if (!box || box.dataset.rn) return;
  box.dataset.rn = '1';
  const btn = box.querySelector('.d-rn-btn');
  const toggle = () => {
    const open = !box.classList.contains('is-open');
    box.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? '旁注 03 · 收起' : '旁注 03 · 展开';
  };
  btn.addEventListener('click', toggle);
});
