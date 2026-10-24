// 用法：先 <script src="blocks/repeatable-contact-fields.js"></script>，再调用 window.INITS['repeatable-contact-fields'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['repeatable-contact-fields'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let serial=0;const append=()=>{const line=document.createElement('div');line.className='d-row';const label=document.createElement('label'),input=document.createElement('input'),remove=document.createElement('button');label.textContent='联系人 '+(++serial);input.type='text';label.append(input);remove.type='button';remove.textContent='删除联系人 '+serial;remove.onclick=()=>{const next=line.nextElementSibling||line.previousElementSibling;line.remove();sync();(next?.querySelector('input')||q('[data-add]')).focus();say('联系人已删除');};line.append(label,remove);q('[data-list]').append(line);sync();return input;};const sync=()=>qa('[data-list] button').forEach(el=>el.disabled=qa('[data-list] input').length===1);q('[data-add]').onclick=()=>{append().focus();say('已新增联系人');};append();})(root, q, qa, say);
});
