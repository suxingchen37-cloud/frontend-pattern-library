// 用法：先 <script src="blocks/morph-button.js"></script>，再调用 window.INITS['morph-button'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['morph-button'] = (root => {
    const box = root.querySelector('.d-morph'), inp = box.querySelector('.d-morph-button-morph-input');
    box.querySelector('.d-morph-button-morph-btn').onclick = () => { box.setAttribute('data-open', ''); inp.focus(); };
    inp.onkeydown = e => { if (e.key === 'Escape' || e.key === 'Enter') box.removeAttribute('data-open'); };
  });
