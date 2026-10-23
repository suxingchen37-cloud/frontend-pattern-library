// 用法：先 <script src="blocks/drag-scrub.js"></script>，再调用 window.INITS['drag-scrub'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drag-scrub'] = (root => {
  var track = root.querySelector('[data-strip] .d-dsr-track');
  var fill = root.querySelector('[data-fill]');
  var head = root.querySelector('[data-head]');
  var sec = root.querySelector('[data-sec]');
  if (!track || !fill || !head) return;
  var max = 12, dragging = false;
  var paint = function (p) {
    fill.style.width = (p * 100).toFixed(1) + '%';
    head.style.left = (p * 100).toFixed(1) + '%';
    if (sec) sec.textContent = Math.floor(p * max) + 's';
  };
  var fromEvent = function (e) { var r = track.getBoundingClientRect(); return Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)); };
  track.addEventListener('pointerdown', function (e) { dragging = true; paint(fromEvent(e)); track.setPointerCapture(e.pointerId); });
  track.addEventListener('pointermove', function (e) { if (dragging) paint(fromEvent(e)); });
  var end = function () { dragging = false; };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
  paint(0);
});
