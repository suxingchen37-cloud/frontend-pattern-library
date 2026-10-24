// 用法：先 <script src="blocks/dialog-decision-result.js"></script>，再调用 window.INITS['dialog-decision-result'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['dialog-decision-result'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const dialog=q('[data-dialog]');q('[data-open]').onclick=()=>{dialog.returnValue='cancel';dialog.showModal();};[['keep','keep'],['copy','copy'],['cancel','cancel']].forEach(([key,value])=>q('[data-'+key+']').onclick=()=>dialog.close(value));dialog.oncancel=()=>dialog.returnValue='cancel';dialog.onclose=()=>{say({'keep':'结果：保留原文件','copy':'结果：另存副本','cancel':'结果：取消操作'}[dialog.returnValue]||'结果：取消操作');q('[data-open]').focus();};})(root, q, qa, say);
});
