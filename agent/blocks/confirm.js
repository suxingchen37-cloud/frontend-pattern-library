// 用法：先 <script src="blocks/confirm.js"></script>，再调用 window.INITS['confirm'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['confirm'] = (root => {
    const inp = root.querySelector('.d-cf input'), btn = root.querySelector('.d-cf .d-btn');
    inp.oninput = () => { btn.disabled = inp.value !== 'DELETE'; };
  });
