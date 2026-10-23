// 用法：先 <script src="blocks/edge-peek.js"></script>，再调用 window.INITS['edge-peek'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['edge-peek'] = (root => {
  var box = root.querySelector('[data-peek]');
  var page = box && box.querySelector('.d-ep-page');
  var edge = box && box.querySelector('[data-edge]');
  if (!box || !page || !edge) return;
  var startX = 0, dx = 0, drag = false, w = 0;
  edge.addEventListener('pointerdown', function (e) { drag = true; startX = e.clientX; dx = 0; w = box.clientWidth; page.style.transition = 'none'; edge.setPointerCapture(e.pointerId); });
  edge.addEventListener('pointermove', function (e) { if (!drag) return; dx = Math.max(0, Math.min(w, e.clientX - startX)); page.style.transform = 'translateX(' + dx.toFixed(1) + 'px)'; });
  var end = function () { if (!drag) return; drag = false; page.style.transition = 'transform 260ms cubic-bezier(.34,1.56,.64,1)'; page.style.transform = dx > w * .4 ? 'translateX(' + w + 'px)' : 'none'; setTimeout(function () { page.style.transition = 'none'; page.style.transform = 'none'; void page.offsetWidth; page.style.transition = 'transform 260ms cubic-bezier(.34,1.56,.64,1)'; }, 300); };
  edge.addEventListener('pointerup', end);
  edge.addEventListener('pointercancel', end);
});
