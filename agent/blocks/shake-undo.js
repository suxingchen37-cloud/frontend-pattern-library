// 用法：先 <script src="blocks/shake-undo.js"></script>，再调用 window.INITS['shake-undo'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['shake-undo'] = (root => {
  var toast = root.querySelector('[data-toast]');
  var btn = root.querySelector('[data-shake]');
  var undo = root.querySelector('[data-undo]');
  var note = root.querySelector('[data-note]');
  if (!toast || !btn) return;
  var last = 0, lastDir = 0, armed = false, timer = 0;
  var fire = function () {
    if (armed) return;
    armed = true;
    toast.classList.add('on');
    if (undo) undo.hidden = false;
    if (note) note.textContent = '抖了一下 · 5 秒内可撤销';
    clearTimeout(timer);
    timer = setTimeout(function () { armed = false; toast.classList.remove('on'); if (undo) undo.hidden = true; if (note) note.textContent = '摇晃手机，或点上面的按钮'; }, 5000);
  };
  btn.addEventListener('click', fire);
  if (undo) undo.addEventListener('click', function () { armed = false; clearTimeout(timer); toast.classList.remove('on'); undo.hidden = true; if (note) note.textContent = '已撤销'; });
  var onMotion = function (e) {
    var a = e.accelerationIncludingGravity || e.acceleration;
    if (!a) return;
    var m = Math.abs(a.x || 0) + Math.abs(a.y || 0) + Math.abs(a.z || 0);
    if (m < 28) return;
    var now = Date.now();
    var dir = (a.x || 0) > 0 ? 1 : -1;
    if (now - last < 180 && dir !== lastDir) fire();
    last = now; lastDir = dir;
  };
  if (window.DeviceMotionEvent) addEventListener('devicemotion', onMotion);
});
