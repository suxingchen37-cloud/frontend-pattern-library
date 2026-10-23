// 用法：先 <script src="blocks/two-finger-pan.js"></script>，再调用 window.INITS['two-finger-pan'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['two-finger-pan'] = (root => {
  var box = root.querySelector('[data-canvas]');
  var art = root.querySelector('[data-art]');
  if (!box || !art) return;
  var x = 0, y = 0, sx = 0, sy = 0, drag = null;
  var clamp = function () {
    var maxX = 0, minX = box.clientWidth - art.offsetWidth;
    var maxY = 0, minY = box.clientHeight - art.offsetHeight;
    x = Math.max(minX, Math.min(maxX, x));
    y = Math.max(minY, Math.min(maxY, y));
    art.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
  };
  box.addEventListener('pointerdown', function (e) { if (e.pointerType === 'touch' && e.isPrimary) return; drag = { x: e.clientX, y: e.clientY }; sx = x; sy = y; box.setPointerCapture(e.pointerId); });
  box.addEventListener('pointermove', function (e) { if (!drag) return; x = sx + (e.clientX - drag.x); y = sy + (e.clientY - drag.y); clamp(); });
  var end = function () { drag = null; };
  box.addEventListener('pointerup', end);
  box.addEventListener('pointercancel', end);
  box.addEventListener('wheel', function (e) { if (!e.shiftKey) { x -= e.deltaY; clamp(); e.preventDefault(); } }, { passive: false });
  clamp();
});
