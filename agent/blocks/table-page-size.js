// 用法：先 <script src="blocks/table-page-size.js"></script>，再调用 window.INITS['table-page-size'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-page-size'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const records=qa('tbody tr');let page=0;const draw=()=>{const size=Number(q('[data-size]').value),pages=Math.ceil(records.length/size);page=Math.min(page,pages-1);records.forEach((row,index)=>row.hidden=index<page*size||index>=(page+1)*size);q('[data-prev]').disabled=page===0;q('[data-next]').disabled=page===pages-1;q('[data-page]').textContent=(page+1)+' / '+pages;say('共 '+records.length+' 条');};q('[data-prev]').onclick=()=>{page--;draw();};q('[data-next]').onclick=()=>{page++;draw();};q('[data-size]').onchange=()=>{page=0;draw();};draw();})(root, q, qa, say);
});
