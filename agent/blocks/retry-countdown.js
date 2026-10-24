// 用法：先 <script src="blocks/retry-countdown.js"></script>，再调用 window.INITS['retry-countdown'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['retry-countdown'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let timer=0;const idle=()=>{clearInterval(timer);timer=0;q('[data-start]').disabled=false;q('[data-cancel]').disabled=true;};q('[data-start]').onclick=()=>{if(timer)return;let left=3;q('[data-start]').disabled=true;q('[data-cancel]').disabled=false;say(left+' 秒后模拟重试');timer=setInterval(()=>{if(!root.isConnected){idle();return;}left--;if(left<=0){idle();say('模拟重试完成');}else say(left+' 秒后模拟重试');},1000);};q('[data-cancel]').onclick=()=>{idle();say('等待已取消，不会继续重试');};})(root, q, qa, say);
});
