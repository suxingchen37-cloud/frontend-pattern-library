/* 配方码：把「你在站上选中的几条」变成一段可直接粘给 AI 的单子。
   由 tools/site.mjs 负责在 motion-lab.html 里插入对它的引用；本文件不参与生成。 */
(function () {
  var BTN = '复制配方';
  var indexCache = null;

  function picks() {
    try { return JSON.parse(localStorage.getItem('lab.picks') || '[]'); } catch (e) { return []; }
  }
  function loadIndex() {
    if (indexCache) return Promise.resolve(indexCache);
    return fetch('agent/index.json', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : { items: [] }; })
      .then(function (j) { indexCache = j; return j; })
      .catch(function () { indexCache = { items: [] }; return indexCache; });
  }
  function nameOf(items, id) {
    for (var i = 0; i < items.length; i++) if (items[i].id === id) return items[i].t + '｜' + items[i].cat;
    return id;
  }

  /* 供测试与调试调用；按钮点击也走这里 */
  window.__recipe = function () {
    var ids = picks();
    return loadIndex().then(function (idx) {
      var items = idx.items || [];
      var base = location.origin;
      var out = [
        '按这个库的口味做一页：' + base + '/llms.txt',
        '先读 ' + base + '/agent/index.json（只读 items 里对应的几条），再用这些原件：'
      ];
      ids.forEach(function (id) {
        out.push('- ' + id + '｜' + nameOf(items, id) + ' → ' + base + '/agent/blocks/' + id + '.html + .css' + (function () {
          for (var i = 0; i < items.length; i++) if (items[i].id === id) return items[i].hasInit ? ' + .js' : '';
          return '';
        })());
      });
      out.push('要求：（一句话：要做什么页面、给谁用、最重要的一个动作是什么）');
      out.push('破格：整页只允许一处，写明破坏了哪条规则、为什么。');
      out.push('做完跑一遍 llms.txt 的「交付前自检」，把没过的条目贴给我。');
      return out.join('\n');
    });
  };

  function copy(text) {
    try { navigator.clipboard.writeText(text); return; } catch (e) {}
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    ta.remove();
  }

  function mount() {
    var boxes = document.querySelectorAll('.pp-actions');
    for (var i = 0; i < boxes.length; i++) {
      var box = boxes[i];
      if (box.querySelector('[data-recipe]')) continue;
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-recipe', '');
      b.textContent = BTN;
      b.title = '把已选的效果变成一段可直接粘给 AI 的单子（含 id 与取料地址）';
      b.addEventListener('click', function (ev) {
        var btn = ev.currentTarget;
        var ids = picks();
        if (!ids.length) {
          btn.textContent = '先选几条';
          setTimeout(function () { btn.textContent = BTN; }, 1200);
          return;
        }
        window.__recipe().then(function (txt) {
          copy(txt);
          btn.textContent = '已复制 ' + ids.length + ' 条';
          setTimeout(function () { btn.textContent = BTN; }, 1600);
        });
      });
      var copyBtn = box.querySelector('[data-copy]');
      if (copyBtn) box.insertBefore(b, copyBtn); else box.appendChild(b);
    }
  }

  mount();
  var pending = false;
  new MutationObserver(function () {
    if (pending) return;
    pending = true;
    setTimeout(function () { pending = false; mount(); }, 50);
  }).observe(document.body, { childList: true, subtree: true });
})();
