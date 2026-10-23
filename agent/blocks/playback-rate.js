// 用法：先 <script src="blocks/playback-rate.js"></script>，再调用 window.INITS['playback-rate'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['playback-rate'] = (root => {
  var clock = root.querySelector('[data-clock]');
  var rateLabel = root.querySelector('[data-rate]');
  var play = root.querySelector('[data-play]');
  var rate = root.querySelector('[data-ratebtn]');
  if (!clock || !play || !rate) return;
  var t = 0, on = false, timer = 0, speeds = [1, 1.5, 2], si = 0;
  var fmt = function (s) { var m = Math.floor(s / 60), sec = Math.floor(s % 60); return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec; };
  var tick = function () { t += .1 * speeds[si]; clock.textContent = fmt(t); };
  play.addEventListener('click', function () {
    on = !on;
    play.textContent = on ? '暂停' : '播放';
    play.classList.toggle('on', on);
    clearInterval(timer);
    if (on) timer = setInterval(tick, 100);
  });
  rate.addEventListener('click', function () {
    si = (si + 1) % speeds.length;
    rate.textContent = speeds[si] + '×';
    if (rateLabel) rateLabel.textContent = speeds[si].toFixed(1) + '×';
  });
});
