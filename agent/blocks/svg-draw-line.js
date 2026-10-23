// 用法：先 <script src="blocks/svg-draw-line.js"></script>，再调用 window.INITS['svg-draw-line'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['svg-draw-line'] = (root => {
    const box = root.querySelector('.d-dl'), btn = box.querySelector('.d-dl-btn');
    const run = () => { box.classList.remove('is-run'); void box.offsetWidth; box.classList.add('is-run'); };
    btn.onclick = run;
    run();
  });
