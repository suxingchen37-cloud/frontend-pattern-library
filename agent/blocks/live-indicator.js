// 用法：先 <script src="blocks/live-indicator.js"></script>，再调用 window.INITS['live-indicator'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['live-indicator'] = (root => {
  var bar = root.querySelector('.d-li-bar');
  var btn = root.querySelector('[data-toggle]');
  var state = root.querySelector('[data-state]');
  var lat = root.querySelector('[data-lat]');
  if (!bar || !btn) return;
  var on = true, t = 2.4, timer = setInterval(function () { t = Math.min(9.9, t + .1); if (lat && on) lat.textContent = '延迟 ' + t.toFixed(1) + 's'; }, 900);
  btn.addEventListener('click', function () {
    on = !on;
    bar.classList.toggle('paused', !on);
    btn.textContent = on ? '暂停' : '继续';
    if (state) state.textContent = on ? '直播中' : '已暂停';
  });
});
