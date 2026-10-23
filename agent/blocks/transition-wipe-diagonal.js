// 用法：先 <script src="blocks/transition-wipe-diagonal.js"></script>，再调用 window.INITS['transition-wipe-diagonal'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['transition-wipe-diagonal'] = (root => {
  const box = root.querySelector('.d-wipe');
  if (!box || box.dataset.dwd) return;
  box.dataset.dwd = '1';
  const on = () => {
    clearTimeout(box._dwT);
    box.classList.remove('is-out');
    box.classList.add('is-on');
  };
  const off = () => {
    clearTimeout(box._dwT);
    box.classList.add('is-out');
    box._dwT = setTimeout(() => {
      box.classList.remove('is-on');
      box.classList.remove('is-out');
    }, 280);
  };
  box._dwT = setTimeout(on, 280);
  box.addEventListener('click', () => { if (box.classList.contains('is-on')) off(); else on(); });
  box.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (box.classList.contains('is-on')) off(); else on();
    }
  });
});
