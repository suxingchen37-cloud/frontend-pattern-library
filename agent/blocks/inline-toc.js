// 用法：先 <script src="blocks/inline-toc.js"></script>，再调用 window.INITS['inline-toc'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['inline-toc'] = (root => {
  var links = [].slice.call(root.querySelectorAll('[data-to]'));
  if (!links.length) return;
  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      links.forEach(function (x) { x.classList.toggle('d-it-on', x === a); });
    });
  });
});
