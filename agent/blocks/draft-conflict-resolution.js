// 用法：先 <script src="blocks/draft-conflict-resolution.js"></script>，再调用 window.INITS['draft-conflict-resolution'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['draft-conflict-resolution'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{qa('[data-keep]').forEach(button=>button.onclick=()=>{const local=button.dataset.keep==='local';q('[data-result]').textContent='已选择：'+q(local?'[data-local]':'[data-remote]').value;qa('[data-keep]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));say(local?'本地草稿已被选中，未发送服务器':'远端版本已被选中，未发送服务器');});})(root, q, qa, say);
});
