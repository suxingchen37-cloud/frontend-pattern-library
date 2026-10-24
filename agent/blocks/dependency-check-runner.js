// 用法：先 <script src="blocks/dependency-check-runner.js"></script>，再调用 window.INITS['dependency-check-runner'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['dependency-check-runner'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-run]').onclick=()=>{let allowed=true,passed=0;q('[data-result]').replaceChildren(...qa('[data-condition]').map((el,i)=>{const li=document.createElement('li'),state=!allowed?'跳过：前序条件未满足':el.checked?'通过':'失败：缺少条件';if(allowed&&el.checked)passed++;if(!el.checked)allowed=false;li.textContent=['原稿检查','素材检查','交付检查'][i]+' · '+state;return li;}));say('通过 '+passed+' / 3 项；仅为本地条件演示');};})(root, q, qa, say);
});
