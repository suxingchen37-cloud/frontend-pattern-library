// 用法：先 <script src="blocks/drag-sheet-snap.js"></script>，再调用 window.INITS['drag-sheet-snap'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drag-sheet-snap'] = (root => {
  var sheet = root.querySelector('[data-sheet]');
  var open = root.querySelector('[data-open]');
  var state = root.querySelector('[data-state]');
  if (!sheet || !open) return;
  var H = 150, peaks = [102, 52, 0], idx = 0;
  var startY = 0, startT = 0, base = 102, y = 102, dragging = false;
  var apply = function (v, anim) { y = v; sheet.style.transition = anim ? 'transform 280ms cubic-bezier(.34,1.56,.64,1)' : 'none'; sheet.style.transform = 'translateY(' + v + 'px)'; if (state) state.textContent = v === peaks[0] ? 'peek' : v === peaks[1] ? 'half' : 'full'; };
  var nearest = function (v) { var best = 0; peaks.forEach(function (p, i) { if (Math.abs(p - v) < Math.abs(peaks[best] - v)) best = i; }); return best; };
  sheet.addEventListener('pointerdown', function (e) { dragging = true; startY = e.clientY; startT = Date.now(); base = y; sheet.setPointerCapture(e.pointerId); });
  sheet.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    var d = e.clientY - startY;
    var v = base + d;
    if (v < 0) v = v * .25;
    if (v > peaks[0]) v = peaks[0] + (v - peaks[0]) * .3;
    apply(v, false);
  });
  var end = function () { if (!dragging) return; dragging = false; var v = (y - base) / Math.max(1, Date.now() - startT); var i = nearest(y); if (Math.abs(v) > .5) i = Math.max(0, Math.min(2, i + (v > 0 ? 1 : -1))); idx = i; apply(peaks[idx], true); };
  sheet.addEventListener('pointerup', end);
  sheet.addEventListener('pointercancel', end);
  open.addEventListener('click', function () { idx = Math.min(2, idx + 1); apply(peaks[idx], true); });
  apply(102, false);
});
