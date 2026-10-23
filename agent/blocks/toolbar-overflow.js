// 用法：先 <script src="blocks/toolbar-overflow.js"></script>，再调用 window.INITS['toolbar-overflow'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['toolbar-overflow'] = (root => {
  const box = root.querySelector('.d-toolbar-overflow');
  if (!box || box.dataset.dto) return;
  box.dataset.dto = '1';
  const btn = box.querySelector('.d-to-more');
  const menu = box.querySelector('.d-to-menu');
  const items = [...box.querySelectorAll('.d-to-item')];
  let cur = 0;
  const focusItem = i => { cur = (i + items.length) % items.length; items[cur].focus(); };
  const set = open => {
    box.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.hidden = !open;
    if (open) setTimeout(() => focusItem(0), 280);
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  items.forEach(it => it.addEventListener('click', () => { set(false); btn.focus(); }));
  box.addEventListener('pointerdown', e => {
    if (!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) set(false);
  });
  box.addEventListener('keydown', e => {
    if (e.key === 'Escape') { set(false); btn.focus(); }
    else if (e.key === 'ArrowDown' && !menu.hidden) { e.preventDefault(); focusItem(cur + 1); }
    else if (e.key === 'ArrowUp' && !menu.hidden) { e.preventDefault(); focusItem(cur - 1); }
  });
});
