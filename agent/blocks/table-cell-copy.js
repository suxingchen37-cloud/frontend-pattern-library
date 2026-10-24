// 用法：先 <script src="blocks/table-cell-copy.js"></script>，再调用 window.INITS['table-cell-copy'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-cell-copy'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{qa('[data-copy]').forEach(button=>button.onclick=async()=>{try{await navigator.clipboard.writeText(button.dataset.copy);q('[data-fallback]').hidden=true;say('已复制 '+button.dataset.copy);}catch{q('[data-fallback]').hidden=false;q('[data-manual]').value=button.dataset.copy;q('[data-manual]').focus();q('[data-manual]').select();say('自动复制不可用，已选中编号');}});})(root, q, qa, say);
});
