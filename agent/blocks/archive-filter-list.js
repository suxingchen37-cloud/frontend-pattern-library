// 用法：先 <script src="blocks/archive-filter-list.js"></script>，再调用 window.INITS['archive-filter-list'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['archive-filter-list'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const items=[{name:'门口',archived:false},{name:'走廊',archived:false}];const draw=()=>{q('[data-list]').replaceChildren();for(const item of items){if(q('[data-view]').value!=='all'&&(q('[data-view]').value==='archived')!==item.archived)continue;const li=document.createElement('li'),button=document.createElement('button');li.append(document.createTextNode(item.name+' '));button.type='button';button.textContent=(item.archived?'恢复 ':'归档 ')+item.name;button.onclick=()=>{item.archived=!item.archived;draw();q('[data-view]').focus();say(item.name+(item.archived?'已归档':'已恢复'));};li.append(button);q('[data-list]').append(li);}if(!q('[data-list]').children.length)say('当前范围没有项目');};q('[data-view]').onchange=draw;draw();})(root, q, qa, say);
});
