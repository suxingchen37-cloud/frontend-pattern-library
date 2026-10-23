// 用法：先 <script src="blocks/fx-fade-stagger.js"></script>，再调用 window.INITS['fx-fade-stagger'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['fx-fade-stagger'] = (root => {
  const rows = Array.from(root.querySelectorAll('.d-row'));
  const replay = () => rows.forEach((r) => { r.style.animation = 'none'; void r.offsetWidth; r.style.animation = ''; });
  const btn = root.querySelector('[data-replay]');
  if (btn) btn.addEventListener('click', replay);
  replay();
});
