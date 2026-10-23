/* 设计系统 / 内容呈现 图鉴渲染 */
(function () {
  function scoped(prefix, id, css) {
    const out = [];
    let buf = '', depth = 0;
    for (let i = 0; i < css.length; i++) {
      const c = css[i];
      buf += c;
      if (c === '{') depth++;
      if (c === '}') {
        depth--;
        if (depth === 0) {
          const open = buf.indexOf('{');
          const sel = buf.slice(0, open).trim();
          const body = buf.slice(open);
          if (sel.startsWith('@')) out.push(buf);
          else out.push(sel.split(',').map((x) => '#' + prefix + id + ' ' + x.trim()).join(',') + body);
          buf = '';
        }
      }
    }
    return out.join('\n');
  }

  function cardHTML(item, prefix, kind) {
    return `<article class="lab-card" id="${prefix}${item.id}" data-kind="${kind}">
      <div class="lab-top"><span>${item.group}</span><span>${item.en}</span></div>
      <h3>${item.t}</h3>
      <div class="stage">${item.body}</div>
      <style>${scoped(prefix, item.id, item.css)}</style>
      <p class="lab-rule">${item.rule}</p>
      ${item.dont ? `<p class="lab-dont">别这样：${item.dont}</p>` : ''}
    </article>`;
  }

  function mount(cfg) {
    const grid = document.getElementById(cfg.grid);
    const chipsBox = document.getElementById(cfg.chips);
    const count = document.getElementById(cfg.count);
    const search = document.getElementById(cfg.search);
    if (!grid || !chipsBox) return;
    const groups = ['全部', ...new Set(cfg.data.map((d) => d.group))];
    let group = '全部';
    let q = '';
    chipsBox.innerHTML = groups.map((g, i) => {
      const n = g === '全部' ? cfg.data.length : cfg.data.filter((d) => d.group === g).length;
      return `<button class="lab-chip" type="button" data-group="${g}" aria-pressed="${i === 0}">${g} ${n}</button>`;
    }).join('');

    const render = () => {
      const list = cfg.data.filter((d) => (group === '全部' || d.group === group)
        && (!q || (d.t + d.en + d.group + d.rule).toLowerCase().includes(q)));
      if (count) count.textContent = list.length + ' / ' + cfg.data.length + ' 条';
      if (!list.length) {
        grid.innerHTML = '<div class="lab-empty">没有匹配的条目，换个关键词或点「全部」。</div>';
        return;
      }
      grid.innerHTML = list.map((d) => cardHTML(d, cfg.prefix, cfg.kind)).join('');
      list.forEach((d) => {
        if (typeof d.init !== 'function') return;
        const card = document.getElementById(cfg.prefix + d.id);
        if (card) d.init(card);
      });
    };

    chipsBox.addEventListener('click', (e) => {
      const b = e.target.closest('[data-group]');
      if (!b) return;
      group = b.dataset.group;
      chipsBox.querySelectorAll('[data-group]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      render();
    });
    search?.addEventListener('input', (e) => { q = e.target.value.trim().toLowerCase(); render(); });
    render();
  }

  mount({ grid: 'specGrid', chips: 'specChips', count: 'specCount', search: 'specSearch', data: window.DS_SPECS || [], prefix: 's-', kind: 'spec' });
  mount({ grid: 'contentGrid', chips: 'contentChips', count: 'contentCount', search: 'contentSearch', data: window.DS_CONTENT || [], prefix: 'k-', kind: 'content' });
})();
