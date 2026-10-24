// 用法：先 <script src="blocks/navigation-history.js"></script>，再调用 window.INITS['navigation-history'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['navigation-history'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let history=['概览'],cursor=0;const draw=()=>{q('[data-current]').textContent=history[cursor];q('[data-back]').disabled=cursor===0;q('[data-forward]').disabled=cursor===history.length-1;say('访问位置 '+(cursor+1)+' / '+history.length);};qa('[data-go]').forEach(button=>button.onclick=()=>{if(history[cursor]===button.dataset.go)return;history=history.slice(0,cursor+1);history.push(button.dataset.go);cursor++;draw();});q('[data-back]').onclick=()=>{cursor--;draw();};q('[data-forward]').onclick=()=>{cursor++;draw();};draw();})(root, q, qa, say);
});
