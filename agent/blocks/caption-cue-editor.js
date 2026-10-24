// 用法：先 <script src="blocks/caption-cue-editor.js"></script>，再调用 window.INITS['caption-cue-editor'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['caption-cue-editor'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let items=[],serial=0;qa('input[type=number]').forEach(el=>el.step='.1');const draw=()=>{q('[data-list]').replaceChildren(...items.map(item=>{const li=document.createElement('li'),button=document.createElement('button');li.append(document.createTextNode(item.start+'–'+item.end+' 秒：'+item.text+' '));button.type='button';button.textContent='移除字幕 '+item.id;button.onclick=()=>{items=items.filter(row=>row!==item);draw();q('[data-add]').focus();say('字幕已移除；剩余 '+items.length+' 条');};li.append(button);return li;}));};q('[data-add]').onclick=()=>{const start=Number(q('[data-start]').value),end=Number(q('[data-end]').value),text=q('[data-text]').value.trim();if(!q('[data-start]').value.trim()||!q('[data-end]').value.trim()||!Number.isFinite(start)||!Number.isFinite(end)||start<0||end<=start||!text){say('请填写字幕，结束时间须大于非负开始时间');return;}if(items.some(item=>start<item.end&&end>item.start)){say('时间与已有字幕重叠，请调整');return;}items.push({start,end,text,id:++serial});items.sort((a,b)=>a.start-b.start);draw();say('已添加；当前 '+items.length+' 条字幕');};})(root, q, qa, say);
});
