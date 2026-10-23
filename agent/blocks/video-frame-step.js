// 用法：先 <script src="blocks/video-frame-step.js"></script>，再调用 window.INITS['video-frame-step'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['video-frame-step'] = (root => {
  var tEl = root.querySelector('[data-time]');
  var fEl = root.querySelector('[data-frame]');
  var back = root.querySelector('[data-back]');
  var fwd = root.querySelector('[data-fwd]');
  var jump = root.querySelector('[data-jump]');
  if (!tEl || !fwd) return;
  var fps = 24, frame = 338, timer = 0;
  var fmt = function () {
    var s = frame / fps, m = Math.floor(s / 60), sec = s % 60;
    var ss = (sec < 10 ? '0' : '') + sec.toFixed(2);
    tEl.textContent = (m < 10 ? '0' : '') + m + ':' + ss;
    if (fEl) fEl.textContent = 'FRAME ' + frame;
  };
  var step = function (d) { frame = Math.max(0, frame + d); fmt(); };
  back.addEventListener('click', function () { step(-1); });
  fwd.addEventListener('click', function () { step(1); });
  var hold = function (el, d) {
    el.addEventListener('pointerdown', function () { clearInterval(timer); timer = setInterval(function () { step(d); }, 1000 / fps); });
    el.addEventListener('pointerup', function () { clearInterval(timer); });
    el.addEventListener('pointercancel', function () { clearInterval(timer); });
  };
  hold(back, -1); hold(fwd, 1);
  if (jump) jump.addEventListener('click', function () { frame = 20 * fps; fmt(); });
  root.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); });
  root.tabIndex = 0;
  fmt();
});
