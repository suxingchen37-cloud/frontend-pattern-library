// 用法：先 <script src="blocks/drag-handle-resize.js"></script>，再调用 window.INITS['drag-handle-resize'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drag-handle-resize'] = (root => {
  var wrap = root.querySelector('[data-wrap]');
  var handle = root.querySelector('[data-handle]');
  var bottom = root.querySelector('[data-bottom]');
  var size = root.querySelector('[data-size]');
  if (!handle || !bottom) return;
  var startY = 0, startH = 0, drag = false;
  var apply = function (h) {
    var max = wrap.clientHeight * .7, min = 80;
    h = Math.max(min, Math.min(max, h));
    bottom.style.height = h.toFixed(1) + 'px';
    if (size) size.textContent = '高 ' + Math.round(h) + 'px';
  };
  handle.addEventListener('pointerdown', function (e) { drag = true; startY = e.clientY; startH = bottom.offsetHeight; handle.setPointerCapture(e.pointerId); });
  handle.addEventListener('pointermove', function (e) { if (!drag) return; apply(startH - (e.clientY - startY)); });
  var end = function () { drag = false; };
  handle.addEventListener('pointerup', end);
  handle.addEventListener('pointercancel', end);
});
