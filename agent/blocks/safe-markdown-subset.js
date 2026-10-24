// 用法：先 <script src="blocks/safe-markdown-subset.js"></script>，再调用 window.INITS['safe-markdown-subset'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['safe-markdown-subset'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const draw=()=>{const fragment=document.createDocumentFragment();let list=null;for(const line of q('[data-input]').value.split(/\r?\n/)){if(line.startsWith('- ')){if(!list){list=document.createElement('ul');fragment.append(list);}const li=document.createElement('li');li.textContent=line.slice(2);list.append(li);}else{list=null;if(!line.trim())continue;const el=document.createElement(line.startsWith('# ')?'h3':'p');el.textContent=line.startsWith('# ')?line.slice(2):line;fragment.append(el);}}q('[data-result]').replaceChildren(fragment);say('已更新纯文本预览，仅支持一级标题和列表');};q('[data-preview]').onclick=draw;draw();})(root, q, qa, say);
});
