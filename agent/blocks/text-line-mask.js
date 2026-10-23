// 用法：先 <script src="blocks/text-line-mask.js"></script>，再调用 window.INITS['text-line-mask'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['text-line-mask'] = (root => {
  const box = root.querySelector('.d-line-mask');
  if (!box || box.dataset.dlm) return;
  box.dataset.dlm = '1';
  const play = () => { box.classList.add('is-reset'); void box.offsetWidth; box.classList.remove('is-reset'); };
  box.addEventListener('pointerdown', () => { play(); });
  box.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } });
});
