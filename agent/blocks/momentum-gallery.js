// 用法：先 <script src="blocks/momentum-gallery.js"></script>，再调用 window.INITS['momentum-gallery'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['momentum-gallery'] = (root => {
  var box = root.querySelector('[data-gallery]');
  var track = root.querySelector('[data-track]');
  if (!box || !track) return;
  var x = 0, v = 0, startX = 0, lastX = 0, lastT = 0, drag = false, raf = 0;
  var minX = function () { return Math.min(0, box.clientWidth - track.scrollWidth - 12); };
  var apply = function () { track.style.transform = 'translate3d(' + x.toFixed(1) + 'px,0,0)'; };
  var snap = function () {
    var card = track.querySelector('.d-mg-card');
    if (!card) return;
    var w = card.offsetWidth + 8;
    var i = Math.round(-x / w);
    var target = Math.max(minX(), Math.min(0, -i * w));
    x = target; apply();
  };
  var tick = function () {
    if (drag) return;
    x += v; v *= .94;
    if (x > 0) { x = 0; v = 0; }
    if (x < minX()) { x = minX(); v = 0; }
    apply();
    if (Math.abs(v) > .3) raf = requestAnimationFrame(tick);
    else { snap(); v = 0; }
  };
  track.addEventListener('pointerdown', function (e) { drag = true; startX = e.clientX; lastX = e.clientX; lastT = Date.now(); v = 0; cancelAnimationFrame(raf); track.setPointerCapture(e.pointerId); });
  track.addEventListener('pointermove', function (e) {
    if (!drag) return;
    var now = Date.now();
    x += e.clientX - lastX;
    v = (e.clientX - lastX) / Math.max(1, now - lastT) * 16;
    lastX = e.clientX; lastT = now;
    if (x > 0) x *= .35;
    if (x < minX()) x = minX() + (x - minX()) * .35;
    apply();
  });
  var end = function () { if (!drag) return; drag = false; raf = requestAnimationFrame(tick); };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
  apply();
});
