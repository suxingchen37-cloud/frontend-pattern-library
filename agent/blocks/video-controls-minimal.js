// 用法：先 <script src="blocks/video-controls-minimal.js"></script>，再调用 window.INITS['video-controls-minimal'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['video-controls-minimal'] = (root => {
  var box = root.querySelector('[data-player]');
  var fill = root.querySelector('[data-fill]');
  var tc = root.querySelector('[data-tc]');
  var st = root.querySelector('[data-state]');
  var btn = root.querySelector('[data-toggle]');
  var bar = root.querySelector('[data-bar]');
  if (!box || !fill || !bar) return;
  var dur = 42, t = 0, playing = false, timer = 0;
  var fmt = function (s) { return '00:' + (s < 10 ? '0' : '') + Math.floor(s); };
  var paint = function () { fill.style.width = (t / dur * 100).toFixed(2) + '%'; if (tc) tc.textContent = fmt(t); };
  var tick = function () { t = Math.min(dur, t + .25); paint(); if (t >= dur) pause(); };
  var play = function () { if (playing) return; playing = true; if (btn) btn.textContent = '❚❚'; if (st) st.textContent = '播放中'; timer = setInterval(tick, 250); };
  var pause = function () { playing = false; clearInterval(timer); if (btn) btn.textContent = '▶'; if (st) st.textContent = '暂停'; };
  if (btn) btn.addEventListener('click', function () { playing ? pause() : play(); });
  box.addEventListener('keydown', function (e) { if (e.key === ' ') { e.preventDefault(); playing ? pause() : play(); } });
  bar.addEventListener('pointerdown', function (e) { var r = bar.getBoundingClientRect(); t = Math.max(0, Math.min(dur, (e.clientX - r.left) / r.width * dur)); paint(); });
  paint();
});
