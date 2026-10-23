// 用法：先 <script src="blocks/empty-search.js"></script>，再调用 window.INITS['empty-search'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['empty-search'] = (root => {
    const input = root.querySelector('[data-es3]'), box = root.querySelector('[data-esres]');
    const showEmpty = () => {
      box.className = 'd-empty-search-esres3';
      box.innerHTML = '<b>没有找到</b><p>试试这几个：</p><div class="d-empty-search-essug3"><button type="button" data-sug3>官网</button><button type="button" data-sug3>素材</button><button type="button" data-sug3>周报</button></div>';
      bind();
    };
    const showHit = (word) => {
      box.className = 'esres3 ok';
      box.innerHTML = '<b>找到 1 个结果：「' + word + '」</b><p>演示里只有一个结果。</p>';
    };
    const bind = () => box.querySelectorAll('[data-sug3]').forEach((b) => b.onclick = () => { input.value = b.textContent; showHit(b.textContent); });
    input.addEventListener('input', () => { if (input.value.trim()) showEmpty(); });
    bind();
  });
