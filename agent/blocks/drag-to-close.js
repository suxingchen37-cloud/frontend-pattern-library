// 用法：先 <script src="blocks/drag-to-close.js"></script>，再调用 window.INITS['drag-to-close'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drag-to-close'] = (root => {
  var sheet = root.querySelector('[data-sheet]');
  var scrim = root.querySelector('[data-scrim]');
  var open = root.querySelector('[data-open]');
  if (!sheet || !scrim || !open) return;
  var startY = 0, dy = 0, drag = false, H = 0;
  var setOpen = function (v) { sheet.style.transition = 'transform 280ms cubic-bezier(.34,1.56,.64,1)'; sheet.classList.toggle('on', v); scrim.style.opacity = v ? '.18' : '0'; };
  open.addEventListener('click', function () { setOpen(true); });
  sheet.addEventListener('pointerdown', function (e) { drag = true; startY = e.clientY; dy = 0; H = sheet.offsetHeight; sheet.style.transition = 'none'; sheet.setPointerCapture(e.pointerId); });
  sheet.addEventListener('pointermove', function (e) {
    if (!drag) return;
    dy = Math.max(0, e.clientY - startY);
    sheet.style.transform = 'translateY(' + dy.toFixed(1) + 'px)';
    scrim.style.opacity = String(Math.max(0, .18 * (1 - dy / H)));
  });
  var end = function () {
    if (!drag) return;
    drag = false;
    sheet.style.transition = 'transform 180ms cubic-bezier(.2,.75,.25,1)';
    if (dy > H * .25) { sheet.style.transform = 'translateY(105%)'; sheet.classList.remove('on'); scrim.style.opacity = '0'; }
    else { sheet.style.transform = ''; scrim.style.opacity = '.18'; setTimeout(function () { sheet.style.transition = 'transform 280ms cubic-bezier(.34,1.56,.64,1)'; }, 200); }
  };
  sheet.addEventListener('pointerup', end);
  sheet.addEventListener('pointercancel', end);
});
