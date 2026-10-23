// 用法：先 <script src="blocks/file-tree.js"></script>，再调用 window.INITS['file-tree'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['file-tree'] = (root => root.querySelectorAll('.d-tree .d-file-tree-node b').forEach(b => b.onclick = () => b.parentElement.toggleAttribute('data-open')));
