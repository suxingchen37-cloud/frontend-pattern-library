// 用法：先 <script src="blocks/press-hold-fill.js"></script>，再调用 window.INITS['press-hold-fill'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['press-hold-fill'] = (root => {
  var btn = root.querySelector('[data-hold]');
  var ring = btn && btn.querySelector('.d-ph-fill');
  var note = root.querySelector('[data-note]');
  if (!btn || !ring) return;
  var C = 2 * Math.PI * 28, raf = 0, t0 = 0, done = false;
  var stop = function () { cancelAnimationFrame(raf); ring.style.strokeDasharray = '0 ' + C; };
  var tick = function () {
    var p = Math.min(1, (performance.now() - t0) / 900);
    ring.style.strokeDasharray = (C * p).toFixed(1) + ' ' + C;
    if (p >= 1) { done = true; if (note) note.textContent = '已清空 · 再按住可撤销'; btn.querySelector('span').textContent = '已清空'; return; }
    raf = requestAnimationFrame(tick);
  };
  btn.addEventListener('pointerdown', function (e) { e.preventDefault(); if (done) return; t0 = performance.now(); if (note) note.textContent = '继续按住…'; btn.setPointerCapture(e.pointerId); cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); });
  btn.addEventListener('pointerup', function () { if (done) { done = false; btn.querySelector('span').textContent = '按住 0.9 秒清空'; if (note) note.textContent = '松手即取消'; } stop(); });
  btn.addEventListener('pointercancel', stop);
});
