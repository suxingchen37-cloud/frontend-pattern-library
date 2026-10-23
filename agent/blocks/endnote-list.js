// 用法：先 <script src="blocks/endnote-list.js"></script>，再调用 window.INITS['endnote-list'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['endnote-list'] = (root => {
  [].slice.call(root.querySelectorAll('[data-n]')).forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var t = root.querySelector('#d-en-' + a.dataset.n);
      if (t) { t.scrollIntoView({ block: 'nearest' }); t.style.background = 'color-mix(in srgb,var(--marker-hi) 30%,transparent)'; setTimeout(function () { t.style.background = ''; }, 900); }
    });
  });
});
