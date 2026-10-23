// 用法：先 <script src="blocks/swipe-to-dismiss.js"></script>，再调用 window.INITS['swipe-to-dismiss'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['swipe-to-dismiss'] = (root => {
  var card = root.querySelector('[data-card]');
  var note = root.querySelector('.d-sd-note');
  if (!card || !note) return;
  var startX = 0, startT = 0, dx = 0, dragging = false;
  var reset = function () { card.style.transition = 'transform 220ms cubic-bezier(.34,1.56,.64,1),opacity 220ms cubic-bezier(.2,.75,.25,1)'; card.style.transform = ''; card.style.opacity = '1'; };
  card.addEventListener('pointerdown', function (e) { dragging = true; startX = e.clientX; startT = Date.now(); dx = 0; card.style.transition = 'none'; card.setPointerCapture(e.pointerId); });
  card.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    dx = e.clientX - startX;
    card.style.transform = 'translateX(' + (dx * .55).toFixed(1) + 'px)';
    card.style.opacity = String(Math.max(.35, 1 - Math.abs(dx) / 420));
  });
  var end = function () {
    if (!dragging) return;
    dragging = false;
    var v = Math.abs(dx) / Math.max(1, Date.now() - startT);
    if (Math.abs(dx) > 96 || v > .5) { card.style.transform = 'translateX(' + (dx > 0 ? 420 : -420) + 'px)'; card.style.opacity = '0'; }
    else reset();
  };
  card.addEventListener('pointerup', end);
  card.addEventListener('pointercancel', end);
  note.addEventListener('click', function () { card.style.transition = 'none'; card.style.transform = ''; card.style.opacity = '1'; void card.offsetWidth; reset(); });
});
