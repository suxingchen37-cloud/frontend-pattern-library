// 用法：先 <script src="blocks/scrub-thumbnails.js"></script>，再调用 window.INITS['scrub-thumbnails'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['scrub-thumbnails'] = (root => {
  var box = root.querySelector('[data-box]');
  var track = root.querySelector('[data-track]');
  var fill = root.querySelector('[data-fill]');
  var thumb = root.querySelector('[data-thumb]');
  var tc = root.querySelector('[data-tc]');
  if (!box || !track || !thumb) return;
  var dur = 118, dragging = false;
  var fmt = function (s) { var m = Math.floor(s / 60), sec = Math.floor(s % 60); return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec; };
  var update = function (e) {
    var r = track.getBoundingClientRect();
    var p = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    fill.style.width = (p * 100).toFixed(1) + '%';
    if (tc) tc.textContent = fmt(p * dur);
    thumb.style.left = Math.max(8, Math.min(box.clientWidth - 70, p * r.width + 16 - 30)) + 'px';
  };
  track.addEventListener('pointerdown', function (e) { dragging = true; thumb.classList.add('on'); track.setPointerCapture(e.pointerId); update(e); });
  track.addEventListener('pointermove', function (e) { if (dragging) update(e); });
  var end = function () { dragging = false; thumb.classList.remove('on'); };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
});
