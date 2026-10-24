// 用法：先 <script src="blocks/weighted-score-calculator.js"></script>，再调用 window.INITS['weighted-score-calculator'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['weighted-score-calculator'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-calculate]').onclick=()=>{const inputs=qa('input'),v=inputs.map(el=>Number(el.value));if(inputs.some(el=>!el.value.trim())||v.some(n=>!Number.isFinite(n)||n<0)||v[0]>100||v[2]>100||v[1]+v[3]===0){say('分数应为 0–100，权重非负且合计大于零');return;}const numerator=v[0]*v[1]+v[2]*v[3],weight=v[1]+v[3];if(!Number.isFinite(numerator)||!Number.isFinite(weight)){say('权重超出可计算范围，请缩小权重数值');return;}say('加权分 '+(numerator/weight).toFixed(2)+'；总权重 '+weight);};})(root, q, qa, say);
});
