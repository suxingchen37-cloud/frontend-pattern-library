// 用法：先 <script src="blocks/notification-inbox-state.js"></script>，再调用 window.INITS['notification-inbox-state'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['notification-inbox-state'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const items=[{text:'样例素材已就绪',read:false},{text:'样例审阅待处理',read:false}];const draw=()=>{q('[data-list]').replaceChildren(...items.map(item=>{const li=document.createElement('li'),button=document.createElement('button');li.append(document.createTextNode(item.text+' · '+(item.read?'已读':'未读')+' '));button.type='button';button.textContent='标为已读：'+item.text;button.disabled=item.read;button.onclick=()=>{item.read=true;draw();q('[data-all]').focus();};li.append(button);return li;}));const count=items.filter(item=>!item.read).length;q('[data-all]').disabled=!count;say('未读 '+count+' 条');};q('[data-all]').onclick=()=>{items.forEach(item=>item.read=true);draw();};draw();})(root, q, qa, say);
});
