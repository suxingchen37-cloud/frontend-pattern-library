// 用法：先 <script src="blocks/image-viewer.js"></script>，再调用 window.INITS['image-viewer'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['image-viewer'] = (root => {
    const box = root.querySelector('.d-image-viewer-iv-box'), img = box.querySelector('.d-image-viewer-iv-img b'), n = box.querySelector('[data-ivn]');
    let cur = 1;
    const show = i => { cur = (i + 3 - 1) % 3 + 1; img.textContent = cur; n.textContent = cur + ' / 3'; box.hidden = false; };
    root.querySelectorAll('[data-iv]').forEach(b => b.onclick = () => show(+b.dataset.iv));
    box.querySelector('[data-ivprev]').onclick = () => show(cur - 1);
    box.querySelector('[data-ivnext]').onclick = () => show(cur + 1);
    box.querySelector('[data-ivclose]').onclick = () => box.hidden = true;
  });
