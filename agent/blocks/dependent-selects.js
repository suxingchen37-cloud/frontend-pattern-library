// 用法：先 <script src="blocks/dependent-selects.js"></script>，再调用 window.INITS['dependent-selects'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['dependent-selects'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const kinds={image:['PNG','JPEG','WebP'],video:['MP4','WebM']},kind=q('[data-kind]'),format=q('[data-format]');const rebuild=()=>{format.replaceChildren(...kinds[kind.value].map(value=>{const option=document.createElement('option');option.value=value;option.textContent=value;return option;}));say('可用格式已更新为 '+format.value);};kind.onchange=rebuild;format.onchange=()=>say('选择格式：'+format.value);rebuild();})(root, q, qa, say);
});
