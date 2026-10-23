// 用法：先 <script src="blocks/chapter-markers.js"></script>，再调用 window.INITS['chapter-markers'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['chapter-markers'] = (root => {
  var bar = root.querySelector('[data-bar]');
  var fill = root.querySelector('[data-fill]');
  var now = root.querySelector('[data-now]');
  if (!bar || !fill) return;
  var marks = [[0, '开场'], [18, '推门'], [46, '停顿'], [74, '反打']];
  var dur = 120, t = 0;
  var fmt = function (s) { var m = Math.floor(s / 60), sec = Math.floor(s % 60); return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec; };
  var paint = function () {
    var p = t / dur;
    fill.style.width = (p * 100).toFixed(1) + '%';
    var cur = marks[0];
    marks.forEach(function (m) { if (m[0] / 100 <= p) cur = m; });
    if (now) now.textContent = cur[1] + ' · ' + fmt(t);
  };
  bar.addEventListener('pointerdown', function (e) { var r = bar.getBoundingClientRect(); t = Math.max(0, Math.min(dur, (e.clientX - r.left) / r.width * dur)); paint(); });
  paint();
});
