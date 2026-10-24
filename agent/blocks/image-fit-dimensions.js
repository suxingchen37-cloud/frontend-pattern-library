// 用法：先 <script src="blocks/image-fit-dimensions.js"></script>，再调用 window.INITS['image-fit-dimensions'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['image-fit-dimensions'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-calculate]').onclick=()=>{const inputs=qa('input'),v=inputs.map(el=>Number(el.value));if(inputs.some(el=>!el.value.trim())||v.some(n=>!Number.isFinite(n)||n<=0||n>100000)){say('尺寸须为 0–100000 范围内的正数');return;}const ratios=[v[2]/v[0],v[3]/v[1]],scale=q('[data-mode]').value==='cover'?Math.max(...ratios):Math.min(...ratios),w=v[0]*scale,h=v[1]*scale;say('显示尺寸 '+w.toFixed(2)+' × '+h.toFixed(2)+'；水平裁切 '+Math.max(0,w-v[2]).toFixed(2)+'；垂直裁切 '+Math.max(0,h-v[3]).toFixed(2)+' 像素（两侧合计）');};})(root, q, qa, say);
});
