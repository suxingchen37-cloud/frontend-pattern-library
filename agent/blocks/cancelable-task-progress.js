// 用法：先 <script src="blocks/cancelable-task-progress.js"></script>，再调用 window.INITS['cancelable-task-progress'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['cancelable-task-progress'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let state='idle',value=0,timer=0;const stop=()=>{clearInterval(timer);timer=0;};const draw=()=>{q('[data-progress]').value=value;q('[data-start]').disabled=state==='running'||state==='paused';q('[data-pause]').disabled=!['running','paused'].includes(state);q('[data-pause]').textContent=state==='paused'?'继续':'暂停';q('[data-cancel]').disabled=!['running','paused'].includes(state);say(({idle:'尚未开始',running:'进行中',paused:'已暂停',canceled:'已取消',done:'已完成'}[state])+' · '+value+'%');};const run=()=>{stop();state='running';timer=setInterval(()=>{if(!root.isConnected){stop();return;}value=Math.min(100,value+5);if(value===100){state='done';stop();}draw();},100);draw();};q('[data-start]').onclick=()=>{value=0;run();};q('[data-pause]').onclick=()=>{if(state==='running'){stop();state='paused';draw();}else if(state==='paused')run();};q('[data-cancel]').onclick=()=>{stop();state='canceled';value=0;draw();};draw();})(root, q, qa, say);
});
