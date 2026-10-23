// 用法：先 <script src="blocks/double-tap-zoom.js"></script>，再调用 window.INITS['double-tap-zoom'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['double-tap-zoom'] = (root => {
  var stage = root.querySelector('[data-stage]');
  var inner = root.querySelector('[data-inner]');
  var label = inner && inner.querySelector('em');
  if (!stage || !inner) return;
  var on = false, last = 0;
  stage.addEventListener('pointerup', function (e) {
    var now = Date.now();
    if (now - last > 320) { last = now; return; }
    last = 0;
    var r = stage.getBoundingClientRect();
    var x = e.clientX - r.left, y = e.clientY - r.top;
    on = !on;
    inner.style.transformOrigin = on ? x + 'px ' + y + 'px' : '0 0';
    inner.style.transform = on ? 'scale(2.2)' : 'none';
    if (label) label.textContent = on ? '2.2×' : '1×';
    stage.style.cursor = on ? 'zoom-out' : 'zoom-in';
  });
});
