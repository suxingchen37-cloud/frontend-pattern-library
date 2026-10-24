// 用法：先 <script src="blocks/numeric-series-summary.js"></script>，再调用 window.INITS['numeric-series-summary'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['numeric-series-summary'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-calculate]').onclick=()=>{const parts=q('[data-input]').value.split(/[,，\s]+/).filter(Boolean),values=parts.map(Number);if(!values.length||values.some(n=>!Number.isFinite(n))){q('[data-result]').textContent='';say('请输入至少一个有限数字');return;}const sorted=[...values].sort((a,b)=>a-b),sum=values.reduce((a,b)=>a+b,0),middle=Math.floor(values.length/2),median=values.length%2?sorted[middle]:(sorted[middle-1]+sorted[middle])/2;if(!Number.isFinite(sum)||!Number.isFinite(median)){q('[data-result]').textContent='';say('数值超出可计算范围，请缩小输入数值');return;}q('[data-result]').textContent='数量 '+values.length+'；合计 '+Number(sum.toFixed(6))+'；均值 '+Number((sum/values.length).toFixed(6))+'；中位数 '+median;say('统计完成');};})(root, q, qa, say);
});
