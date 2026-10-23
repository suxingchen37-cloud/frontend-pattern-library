// 用法：先 <script src="blocks/tabs-pill.js"></script>，再调用 window.INITS['tabs-pill'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['tabs-pill'] = (root => {
    const box = root.querySelector('.d-tabs'), pill = box.querySelector('.d-tabs-pill-pill'), btns = [...box.querySelectorAll('button')];
    const move = i => { const b = btns[i], r = b.getBoundingClientRect(), pr = box.getBoundingClientRect(); pill.style.left = (r.left - pr.left) + 'px'; pill.style.width = r.width + 'px'; btns.forEach((x, k) => x.classList.toggle('on', k === i)); };
    btns.forEach((b, i) => b.onclick = () => move(i)); setTimeout(() => move(0), 30);
  });
