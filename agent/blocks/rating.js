// 用法：先 <script src="blocks/rating.js"></script>，再调用 window.INITS['rating'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['rating'] = (root => {
    const btns = [...root.querySelectorAll('.d-rate button')], out = root.querySelector('[data-score]');
    const paint = n => btns.forEach((b, i) => b.classList.toggle('on', i < n));
    btns.forEach((b, i) => { b.onmouseenter = () => paint(i + 1); b.onmouseleave = () => paint(+root.dataset.v || 0); b.onclick = () => { root.dataset.v = i + 1; paint(i + 1); out.textContent = (i + 1) + ' 星'; }; });
  });
