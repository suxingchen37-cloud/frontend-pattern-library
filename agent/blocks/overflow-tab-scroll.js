// 用法：先 <script src="blocks/overflow-tab-scroll.js"></script>，再调用 window.INITS['overflow-tab-scroll'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['overflow-tab-scroll'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const strip=q('[data-strip]');const sync=()=>{q('[data-left]').disabled=strip.scrollLeft<=1;q('[data-right]').disabled=strip.scrollLeft+strip.clientWidth>=strip.scrollWidth-1;};q('[data-left]').onclick=()=>strip.scrollBy({left:-160});q('[data-right]').onclick=()=>strip.scrollBy({left:160});strip.onscroll=sync;qa('[data-tab]').forEach(button=>button.onclick=()=>{qa('[data-tab]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));button.scrollIntoView({block:'nearest',inline:'nearest'});say('当前阶段：'+button.textContent);sync();});sync();if(typeof ResizeObserver!=='undefined'){const observer=new ResizeObserver(()=>{if(!root.isConnected)observer.disconnect();else sync();});observer.observe(strip);}})(root, q, qa, say);
});
