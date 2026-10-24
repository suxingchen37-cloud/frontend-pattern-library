// 用法：先 <script src="blocks/password-visibility.js"></script>，再调用 window.INITS['password-visibility'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['password-visibility'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root, q, qa, say) => {
    const input=q('[data-password]'), button=q('[data-toggle]');
    button.onclick=()=>{const start=input.selectionStart,end=input.selectionEnd;const shown=input.type==='password';input.type=shown?'text':'password';button.textContent=shown?'隐藏密码':'显示密码';button.setAttribute('aria-pressed',String(shown));if(start!==null)input.setSelectionRange(start,end);say(shown?'密码当前可见':'密码已隐藏');};
  })(root, q, qa, say);
});
