// 用法：先 <script src="blocks/textarea-auto-grow.js"></script>，再调用 window.INITS['textarea-auto-grow'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['textarea-auto-grow'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const field=q('[data-text]');const resize=()=>{field.style.height='auto';field.style.height=Math.min(220,field.scrollHeight+2)+'px';};field.oninput=resize;resize();})(root, q, qa, say);
});
