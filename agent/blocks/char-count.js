// 用法：先 <script src="blocks/char-count.js"></script>，再调用 window.INITS['char-count'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['char-count'] = (root => {
    const ta = root.querySelector('[data-cc3]'), n = root.querySelector('[data-ccn3]'), warn = root.querySelector('[data-ccwarn3]');
    const sync = () => { n.textContent = ta.value.length; warn.hidden = ta.value.length <= 50; };
    ta.addEventListener('input', sync); sync();
  });
