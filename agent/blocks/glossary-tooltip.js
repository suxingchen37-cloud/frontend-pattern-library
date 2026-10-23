// 用法：先 <script src="blocks/glossary-tooltip.js"></script>，再调用 window.INITS['glossary-tooltip'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['glossary-tooltip'] = (root => {
  var term = root.querySelector('[data-term]');
  if (!term) return;
  var toggle = function (e) { e.stopPropagation(); term.classList.toggle('on'); };
  term.addEventListener('click', toggle);
  term.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(e); } });
  document.addEventListener('click', function () { term.classList.remove('on'); });
});
