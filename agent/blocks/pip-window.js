// 用法：先 <script src="blocks/pip-window.js"></script>，再调用 window.INITS['pip-window'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['pip-window'] = (root => {
  var box = root.querySelector('[data-box]');
  var pip = root.querySelector('[data-pip]');
  var back = root.querySelector('[data-back]');
  if (!box || !pip) return;
  var drag = null;
  pip.addEventListener('pointerdown', function (e) {
    if (e.target === back) return;
    var r = pip.getBoundingClientRect(), br = box.getBoundingClientRect();
    drag = { dx: e.clientX - r.left, dy: e.clientY - r.top, w: r.width, h: r.height, bw: br.width, bh: br.height };
    pip.style.transition = 'none';
    pip.setPointerCapture(e.pointerId);
  });
  pip.addEventListener('pointermove', function (e) {
    if (!drag) return;
    var br = box.getBoundingClientRect();
    var x = Math.max(0, Math.min(drag.bw - drag.w, e.clientX - br.left - drag.dx));
    var y = Math.max(0, Math.min(drag.bh - drag.h, e.clientY - br.top - drag.dy));
    pip.style.left = x + 'px'; pip.style.top = y + 'px';
    pip.style.right = 'auto'; pip.style.bottom = 'auto';
  });
  var end = function () {
    if (!drag) return;
    drag = null;
    pip.style.transition = 'left 200ms cubic-bezier(.2,.75,.25,1),top 200ms cubic-bezier(.2,.75,.25,1)';
    var br = box.getBoundingClientRect(), r = pip.getBoundingClientRect();
    var left = (r.left - br.left) < (br.width - r.width) / 2;
    var top = (r.top - br.top) < (br.height - r.height) / 2;
    pip.style.left = left ? '10px' : (br.width - r.width - 10) + 'px';
    pip.style.top = top ? '10px' : (br.height - r.height - 10) + 'px';
  };
  pip.addEventListener('pointerup', end);
  pip.addEventListener('pointercancel', end);
  if (back) back.addEventListener('click', function () { pip.style.transition = 'none'; pip.style.left = ''; pip.style.top = ''; pip.style.right = '10px'; pip.style.bottom = '10px'; });
});
