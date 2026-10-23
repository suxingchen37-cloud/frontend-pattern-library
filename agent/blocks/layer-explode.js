// 用法：先 <script src="blocks/layer-explode.js"></script>，再调用 window.INITS['layer-explode'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['layer-explode'] = (root => {
  const deck = root.querySelector('.d-le-deck');
  if (!deck || deck.dataset.le) return;
  deck.dataset.le = '1';
  const plates = Array.from(deck.querySelectorAll('.d-le-plate'));
  const on = el => { deck.classList.add('is-hot'); plates.forEach(p => p.classList.toggle('is-on', p === el)); };
  const off = () => { deck.classList.remove('is-hot'); plates.forEach(p => p.classList.remove('is-on')); };
  deck.addEventListener('pointerover', e => { const p = e.target.closest('.d-le-plate'); if (p) on(p); });
  deck.addEventListener('pointerout', e => { const p = e.target.closest('.d-le-plate'); if (p && !p.contains(e.relatedTarget)) off(); });
  deck.addEventListener('focusin', e => { const p = e.target.closest('.d-le-plate'); if (p) on(p); });
  deck.addEventListener('focusout', e => { const p = e.target.closest('.d-le-plate'); if (p && !p.contains(e.relatedTarget)) off(); });
  deck.addEventListener('keydown', e => { if (e.key === 'Escape') off(); });
});
