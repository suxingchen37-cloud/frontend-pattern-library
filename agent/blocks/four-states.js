// 用法：先 <script src="blocks/four-states.js"></script>，再调用 window.INITS['four-states'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['four-states'] = (root => {
    const box = root.querySelector('.d-four .d-four-states-box');
    const map = { empty: '还没有数据', loading: '加载中…', error: '出错了 · 重试', success: '完成' };
    root.querySelectorAll('[data-st4]').forEach(b => b.onclick = () => { box.dataset.st = b.dataset.st4; box.textContent = map[b.dataset.st4]; box.style.animation = 'none'; void box.offsetWidth; box.style.animation = ''; });
  });
