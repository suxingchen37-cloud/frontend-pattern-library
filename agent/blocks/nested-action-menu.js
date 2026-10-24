// 用法：先 <script src="blocks/nested-action-menu.js"></script>，再调用 window.INITS['nested-action-menu'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['nested-action-menu'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{qa('[data-action]').forEach(button=>button.onclick=()=>{say('已选择：'+button.dataset.action+'（演示，不下载文件）');qa('details').forEach(item=>item.open=false);q('summary').focus();});})(root, q, qa, say);
});
