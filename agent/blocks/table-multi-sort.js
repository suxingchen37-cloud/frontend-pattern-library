// 用法：先 <script src="blocks/table-multi-sort.js"></script>，再调用 window.INITS['table-multi-sort'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-multi-sort'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const original=qa('tbody tr');const compare=(a,b,index)=>index===2?Number(a.children[index].textContent)-Number(b.children[index].textContent):a.children[index].textContent.localeCompare(b.children[index].textContent,'zh-CN');const sort=()=>{const first=Number(q('[data-primary]').value),second=Number(q('[data-secondary]').value);q('tbody').replaceChildren(...original.slice().sort((a,b)=>compare(a,b,first)||compare(a,b,second)||original.indexOf(a)-original.indexOf(b)));say('已按所选关键字升序排列');};q('[data-primary]').onchange=sort;q('[data-secondary]').onchange=sort;sort();})(root, q, qa, say);
});
