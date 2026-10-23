// 用法：先 <script src="blocks/gallery-strip.js"></script>，再调用 window.INITS['gallery-strip'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['gallery-strip'] = (root => {
  var title = root.querySelector('[data-title]');
  var ths = [].slice.call(root.querySelectorAll('.d-gs-th'));
  if (!title || !ths.length) return;
  var names = ['开场', '推门', '停顿', '反打'], cur = 0;
  var pick = function (i) { cur = (i + ths.length) % ths.length; ths.forEach(function (t, k) { t.classList.toggle('d-gs-on', k === cur); }); title.textContent = ths[cur].textContent + ' · ' + names[cur]; };
  ths.forEach(function (t, i) { t.addEventListener('click', function () { pick(i); }); });
  document.addEventListener('keydown', function (e) {
    if (!root.contains(document.activeElement) && document.activeElement !== document.body) return;
    if (e.key === 'ArrowRight') pick(cur + 1);
    if (e.key === 'ArrowLeft') pick(cur - 1);
  });
  pick(0);
});
