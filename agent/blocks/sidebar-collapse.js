// 用法：先 <script src="blocks/sidebar-collapse.js"></script>，再调用 window.INITS['sidebar-collapse'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['sidebar-collapse'] = (root => root.querySelector('[data-sb]').onclick = () => root.querySelector('.d-sb').toggleAttribute('data-open'));
