// 用法：先 <script src="blocks/autosave-x.js"></script>，再调用 window.INITS['autosave-x'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['autosave-x'] = (root => {
    const ta = root.querySelector('[data-as3]'), status = root.querySelector('[data-asstatus]');
    let timer = null;
    ta.addEventListener('input', () => {
      status.textContent = '未保存';
      clearTimeout(timer);
      timer = setTimeout(() => {
        status.textContent = '保存中…';
        timer = setTimeout(() => {
          if (!root.isConnected) return;
          const d = new Date();
          status.textContent = '已保存 · ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
        }, 650);
      }, 500);
    });
  });
