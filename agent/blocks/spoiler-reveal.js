// 用法：先 <script src="blocks/spoiler-reveal.js"></script>，再调用 window.INITS['spoiler-reveal'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['spoiler-reveal'] = (root => {
  var m = root.querySelector('[data-mask]');
  if (!m) return;
  m.addEventListener('click', function () { var on = m.classList.toggle('on'); m.setAttribute('aria-pressed', on ? 'true' : 'false'); });
});
