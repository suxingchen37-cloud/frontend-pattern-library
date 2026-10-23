// 用法：先 <script src="blocks/subtitle-toggle.js"></script>，再调用 window.INITS['subtitle-toggle'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['subtitle-toggle'] = (root => {
  var line = root.querySelector('[data-line]');
  var toggle = root.querySelector('[data-toggle]');
  var size = root.querySelector('[data-size]');
  if (!line || !toggle) return;
  var on = true, sizes = [9, 11, 13], si = 1;
  toggle.addEventListener('click', function () {
    on = !on;
    toggle.setAttribute('aria-pressed', on ? 'true' : 'false');
    toggle.textContent = on ? '字幕 开' : '字幕 关';
    line.classList.toggle('off', !on);
  });
  if (size) size.addEventListener('click', function () { si = (si + 1) % 3; line.style.fontSize = sizes[si] + 'px'; size.textContent = '字号 ' + ['小', '中', '大'][si]; });
});
