// 用法：先 <script src="blocks/table-visible-totals.js"></script>，再调用 window.INITS['table-visible-totals'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-visible-totals'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const draw=()=>{let count=0,total=0;qa('tbody tr').forEach(tr=>{tr.hidden=q('[data-status]').value!=='all'&&tr.cells[2].textContent!==q('[data-status]').value;if(!tr.hidden){count++;total+=Number(tr.cells[1].textContent);}});say('可见 '+count+' 条，时长合计 '+total+' 秒');};q('[data-status]').onchange=draw;draw();})(root, q, qa, say);
});
