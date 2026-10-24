// 用法：先 <script src="blocks/connection-state-control.js"></script>，再调用 window.INITS['connection-state-control'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['connection-state-control'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let state='online';const draw=()=>{q('[data-state]').textContent='演示连接：'+({online:'已连接',offline:'已断开',connecting:'连接中'}[state]);q('[data-disconnect]').disabled=state!=='online';q('[data-reconnect]').disabled=state!=='offline';};q('[data-disconnect]').onclick=()=>{state='offline';draw();say('本地演示已断开');};q('[data-reconnect]').onclick=()=>{if(state!=='offline')return;const fail=q('[data-fail]').checked;state='connecting';draw();setTimeout(()=>{if(!root.isConnected)return;state=fail?'offline':'online';draw();say(fail?'模拟连接失败，可再次重试':'模拟连接已恢复');},450);};draw();})(root, q, qa, say);
});
