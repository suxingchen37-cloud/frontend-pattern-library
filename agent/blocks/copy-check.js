// 用法：先 <script src="blocks/copy-check.js"></script>，再调用 window.INITS['copy-check'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['copy-check'] = (root => root.querySelector('.d-copy')?.addEventListener('click', async e => {
    const b = e.currentTarget; await copy('示例文本');
    b.classList.add('done'); b.querySelector('.d-ico').textContent = '✓'; b.querySelector('.d-lbl').textContent = '已复制';
    setTimeout(() => { b.classList.remove('done'); b.querySelector('.d-ico').textContent = '⧉'; b.querySelector('.d-lbl').textContent = '复制'; }, 1600);
  }));
