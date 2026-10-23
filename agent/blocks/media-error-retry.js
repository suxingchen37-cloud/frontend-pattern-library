// 用法：先 <script src="blocks/media-error-retry.js"></script>，再调用 window.INITS['media-error-retry'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['media-error-retry'] = (root => {
  var ok = root.querySelector('[data-ok]');
  var err = root.querySelector('[data-err]');
  var brk = root.querySelector('[data-break]');
  var retry = root.querySelector('[data-retry]');
  var alt = root.querySelector('[data-alt]');
  if (!ok || !err) return;
  var show = function (bad) { ok.hidden = bad; err.hidden = !bad; };
  if (brk) brk.addEventListener('click', function () { show(true); });
  if (retry) retry.addEventListener('click', function () { err.querySelector('p').textContent = '正在重连…'; setTimeout(function () { show(false); err.querySelector('p').textContent = '文件在，但编码不支持。'; }, 900); });
  if (alt) alt.addEventListener('click', function () { err.querySelector('p').textContent = '已切到 720p，正在重新加载…'; setTimeout(function () { show(false); }, 900); });
});
