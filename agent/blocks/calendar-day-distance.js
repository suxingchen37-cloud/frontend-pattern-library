// 用法：先 <script src="blocks/calendar-day-distance.js"></script>，再调用 window.INITS['calendar-day-distance'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['calendar-day-distance'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-calculate]').onclick=()=>{const read=selector=>{const value=q(selector).value;if(!/^\d{4}-\d\d-\d\d$/.test(value))return NaN;const date=new Date(value+'T00:00:00Z');return Number.isFinite(+date)&&date.toISOString().slice(0,10)===value?+date:NaN;};const start=read('[data-start]'),end=read('[data-end]');if(!Number.isFinite(start)||!Number.isFinite(end)||end<start){say('请输入有效日期，结束日期不能早于开始日期');return;}say('间隔 '+((end-start)/86400000+(q('[data-inclusive]').checked?1:0))+' 天'+(q('[data-inclusive]').checked?'（包含首尾）':'（不包含结束日）'));};})(root, q, qa, say);
});
