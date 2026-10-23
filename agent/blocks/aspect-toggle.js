// 用法：先 <script src="blocks/aspect-toggle.js"></script>，再调用 window.INITS['aspect-toggle'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['aspect-toggle'] = (root => {
  var frame = root.querySelector('[data-frame]');
  var size = root.querySelector('[data-size]');
  var btns = [].slice.call(root.querySelectorAll('[data-ratio]'));
  if (!frame || !btns.length) return;
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      var r = b.dataset.ratio;
      frame.style.aspectRatio = r;
      frame.style.width = r === '9/16' ? '58%' : '100%';
      btns.forEach(function (x) { x.classList.toggle('d-asp-on', x === b); });
      var w = frame.clientWidth, h = frame.clientHeight;
      if (size) size.textContent = Math.round(w) + ' × ' + Math.round(h);
    });
  });
  var w0 = frame.clientWidth, h0 = frame.clientHeight;
  if (size) size.textContent = Math.round(w0) + ' × ' + Math.round(h0);
});
