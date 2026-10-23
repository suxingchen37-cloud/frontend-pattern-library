// 用法：先 <script src="blocks/download-card.js"></script>，再调用 window.INITS['download-card'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['download-card'] = (root => {
  var btn = root.querySelector('[data-dl]');
  if (!btn) return;
  var p = 0, timer = 0;
  btn.addEventListener('click', function () {
    if (btn.classList.contains('busy')) { clearInterval(timer); btn.classList.remove('busy'); btn.textContent = '下载'; return; }
    btn.classList.add('busy'); p = 0;
    timer = setInterval(function () { p += 20; btn.textContent = p + '%'; if (p >= 100) { clearInterval(timer); btn.textContent = '已下载'; setTimeout(function () { btn.classList.remove('busy'); btn.textContent = '再下一次'; }, 900); } }, 220);
  });
});
