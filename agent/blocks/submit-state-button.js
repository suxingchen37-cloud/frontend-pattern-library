// 用法：先 <script src="blocks/submit-state-button.js"></script>，再调用 window.INITS['submit-state-button'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['submit-state-button'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let busy=false,count=0;const button=q('[data-submit]');button.onclick=()=>{if(busy)return;busy=true;const fail=q('[data-fail]').checked;button.disabled=true;button.setAttribute('aria-busy','true');button.textContent='正在提交…';count++;q('[data-count]').textContent='已提交 '+count+' 次';setTimeout(()=>{busy=false;if(!root.isConnected)return;button.disabled=false;button.removeAttribute('aria-busy');button.textContent=fail?'重试提交':'再次提交';say(fail?'模拟失败，内容未提交':'模拟提交成功');},500);};})(root, q, qa, say);
});
