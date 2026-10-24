// 用法：先 <script src="blocks/scoped-shortcut-manager.js"></script>，再调用 window.INITS['scoped-shortcut-manager'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['scoped-shortcut-manager'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const items=['门口','走廊','窗边'];let index=0;const draw=()=>{q('[data-current]').textContent='当前：'+items[index];q('[data-prev]').disabled=index===0;q('[data-next]').disabled=index===items.length-1;};const move=step=>{index=Math.max(0,Math.min(items.length-1,index+step));draw();say('当前第 '+(index+1)+' 项');};q('[data-prev]').onclick=()=>move(-1);q('[data-next]').onclick=()=>move(1);root.addEventListener('keydown',event=>{if(!q('[data-enabled]').checked||!event.altKey||event.ctrlKey||event.metaKey||event.shiftKey||event.target.matches('input,textarea,select,[contenteditable]'))return;const key=event.key.toLowerCase();if(key==='j'||key==='k'){event.preventDefault();move(key==='j'?1:-1);}});draw();})(root, q, qa, say);
});
