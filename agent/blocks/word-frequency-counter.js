// 用法：先 <script src="blocks/word-frequency-counter.js"></script>，再调用 window.INITS['word-frequency-counter'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['word-frequency-counter'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-count]').onclick=()=>{const text=q('[data-input]').value,words=text.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu)||[],counts=new Map();words.forEach(word=>counts.set(word,(counts.get(word)||0)+1));const sorted=[...counts].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));q('[data-result]').replaceChildren(...sorted.slice(0,20).map(([word,count])=>{const li=document.createElement('li');li.textContent=word+'：'+count;return li;}));say('非空白字符 '+[...text.replace(/\s/g,'')].length+'；词段 '+words.length+'；中文连续文字视为一个词段');};})(root, q, qa, say);
});
