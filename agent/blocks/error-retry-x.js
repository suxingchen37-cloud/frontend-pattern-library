// 用法：先 <script src="blocks/error-retry-x.js"></script>，再调用 window.INITS['error-retry-x'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['error-retry-x'] = (root => root.querySelector('[data-retry3]').onclick = (e) => {
    const box = root.querySelector('[data-erbox]'), btn = e.target;
    btn.disabled = true; btn.textContent = '重试中…';
    root.querySelector('p').textContent = '正在重新连接网关…';
    setTimeout(() => {
      box.classList.add('ok');
      root.querySelector('b').textContent = '已恢复';
      root.querySelector('p').textContent = '数据回来了，任务继续。';
      btn.textContent = '完成'; btn.disabled = true;
    }, 900);
  });
