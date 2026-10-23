// 用法：先 <script src="blocks/segmented.js"></script>，再调用 window.INITS['segmented'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['segmented'] = (root => {
    const seg = root.querySelector('.d-seg'), pill = seg.querySelector('.d-segmented-pill'), btns = [...seg.querySelectorAll('button')];
    const move = i => { const b = btns[i], r = b.getBoundingClientRect(), pr = seg.getBoundingClientRect(); pill.style.left = (r.left - pr.left) + 'px'; pill.style.width = r.width + 'px'; btns.forEach((x, k) => x.style.color = k === i ? 'var(--ink)' : 'var(--muted)'); };
    btns.forEach((b, i) => b.onclick = () => move(i)); setTimeout(() => move(0), 30);
  });
