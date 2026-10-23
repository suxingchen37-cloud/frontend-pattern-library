// 用法：先 <script src="blocks/rotary-dial.js"></script>，再调用 window.INITS['rotary-dial'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['rotary-dial'] = (root => {
  var box = root.querySelector('[data-dial]');
  var knob = root.querySelector('[data-knob]');
  var needle = root.querySelector('[data-needle]');
  var val = root.querySelector('[data-val]');
  if (!box || !knob || !needle) return;
  var steps = 12, step = 30, idx = 6, dragging = false, lastAngle = 0;
  var render = function () { needle.style.transform = 'rotate(' + (idx * step - 90) + 'deg)'; if (val) val.textContent = String(idx); };
  var angleOf = function (e) { var r = knob.getBoundingClientRect(); var cx = r.left + r.width / 2, cy = r.top + r.height / 2; return Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI; };
  box.addEventListener('pointerdown', function (e) { dragging = true; lastAngle = angleOf(e); box.setPointerCapture(e.pointerId); box.style.cursor = 'grabbing'; });
  box.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    var a = angleOf(e), d = a - lastAngle;
    if (d > 180) d -= 360; if (d < -180) d += 360;
    lastAngle = a;
    idx = Math.max(0, Math.min(steps, idx + d / step));
    var snapped = Math.round(idx);
    needle.style.transform = 'rotate(' + (idx * step - 90).toFixed(1) + 'deg)';
    if (val) val.textContent = String(snapped);
  });
  var end = function () { if (!dragging) return; dragging = false; idx = Math.round(idx); box.style.cursor = 'grab'; render(); };
  box.addEventListener('pointerup', end);
  box.addEventListener('pointercancel', end);
  render();
});
