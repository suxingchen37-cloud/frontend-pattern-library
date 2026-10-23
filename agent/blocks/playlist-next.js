// 用法：先 <script src="blocks/playlist-next.js"></script>，再调用 window.INITS['playlist-next'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['playlist-next'] = (root => {
  var list = root.querySelector('[data-list]');
  var title = root.querySelector('[data-title]');
  var time = root.querySelector('[data-time]');
  if (!list) return;
  var items = [].slice.call(list.children), i = 0, t = 0, timer = 0;
  var fmt = function (s) { return '00:' + (s < 10 ? '0' : '') + s; };
  var paint = function () {
    items.forEach(function (li, k) { li.classList.toggle('d-pl-on', k === i); });
    if (title) title.textContent = items[i].firstChild.textContent.trim();
    if (time) time.textContent = fmt(Math.floor(t)) + ' / 00:' + String(items[i].dataset.d).padStart(2, '0');
  };
  var next = function () { i = (i + 1) % items.length; t = 0; paint(); };
  var start = function () { clearInterval(timer); timer = setInterval(function () { t += .25; if (t >= Number(items[i].dataset.d)) next(); paint(); }, 250); };
  items.forEach(function (li, k) { li.addEventListener('click', function () { i = k; t = 0; paint(); start(); }); });
  paint(); start();
});
