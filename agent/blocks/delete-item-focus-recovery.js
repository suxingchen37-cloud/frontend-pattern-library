// 用法：先 <script src="blocks/delete-item-focus-recovery.js"></script>，再调用 window.INITS['delete-item-focus-recovery'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['delete-item-focus-recovery'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let serial=2,items=[{id:1,name:'门口'},{id:2,name:'走廊'}];const draw=()=>{q('[data-list]').replaceChildren(...items.map((item,i)=>{const li=document.createElement('li'),button=document.createElement('button');li.append(document.createTextNode(item.name+' '));button.type='button';button.textContent='移除 '+item.name;button.onclick=()=>{items.splice(i,1);draw();const buttons=qa('[data-list] button');(buttons[Math.min(i,buttons.length-1)]||q('[data-add]')).focus();say('已移除 '+item.name+'；剩余 '+items.length+' 项');};li.append(button);return li;}));};q('[data-add]').onclick=()=>{items.push({id:++serial,name:'演示项目 '+serial});draw();qa('[data-list] button').at(-1).focus();say('已添加演示项目');};draw();})(root, q, qa, say);
});
