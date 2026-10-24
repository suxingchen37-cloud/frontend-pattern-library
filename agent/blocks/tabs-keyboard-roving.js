// 用法：先 <script src="blocks/tabs-keyboard-roving.js"></script>，再调用 window.INITS['tabs-keyboard-roving'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['tabs-keyboard-roving'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const tabs=qa('[role=tab]'),panels=qa('[role=tabpanel]'),prefix='tabs-'+Math.random().toString(36).slice(2);const choose=(index,focus=false)=>{tabs.forEach((tab,i)=>{tab.id=prefix+'-'+i;tab.tabIndex=i===index?0:-1;tab.setAttribute('aria-selected',String(i===index));tab.setAttribute('aria-controls',prefix+'-panel-'+i);panels[i].id=prefix+'-panel-'+i;panels[i].setAttribute('aria-labelledby',tab.id);panels[i].tabIndex=0;panels[i].hidden=i!==index;});if(focus)tabs[index].focus();};tabs.forEach((tab,index)=>{tab.onclick=()=>choose(index);tab.onkeydown=event=>{let next=index;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();choose(next,true);};});choose(0);})(root, q, qa, say);
});
