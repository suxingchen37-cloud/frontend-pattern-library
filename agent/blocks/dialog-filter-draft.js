// 用法：先 <script src="blocks/dialog-filter-draft.js"></script>，再调用 window.INITS['dialog-filter-draft'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['dialog-filter-draft'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let applied='全部';const dialog=q('[data-dialog]');q('[data-open]').onclick=()=>{q('[data-draft]').value=applied;dialog.showModal();};q('[data-apply]').onclick=()=>{applied=q('[data-draft]').value;q('[data-applied]').textContent='当前筛选：'+applied;dialog.close();say('筛选已应用');};q('[data-cancel]').onclick=()=>dialog.close();dialog.onclose=()=>q('[data-open]').focus();})(root, q, qa, say);
});
