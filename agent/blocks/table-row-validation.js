// 用法：先 <script src="blocks/table-row-validation.js"></script>，再调用 window.INITS['table-row-validation'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-row-validation'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-check]').onclick=()=>{const seen=new Set(),lines=q('[data-rows]').value.split(/\r?\n/).filter(line=>line.trim());let errors=0;q('[data-result]').replaceChildren(...lines.map((line,i)=>{const fields=line.split(',').map(s=>s.trim()),id=fields[0],duration=Number(fields[1]),reasons=[];if(fields.length!==2)reasons.push('需要两列');if(!id)reasons.push('缺少编号');if(seen.has(id))reasons.push('编号重复');seen.add(id);if(!fields[1]||!Number.isFinite(duration)||duration<1||duration>120)reasons.push('时长须为 1–120 秒');if(reasons.length)errors++;const li=document.createElement('li');li.textContent='第 '+(i+1)+' 行：'+(reasons.join('；')||'通过');return li;}));say(lines.length?'检查 '+lines.length+' 行，'+errors+' 行有问题':'没有可检查的记录');};})(root, q, qa, say);
});
