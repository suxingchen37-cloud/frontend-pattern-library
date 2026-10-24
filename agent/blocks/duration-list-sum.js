// 用法：先 <script src="blocks/duration-list-sum.js"></script>，再调用 window.INITS['duration-list-sum'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['duration-list-sum'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-sum]').onclick=()=>{const lines=q('[data-input]').value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);if(!lines.length||lines.some(line=>!/^\d{1,5}:[0-5]\d$/.test(line))){say('每行须为 分:秒，秒数为 00–59');return;}const total=lines.reduce((sum,line)=>{const [m,s]=line.split(':').map(Number);return sum+m*60+s;},0);say('总计 '+Math.floor(total/3600)+':'+String(Math.floor(total/60)%60).padStart(2,'0')+':'+String(total%60).padStart(2,'0')+'（'+total+' 秒）');};})(root, q, qa, say);
});
