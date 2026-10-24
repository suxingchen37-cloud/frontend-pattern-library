// 用法：先 <script src="blocks/table-transpose-view.js"></script>，再调用 window.INITS['table-transpose-view'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-transpose-view'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const rows=[['字段','门口','走廊'],['时长','12 秒','18 秒'],['状态','待拍','完成']];let transposed=false;const draw=()=>{const values=transposed?rows[0].map((_,i)=>rows.map(row=>row[i])):rows;const table=document.createElement('table'),caption=document.createElement('caption');caption.textContent='同一份镜头数据';table.append(caption);values.forEach((row,i)=>{const tr=document.createElement('tr');row.forEach((text,j)=>{const cell=document.createElement(i===0||j===0?'th':'td');if(i===0||j===0)cell.scope=i===0?'col':'row';cell.textContent=text;tr.append(cell);});table.append(tr);});q('[data-result]').replaceChildren(table);q('[data-transpose]').setAttribute('aria-pressed',String(transposed));say(transposed?'每行一条记录':'每行一个字段');};q('[data-transpose]').onclick=()=>{transposed=!transposed;draw();};draw();})(root, q, qa, say);
});
