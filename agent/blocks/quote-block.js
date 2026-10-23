// 用法：先 <script src="blocks/quote-block.js"></script>，再调用 window.INITS['quote-block'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['quote-block'] = (root => {
  const box = root.querySelector('.d-qb');
  if (!box || box.dataset.qb) return;
  box.dataset.qb = '1';
  const btn = box.querySelector('.d-qb-btn');
  const ctx = box.querySelector('.d-qb-ctx');
  const sync = open => {
    box.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? '收起上下文' : '展开上下文';
    ctx.setAttribute('aria-hidden', String(!open));
  };
  btn.addEventListener('click', () => sync(!box.classList.contains('is-open')));
  box.addEventListener('keydown', e => {
    if (e.key === 'Escape' && box.classList.contains('is-open')) { sync(false); btn.focus(); }
  });
  sync(false);
});
