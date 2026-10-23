// 用法：先 <script src="blocks/multiselect.js"></script>，再调用 window.INITS['multiselect'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['multiselect'] = (root => {
    const box = root.querySelector('.d-ms'), bar = box.querySelector('.d-multiselect-bar'), n = bar.querySelector('b');
    box.querySelectorAll('input').forEach(i => i.onchange = () => { const c = [...box.querySelectorAll('input')].filter(x => x.checked).length; bar.hidden = !c; n.textContent = c; });
  });
