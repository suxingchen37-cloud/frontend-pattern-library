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
      <p class="lab-rule"><b>使用判断：</b>${item.rule}</p>
      ${item.dont ? `<p class="lab-dont">需避免的问题：${item.dont}</p>` : ''}
    </article>`;
  }

  function mount(cfg) {
    const grid = document.getElementById(cfg.grid);
    const chipsBox = document.getElementById(cfg.chips);
    const count = document.getElementById(cfg.count);
    const search = document.getElementById(cfg.search);
    const section = document.getElementById(cfg.section);
    const densityBtn = document.getElementById(cfg.density);
    if (!grid || !chipsBox) return;

    const groups = ['全部', ...new Set(cfg.data.map((d) => d.group))];
    const KEY = cfg.key;
    let group = localStorage.getItem(KEY + '.group') || '全部';
    if (!groups.includes(group)) group = '全部';
    let q = localStorage.getItem(KEY + '.q') || '';
    let timer = null;
    if (search) search.value = q;

    chipsBox.innerHTML = groups.map((g) => {
      const n = g === '全部' ? cfg.data.length : cfg.data.filter((d) => d.group === g).length;
      return `<button class="lab-chip" type="button" data-group="${g}" aria-pressed="${g === group}">${g} ${n}</button>`;
    }).join('');

    const render = () => {
      const needle = q.trim().toLowerCase();
      const list = cfg.data.filter((d) => (group === '全部' || d.group === group)
        && (!needle || (d.t + d.en + d.group + d.rule).toLowerCase().includes(needle)));
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
      localStorage.setItem(KEY + '.group', group);
      chipsBox.querySelectorAll('[data-group]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      render();
      section?.scrollIntoView({ block: 'start' });
    });
    search?.addEventListener('input', (e) => {
      q = e.target.value;
      localStorage.setItem(KEY + '.q', q);
      clearTimeout(timer);
      timer = setTimeout(render, 120);
    });

    if (densityBtn && section) {
      const paint = () => {
        const compact = section.getAttribute('data-density') === 'compact';
        densityBtn.textContent = compact ? '密度：紧凑' : '密度：舒适';
        densityBtn.setAttribute('aria-pressed', String(compact));
      };
      if (localStorage.getItem(KEY + '.density') === 'compact') section.setAttribute('data-density', 'compact');
      densityBtn.onclick = () => {
        const compact = section.getAttribute('data-density') !== 'compact';
        section.setAttribute('data-density', compact ? 'compact' : 'cozy');
        localStorage.setItem(KEY + '.density', compact ? 'compact' : 'cozy');
        paint();
      };
      paint();
    }

    render();
  }

  mount({ section: 'specs', grid: 'specGrid', chips: 'specChips', count: 'specCount', search: 'specSearch', density: 'specDensity', key: 'ds.spec', data: window.DS_SPECS || [], prefix: 's-', kind: 'spec' });
  mount({ section: 'content-specs', grid: 'contentGrid', chips: 'contentChips', count: 'contentCount', search: 'contentSearch', density: 'contentDensity', key: 'ds.content', data: window.DS_CONTENT || [], prefix: 'k-', kind: 'content' });
})();
