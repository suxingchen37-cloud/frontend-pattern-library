// 用法：先 <script src="blocks/tap-feedback.js"></script>，再调用 window.INITS['tap-feedback'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['tap-feedback'] = (root => {
  var box = root.querySelector('[data-surface]');
  if (!box) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  box.addEventListener('pointerdown', function (e) {
    var r = box.getBoundingClientRect();
    var ring = document.createElement('i');
    ring.style.left = (e.clientX - r.left) + 'px';
    ring.style.top = (e.clientY - r.top) + 'px';
    var p = e.pointerType === 'mouse' ? .8 : (e.pressure || .5) + .5;
    ring.style.transform = 'scale(' + p.toFixed(2) + ')';
    box.appendChild(ring);
    setTimeout(function () { ring.remove(); }, 560);
  });
});
