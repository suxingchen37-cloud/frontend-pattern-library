// 用法：先 <script src="blocks/long-press-copy.js"></script>，再调用 window.INITS['long-press-copy'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['long-press-copy'] = (root => {
  var zone = root.querySelector('[data-zone]');
  var text = root.querySelector('[data-text]');
  var menu = root.querySelector('[data-menu]');
  if (!zone || !text || !menu) return;
  var timer = 0;
  var hide = function () { menu.hidden = true; };
  var open = function (x, y) {
    menu.hidden = false;
    var r = zone.getBoundingClientRect();
    var mw = menu.offsetWidth, mh = menu.offsetHeight;
    var left = Math.max(6, Math.min(r.width - mw - 6, x - r.left - mw / 2));
    var top = y - r.top - mh - 8;
    if (top < 4) top = y - r.top + 18;
    menu.style.left = left.toFixed(0) + 'px';
    menu.style.top = top.toFixed(0) + 'px';
  };
  var start = function (e) { timer = setTimeout(function () { open(e.clientX, e.clientY); }, 480); };
  var cancel = function () { clearTimeout(timer); };
  text.addEventListener('pointerdown', start);
  text.addEventListener('pointerup', cancel);
  text.addEventListener('pointermove', cancel);
  text.addEventListener('pointercancel', cancel);
  var copy = menu.querySelector('[data-copy]');
  if (copy) copy.addEventListener('click', function () { var old = copy.textContent; copy.textContent = '已复制'; setTimeout(function () { copy.textContent = old; hide(); }, 700); });
  var cancelBtn = menu.querySelector('[data-cancel]');
  if (cancelBtn) cancelBtn.addEventListener('click', hide);
  zone.addEventListener('click', function (e) { if (menu.hidden) return; if (!menu.contains(e.target)) hide(); });
});
