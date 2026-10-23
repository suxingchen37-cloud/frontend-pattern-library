// 用法：先 <script src="blocks/swipe-tab-pager.js"></script>，再调用 window.INITS['swipe-tab-pager'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['swipe-tab-pager'] = (root => {
  var box = root.querySelector('[data-pager]');
  var view = box && box.querySelector('.d-sp3-view');
  var track = box && box.querySelector('[data-track]');
  var dots = box ? [].slice.call(box.querySelectorAll('.d-sp3-dots i')) : [];
  if (!view || !track) return;
  var idx = 0, startX = 0, startY = 0, dx = 0, dragging = false, w = 0;
  var set = function (i, anim) { idx = Math.max(0, Math.min(2, i)); track.style.transition = anim ? 'transform 260ms cubic-bezier(.34,1.56,.64,1)' : 'none'; track.style.transform = 'translateX(' + (-idx * 100 / 3) + '%)'; dots.forEach(function (d, k) { d.classList.toggle('d-sp3-on', k === idx); }); };
  view.addEventListener('pointerdown', function (e) { dragging = true; startX = e.clientX; startY = e.clientY; dx = 0; w = view.clientWidth; track.style.transition = 'none'; view.setPointerCapture(e.pointerId); });
  view.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    dx = e.clientX - startX;
    var dy = e.clientY - startY;
    if (Math.abs(dy) > Math.abs(dx) + 6) return;
    track.style.transform = 'translateX(calc(' + (-idx * 100 / 3) + '% + ' + dx.toFixed(1) + 'px))';
  });
  var end = function () { if (!dragging) return; dragging = false; set(Math.abs(dx) > w / 3 ? idx + (dx < 0 ? 1 : -1) : idx, true); };
  view.addEventListener('pointerup', end);
  view.addEventListener('pointercancel', end);
  set(0, false);
});
