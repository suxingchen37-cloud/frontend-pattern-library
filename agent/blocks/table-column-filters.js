// 用法：先 <script src="blocks/table-column-filters.js"></script>，再调用 window.INITS['table-column-filters'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-column-filters'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const apply=()=>{let count=0;qa('tbody tr').forEach(row=>{const match=row.cells[0].textContent.includes(q('[data-name]').value)&&(!q('[data-status]').value||row.cells[1].textContent===q('[data-status]').value);row.hidden=!match;if(match)count++;});say(count+' 条匹配');};q('[data-name]').oninput=apply;q('[data-status]').onchange=apply;q('[data-reset]').onclick=()=>{q('[data-name]').value='';q('[data-status]').value='';apply();};apply();})(root, q, qa, say);
});
