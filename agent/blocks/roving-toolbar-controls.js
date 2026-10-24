// 用法：先 <script src="blocks/roving-toolbar-controls.js"></script>，再调用 window.INITS['roving-toolbar-controls'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['roving-toolbar-controls'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const buttons=qa('[data-toolbar] button');let active=buttons[0];const sync=()=>{q('[data-center]').disabled=q('[data-disable]').checked;if(active.disabled)active=buttons[0];buttons.forEach(el=>el.tabIndex=el===active?0:-1);};buttons.forEach(button=>{button.onfocus=()=>{active=button;sync();};button.onclick=()=>{buttons.forEach(el=>el.setAttribute('aria-pressed',String(el===button)));say('已选择'+button.textContent);};});q('[data-disable]').onchange=sync;q('[data-toolbar]').onkeydown=event=>{const enabled=buttons.filter(el=>!el.disabled),i=enabled.indexOf(document.activeElement);let next;if(event.key==='ArrowRight')next=enabled[(i+1)%enabled.length];if(event.key==='ArrowLeft')next=enabled[(i-1+enabled.length)%enabled.length];if(event.key==='Home')next=enabled[0];if(event.key==='End')next=enabled.at(-1);if(next){event.preventDefault();active=next;sync();next.focus();}};sync();})(root, q, qa, say);
});
