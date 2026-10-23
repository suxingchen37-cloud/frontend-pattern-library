// 用法：先 <script src="blocks/tilt-stack.js"></script>，再调用 window.INITS['tilt-stack'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['tilt-stack'] = (root => {
  const deck = root.querySelector('.d-ts-deck');
  if (!deck || deck.dataset.ts) return;
  deck.dataset.ts = '1';
  const move = e => {
    const r = deck.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    deck.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg');
    deck.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg');
  };
  const rest = () => { deck.style.removeProperty('--rx'); deck.style.removeProperty('--ry'); };
  deck.addEventListener('pointermove', move);
  deck.addEventListener('pointerleave', rest);
  deck.addEventListener('pointercancel', rest);
});
