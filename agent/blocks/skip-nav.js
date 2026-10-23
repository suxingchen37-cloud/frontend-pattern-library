// 用法：先 <script src="blocks/skip-nav.js"></script>，再调用 window.INITS['skip-nav'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['skip-nav'] = (root => {
  const box = root.querySelector('.d-skn');
  if (!box || box.dataset.skn) return;
  box.dataset.skn = '1';
  const link = box.querySelector('.d-skn-link');
  const main = box.querySelector('.d-skn-main');
  const tryBtn = box.querySelector('.d-skn-try');
  const jump = () => {
    main.focus();
    main.classList.add('is-hit');
  };
  link.addEventListener('click', e => { e.preventDefault(); jump(); });
  main.addEventListener('blur', () => main.classList.remove('is-hit'));
  tryBtn.addEventListener('click', () => link.focus());
});
