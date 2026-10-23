// 用法：先 <script src="blocks/page-403.js"></script>，再调用 window.INITS['page-403'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['page-403'] = (root => root.querySelector('[data-req3]').onclick = (e) => {
    e.target.disabled = true; e.target.textContent = '申请已发出';
    root.querySelector('[data-reqmsg3]').textContent = '等管理员批准后，入口会自动出现。';
  });
