// 用法：先 <script src="blocks/swipe-actions-row.js"></script>，再调用 window.INITS['swipe-actions-row'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['swipe-actions-row'] = (root => {
  var row = root.querySelector('[data-row]');
  var face = root.querySelector('[data-face]');
  if (!row || !face) return;
  var W = 136, startX = 0, dx = 0, drag = false, open = false;
  var set = function (v, anim) { face.style.transition = anim ? 'transform 240ms cubic-bezier(.34,1.56,.64,1)' : 'none'; face.style.transform = 'translateX(' + v + 'px)'; };
  face.addEventListener('pointerdown', function (e) { drag = true; startX = e.clientX; dx = 0; open = face.style.transform === 'translateX(' + (-W) + 'px)'; face.setPointerCapture(e.pointerId); });
  face.addEventListener('pointermove', function (e) {
    if (!drag) return;
    dx = e.clientX - startX;
    var base = open ? -W : 0;
    var v = Math.max(-W, Math.min(0, base + dx));
    set(v, false);
  });
  var end = function () { if (!drag) return; drag = false; var base = open ? -W : 0; var cur = Math.max(-W, Math.min(0, base + dx)); set(cur < -W * .6 ? -W : 0, true); open = cur < -W * .6; };
  face.addEventListener('pointerup', end);
  face.addEventListener('pointercancel', end);
});
