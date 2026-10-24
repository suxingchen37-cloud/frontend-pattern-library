// 用法：先 <script src="blocks/hash-section-router.js"></script>，再调用 window.INITS['hash-section-router'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['hash-section-router'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const views={overview:'项目概览',assets:'素材目录',delivery:'交付说明'};const draw=()=>{const key=location.hash.replace('#workflow-route-',''),current=Object.hasOwn(views,key)?key:'overview';q('[data-view]').textContent=views[current];Object.keys(views).forEach(name=>q('[data-'+name+']').setAttribute('aria-pressed',String(name===current)));say('当前视图：'+views[current]);};Object.keys(views).forEach(key=>q('[data-'+key+']').onclick=()=>{location.hash='workflow-route-'+key;draw();});window.addEventListener('hashchange',draw);draw();})(root, q, qa, say);
});
