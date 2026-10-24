// 用法：先 <script src="blocks/recent-destinations-list.js"></script>，再调用 window.INITS['recent-destinations-list'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['recent-destinations-list'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let recent=[];const visit=name=>{recent=[name,...recent.filter(item=>item!==name)].slice(0,3);q('[data-current]').textContent='当前：'+name;draw();};const draw=()=>{q('[data-result]').replaceChildren(...recent.map(name=>{const li=document.createElement('li'),button=document.createElement('button');button.type='button';button.textContent='重新访问 '+name;button.onclick=()=>visit(name);li.append(button);return li;}));q('[data-clear]').disabled=!recent.length;say('最近访问 '+recent.length+' 项');};[['door','门口'],['hall','走廊'],['window','窗边'],['yard','庭院']].forEach(([key,name])=>q('[data-'+key+']').onclick=()=>visit(name));q('[data-clear]').onclick=()=>{recent=[];draw();};draw();})(root, q, qa, say);
});
