// 用法：先 <script src="blocks/offline-write-queue.js"></script>，再调用 window.INITS['offline-write-queue'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['offline-write-queue'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let online=true,queued=[],delivered=0;const draw=()=>{q('[data-network]').textContent=online?'模拟离线':'恢复演示连接';q('[data-queue]').replaceChildren(...queued.map(text=>{const li=document.createElement('li');li.textContent='待发送：'+text;return li;}));say((online?'在线':'离线')+'；待发送 '+queued.length+'；演示送达 '+delivered);};q('[data-network]').onclick=()=>{online=!online;if(online){delivered+=queued.length;queued=[];}draw();};q('[data-form]').onsubmit=event=>{event.preventDefault();const text=q('[data-text]').value.trim();if(!text){say('备注不能为空');return;}if(online)delivered++;else queued.push(text);q('[data-text]').value='';draw();};draw();})(root, q, qa, say);
});
