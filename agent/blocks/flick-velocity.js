// 用法：先 <script src="blocks/flick-velocity.js"></script>，再调用 window.INITS['flick-velocity'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['flick-velocity'] = (root => {
  var zone = root.querySelector('[data-zone]');
  var chip = root.querySelector('[data-chip]');
  var bar = root.querySelector('[data-bar]');
  var vel = root.querySelector('[data-vel]');
  var log = root.querySelector('[data-log]');
  if (!zone || !chip) return;
  var sy = 0, st = 0, dy = 0, dragging = false;
  var reset = function () { chip.style.transform = 'none'; if (bar) bar.style.width = '0'; };
  zone.addEventListener('pointerdown', function (e) { dragging = true; sy = e.clientY; st = Date.now(); dy = 0; chip.style.transition = 'none'; zone.setPointerCapture(e.pointerId); });
  zone.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    dy = Math.min(0, e.clientY - sy);
    chip.style.transform = 'translateY(' + dy.toFixed(1) + 'px)';
    var v = Math.abs(dy) / Math.max(1, Date.now() - st);
    if (bar) bar.style.width = Math.min(100, v / .6 * 100) + '%';
    if (vel) vel.textContent = v.toFixed(2) + ' px/ms';
  });
  var end = function () {
    if (!dragging) return;
    dragging = false;
    var v = Math.abs(dy) / Math.max(1, Date.now() - st);
    chip.style.transition = 'transform 260ms cubic-bezier(.34,1.56,.64,1)';
    if (v > .6) { if (log) log.textContent = '触发 · ' + v.toFixed(2) + ' px/ms'; chip.style.transform = 'translateY(-120px)'; setTimeout(function () { chip.style.transition = 'none'; reset(); void chip.offsetWidth; chip.style.transition = 'transform 260ms cubic-bezier(.34,1.56,.64,1)'; }, 420); }
    else { if (log) log.textContent = '没到阈值 · 只走了 ' + Math.round(Math.abs(dy)) + 'px'; reset(); }
  };
  zone.addEventListener('pointerup', end);
  zone.addEventListener('pointercancel', end);
});
