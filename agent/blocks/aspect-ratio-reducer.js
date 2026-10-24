// 用法：先 <script src="blocks/aspect-ratio-reducer.js"></script>，再调用 window.INITS['aspect-ratio-reducer'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['aspect-ratio-reducer'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-calculate]').onclick=()=>{const inputs=qa('input'),v=inputs.map(el=>Number(el.value));if(inputs.some(el=>!el.value.trim())||v.some(n=>!Number.isSafeInteger(n)||n<=0||n>1000000)){say('请输入不超过 1000000 的正整数');return;}let x=v[0],y=v[1];while(y){[x,y]=[y,x%y];}say('比例 '+(v[0]/x)+':'+(v[1]/x)+'；目标高度 '+Number((v[2]*v[1]/v[0]).toFixed(3)));};})(root, q, qa, say);
});
