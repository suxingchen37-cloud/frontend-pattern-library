// 用法：先 <script src="blocks/table-column-toggle.js"></script>，再调用 window.INITS['table-column-toggle'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-column-toggle'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{qa('[data-column]').forEach(box=>box.onchange=()=>{qa('tr').forEach(row=>{row.children[Number(box.dataset.column)].hidden=!box.checked;});say('已显示 '+(1+qa('[data-column]:checked').length)+' 列');});})(root, q, qa, say);
});
