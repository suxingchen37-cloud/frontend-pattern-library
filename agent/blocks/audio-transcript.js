// 用法：先 <script src="blocks/audio-transcript.js"></script>，再调用 window.INITS['audio-transcript'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['audio-transcript'] = (root => {
  var btn = root.querySelector('[data-play]');
  var list = root.querySelector('[data-list]');
  var time = root.querySelector('[data-time]');
  if (!btn || !list) return;
  var items = [].slice.call(list.children);
  var t = 0, on = false, timer = 0, dur = 12;
  var fmt = function (s) { return '00:' + (s < 10 ? '0' : '') + Math.floor(s); };
  var paint = function () {
    var active = null;
    items.forEach(function (li) { var start = Number(li.dataset.t) || 0; if (start <= t) active = li; li.classList.toggle('on', li === active); });
    if (active) { var top = active.offsetTop - list.clientHeight / 2 + 20; list.scrollTop = Math.max(0, top); }
    if (time) time.textContent = fmt(t) + ' / 00:12';
  };
  var tick = function () { t += .2; if (t >= dur) { t = 0; on = false; clearInterval(timer); btn.textContent = '▶ 播放录音'; } paint(); };
  btn.addEventListener('click', function () {
    on = !on;
    btn.textContent = on ? '❚❚ 暂停' : '▶ 播放录音';
    clearInterval(timer);
    if (on) timer = setInterval(tick, 200);
  });
  items.forEach(function (li) { li.addEventListener('click', function () { t = Number(li.dataset.t) || 0; paint(); }); });
  paint();
});
