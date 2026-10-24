// 用法：先 <script src="blocks/table-global-search.js"></script>，再调用 window.INITS['table-global-search'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-global-search'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const filter=()=>{const needle=q('[data-search]').value.trim().toLocaleLowerCase();let count=0;qa('tbody tr').forEach(row=>{row.hidden=!row.textContent.toLocaleLowerCase().includes(needle);if(!row.hidden)count++;});say(count?count+' 条匹配':'没有匹配项，请修改关键词');};q('[data-search]').oninput=filter;filter();})(root, q, qa, say);
});
