// 用法：先 <script src="blocks/toast-stack.js"></script>，再调用 window.INITS['toast-stack'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['toast-stack'] = (root => root.querySelector('[data-toast]')?.addEventListener('click', () => {
    const box = root.querySelector('.d-toasts'); const t = document.createElement('div'); t.className = 'd-toast';
    t.textContent = '已保存 · ' + new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    box.appendChild(t); setTimeout(() => t.remove(), 2600);
  }));
