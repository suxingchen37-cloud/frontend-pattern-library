// 用法：先 <script src="blocks/palette.js"></script>，再调用 window.INITS['palette'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['palette'] = (root => {
    const btn = root.querySelector('[data-pal]'), pal = root.querySelector('.d-pal'), inp = pal.querySelector('input'), list = pal.querySelector('.d-palette-list');
    const items = ['新建项目', '导出资源', '打开设置', '切换主题', '搜索页面'];
    const render = () => { list.innerHTML = items.filter(x => !inp.value || x.includes(inp.value)).map((x, i) => `<span class="${i === 0 ? 'sel' : ''}">${x}</span>`).join(''); };
    btn.onclick = () => { pal.hidden = !pal.hidden; if (!pal.hidden) { inp.value = ''; render(); inp.focus(); } };
    inp.oninput = render;
    inp.onkeydown = e => { if (e.key === 'Escape') pal.hidden = true; };
  });
