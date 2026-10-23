// 用法：先 <script src="blocks/audio-peaks.js"></script>，再调用 window.INITS['audio-peaks'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['audio-peaks'] = (root => {
  var wave = root.querySelector('[data-wave]');
  var play = root.querySelector('[data-play]');
  var time = root.querySelector('[data-time]');
  if (!wave || !play) return;
  var bars = [], n = 54, i;
  for (i = 0; i < n; i++) { var b = document.createElement('i'); b.style.height = (14 + Math.abs(Math.sin(i * .7) * Math.cos(i * .23)) * 86).toFixed(0) + '%'; wave.appendChild(b); bars.push(b); }
  var dur = 12, t = 0, on = false, timer = 0;
  var paint = function () {
    var upto = Math.round(t / dur * n);
    bars.forEach(function (b, k) { b.classList.toggle('on', k < upto); });
    if (time) time.textContent = '00:' + (t < 10 ? '0' : '') + t.toFixed(1);
  };
  var tick = function () { t = Math.min(dur, t + .1); paint(); if (t >= dur) { on = false; clearInterval(timer); play.textContent = '▶'; } };
  play.addEventListener('click', function () { on = !on; play.textContent = on ? '❚❚' : '▶'; clearInterval(timer); if (on) timer = setInterval(tick, 100); });
  wave.addEventListener('pointerdown', function (e) { var r = wave.getBoundingClientRect(); t = Math.max(0, Math.min(dur, (e.clientX - r.left) / r.width * dur)); paint(); });
  paint();
});
