// 用法：先 <script src="blocks/nested-dialog-focus-return.js"></script>，再调用 window.INITS['nested-dialog-focus-return'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['nested-dialog-focus-return'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const parent=q('[data-parent]'),child=q('[data-child]');q('[data-open]').onclick=()=>parent.showModal();q('[data-child-open]').onclick=()=>child.showModal();q('[data-child-close]').onclick=()=>child.close();q('[data-parent-close]').onclick=()=>parent.close();child.onclose=()=>q('[data-child-open]').focus();parent.onclose=()=>{q('[data-open]').focus();say('设置对话框已关闭');};})(root, q, qa, say);
});
