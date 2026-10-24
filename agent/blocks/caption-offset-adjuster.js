// 用法：先 <script src="blocks/caption-offset-adjuster.js"></script>，再调用 window.INITS['caption-offset-adjuster'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['caption-offset-adjuster'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-offset]').step='.1';q('[data-apply]').onclick=()=>{const lines=q('[data-input]').value.split(/\r?\n/).filter(line=>line.trim()),offset=Number(q('[data-offset]').value),items=lines.map(line=>{const split=line.indexOf('|');return {time:split<0?NaN:Number(line.slice(0,split)),raw:split<0?'':line.slice(0,split).trim(),text:line.slice(split+1)};});if(!q('[data-offset]').value.trim()||!Number.isFinite(offset)||!items.length||items.some(item=>!item.raw||!Number.isFinite(item.time)||item.time<0||item.time+offset<0)){q('[data-result]').replaceChildren();say('时间或偏移无效；偏移后不能早于零');return;}q('[data-result]').replaceChildren(...items.map(item=>{const li=document.createElement('li');li.textContent=(item.time+offset).toFixed(3)+' 秒 | '+item.text;return li;}));say('已预览 '+items.length+' 条字幕；原始时间保留');};})(root, q, qa, say);
});
