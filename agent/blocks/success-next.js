// 用法：先 <script src="blocks/success-next.js"></script>，再调用 window.INITS['success-next'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['success-next'] = (root => {
    const msg = root.querySelector('[data-nextmsg3]');
    root.querySelectorAll('[data-next3]').forEach((b) => b.onclick = () => { msg.textContent = '演示：这里会打开「' + b.textContent + '」'; });
  });
