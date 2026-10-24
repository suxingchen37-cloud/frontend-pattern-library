// 用法：先 <script src="blocks/editable-path-breadcrumb.js"></script>，再调用 window.INITS['editable-path-breadcrumb'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['editable-path-breadcrumb'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let parts=[];const draw=()=>{q('[data-path]').replaceChildren();const home=document.createElement('button');home.type='button';home.textContent='根目录';home.onclick=()=>{parts=[];draw();};q('[data-path]').append(home);parts.forEach((part,i)=>{q('[data-path]').append(document.createTextNode(' / '));const button=document.createElement('button');button.type='button';button.textContent=part;if(i===parts.length-1)button.setAttribute('aria-current','location');button.onclick=()=>{parts=parts.slice(0,i+1);draw();};q('[data-path]').append(button);});q('[data-input]').value=parts.join('/');say('当前：/'+parts.join('/'));};q('[data-go]').onclick=()=>{parts=q('[data-input]').value.split('/').map(s=>s.trim()).filter(Boolean).slice(0,12);draw();};q('[data-go]').click();})(root, q, qa, say);
});
