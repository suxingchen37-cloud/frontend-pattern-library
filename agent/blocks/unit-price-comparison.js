// 用法：先 <script src="blocks/unit-price-comparison.js"></script>，再调用 window.INITS['unit-price-comparison'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['unit-price-comparison'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-compare]').onclick=()=>{const inputs=qa('input'),values=inputs.map(el=>Number(el.value));if(inputs.some(el=>!el.value.trim())||values.some(n=>!Number.isFinite(n))||values[0]<0||values[2]<0||values[1]<=0||values[3]<=0){say('价格须非负，数量须大于零');return;}const one=values[0]/values[1],two=values[2]/values[3];if(!Number.isFinite(one)||!Number.isFinite(two)){say('结果超出可计算范围，请调整价格或数量');return;}say('A '+one.toFixed(2)+' / 单位；B '+two.toFixed(2)+' / 单位；'+(one===two?'单位成本相同':one<two?'A 较低':'B 较低'));};})(root, q, qa, say);
});
