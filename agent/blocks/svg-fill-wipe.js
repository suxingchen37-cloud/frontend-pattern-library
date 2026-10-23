// 用法：先 <script src="blocks/svg-fill-wipe.js"></script>，再调用 window.INITS['svg-fill-wipe'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['svg-fill-wipe'] = (root => {
    const box = root.querySelector('.d-fw'), btn = box.querySelector('.d-fw-btn');
    const run = () => { box.classList.remove('is-wipe'); void box.offsetWidth; box.classList.add('is-wipe'); };
    btn.onclick = run;
    run();
  });
