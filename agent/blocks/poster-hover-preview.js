// 用法：先 <script src="blocks/poster-hover-preview.js"></script>，再调用 window.INITS['poster-hover-preview'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['poster-hover-preview'] = (root => {
  var card = root.querySelector('[data-card]');
  if (!card) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var timer = 0;
  card.addEventListener('pointerenter', function () { timer = setTimeout(function () { card.classList.add('on'); timer = setTimeout(function () { card.classList.remove('on'); }, 3000); }, 400); });
  card.addEventListener('pointerleave', function () { clearTimeout(timer); card.classList.remove('on'); });
});
