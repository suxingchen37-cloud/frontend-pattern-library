// 用法：先 <script src="blocks/undo-redo-history.js"></script>，再调用 window.INITS['undo-redo-history'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['undo-redo-history'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let states=[[]],cursor=0,next=1;const draw=()=>{q('[data-list]').replaceChildren(...states[cursor].map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));q('[data-undo]').disabled=cursor===0;q('[data-redo]').disabled=cursor===states.length-1;say('当前 '+states[cursor].length+' 个镜头');};q('[data-add]').onclick=()=>{const value=states[cursor].concat('样例镜头 '+next++);states=states.slice(0,cursor+1).concat([value]);cursor++;draw();};q('[data-undo]').onclick=()=>{cursor--;draw();};q('[data-redo]').onclick=()=>{cursor++;draw();};draw();})(root, q, qa, say);
});
