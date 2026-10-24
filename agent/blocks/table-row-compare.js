// 用法：先 <script src="blocks/table-row-compare.js"></script>，再调用 window.INITS['table-row-compare'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-row-compare'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const data={'门口':[12,'待拍'],'走廊':[18,'完成'],'窗边':[8,'待拍']};const draw=()=>{const left=q('[data-left]').value,right=q('[data-right]').value;q('[data-result]').replaceChildren();if(left===right){say('请选择两个不同记录');return;}['时长','状态'].forEach((name,i)=>{const p=document.createElement('p');p.textContent=name+'：'+left+' '+data[left][i]+' / '+right+' '+data[right][i]+' · '+(data[left][i]===data[right][i]?'相同':'不同');q('[data-result]').append(p);});say('已对照两个记录');};qa('select').forEach(el=>el.onchange=draw);draw();})(root, q, qa, say);
});
