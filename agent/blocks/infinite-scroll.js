// 用法：先 <script src="blocks/infinite-scroll.js"></script>，再调用 window.INITS['infinite-scroll'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['infinite-scroll'] = (root => {
    const box = root.querySelector('.d-inf'), items = box.querySelector('.d-infinite-scroll-items'), sent = box.querySelector('.d-infinite-scroll-sentinel');
    let n = items.children.length, busy = false;
    box.addEventListener('scroll', () => {
      if (busy || box.scrollTop + box.clientHeight < box.scrollHeight - 30) return;
      busy = true; sent.textContent = '正在加载…';
      setTimeout(() => { for (let k = 0; k < 3; k++) { n++; const d = document.createElement('div'); d.textContent = '第 ' + n + ' 条'; items.appendChild(d); } sent.textContent = '滚到底自动加载'; busy = false; }, 700);
    });
  });
