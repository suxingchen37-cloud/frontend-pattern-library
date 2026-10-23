// 用法：先 <script src="blocks/toc-follow.js"></script>，再调用 window.INITS['toc-follow'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['toc-follow'] = (root => {
    const box = root.querySelector('[data-tfscroll]');
    const btns = [...root.querySelectorAll('[data-goto3]')];
    const secs = [...root.querySelectorAll('[data-sec3]')];
    const sync = () => {
      let idx = 0;
      secs.forEach((s, i) => { if (s.offsetTop - box.scrollTop <= 12) idx = i; });
      btns.forEach((b, i) => b.classList.toggle('d-toc-follow-on', i === idx));
    };
    btns.forEach((b) => b.onclick = () => { secs[Number(b.dataset.goto3)].scrollIntoView({ block: 'start', behavior: 'smooth' }); });
    box.addEventListener('scroll', sync); sync();
  });
