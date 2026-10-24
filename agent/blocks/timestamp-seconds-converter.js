// 用法：先 <script src="blocks/timestamp-seconds-converter.js"></script>，再调用 window.INITS['timestamp-seconds-converter'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['timestamp-seconds-converter'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-seconds]').step='.001';q('[data-to-seconds]').onclick=()=>{const match=/^(\d{1,5}):([0-5]\d):([0-5]\d(?:\.\d{1,3})?)$/.exec(q('[data-stamp]').value.trim());if(!match){say('时间戳须为 时:分:秒，可带三位小数');return;}q('[data-seconds]').value=String(Number(match[1])*3600+Number(match[2])*60+Number(match[3]));say('时间戳已换算为秒');};q('[data-to-stamp]').onclick=()=>{const n=Number(q('[data-seconds]').value);if(!q('[data-seconds]').value.trim()||!Number.isFinite(n)||n<0||n>359999999){say('请输入 0–359999999 之间的秒数');return;}const ms=Math.round(n*1000),whole=Math.floor(ms/1000);q('[data-stamp]').value=String(Math.floor(whole/3600)).padStart(2,'0')+':'+String(Math.floor(whole/60)%60).padStart(2,'0')+':'+String(whole%60).padStart(2,'0')+'.'+String(ms%1000).padStart(3,'0');say('秒数已换算为时间戳');};})(root, q, qa, say);
});
