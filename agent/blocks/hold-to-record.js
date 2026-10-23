// 用法：先 <script src="blocks/hold-to-record.js"></script>，再调用 window.INITS['hold-to-record'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['hold-to-record'] = (root => {
  var btn = root.querySelector('[data-rec]');
  var note = root.querySelector('[data-note]');
  if (!btn) return;
  var t0 = 0, startY = 0, timer = 0, on = false, cancelled = false;
  var fmt = function (ms) { var s = ms / 1000; return s.toFixed(1) + 's'; };
  var stop = function () {
    if (!on) return;
    on = false;
    clearInterval(timer);
    btn.classList.remove('on', 'cancel');
    btn.lastChild.textContent = '按住说话';
    var ms = performance.now() - t0;
    if (note) note.textContent = cancelled ? '已取消' : '录了 ' + fmt(ms);
  };
  btn.addEventListener('pointerdown', function (e) {
    e.preventDefault();
    on = true; cancelled = false; t0 = performance.now(); startY = e.clientY;
    btn.classList.add('on');
    btn.lastChild.textContent = '松手结束';
    btn.setPointerCapture(e.pointerId);
    timer = setInterval(function () { if (note) note.textContent = fmt(performance.now() - t0) + ' · 上滑取消'; }, 100);
  });
  btn.addEventListener('pointermove', function (e) {
    if (!on) return;
    var up = startY - e.clientY;
    cancelled = up > 60;
    btn.classList.toggle('cancel', cancelled);
    if (note) note.textContent = cancelled ? '松手取消' : fmt(performance.now() - t0) + ' · 上滑取消';
  });
  btn.addEventListener('pointerup', stop);
  btn.addEventListener('pointercancel', stop);
});
