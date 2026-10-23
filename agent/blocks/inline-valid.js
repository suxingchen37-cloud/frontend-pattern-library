// 用法：先 <script src="blocks/inline-valid.js"></script>，再调用 window.INITS['inline-valid'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['inline-valid'] = (root => {
    const inp = root.querySelector('.d-iv input'), msg = root.querySelector('[data-msg]');
    inp.oninput = () => { const bad = inp.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inp.value); inp.classList.toggle('bad', !!bad); msg.textContent = bad ? '缺一个正确的邮箱格式' : ''; };
  });
