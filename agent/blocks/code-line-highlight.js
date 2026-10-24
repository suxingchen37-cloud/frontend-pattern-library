// 用法：先 <script src="blocks/code-line-highlight.js"></script>，再调用 window.INITS['code-line-highlight'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['code-line-highlight'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{qa('[data-line]').forEach(button=>button.onclick=()=>{qa('[data-line]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));say('当前定位第 '+button.dataset.line+' 行：'+button.textContent);});})(root, q, qa, say);
});
