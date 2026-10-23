// 用法：先 <script src="blocks/chart-empty-states.js"></script>，再调用 window.INITS['chart-empty-states'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['chart-empty-states'] = (root => {
  const body = root.querySelector('[data-body]');
  const tabs = [...root.querySelectorAll('[data-s]')];
  if (!body || !tabs.length) return;
  const line = (cls, text) => { const el = document.createElement('p'); el.className = cls; el.textContent = text; return el; };
  const box = (title, note, retry) => {
    const wrap = document.createElement('div');
    wrap.appendChild(line('d-ce-t', title));
    wrap.appendChild(line('d-ce-p', note));
    if (retry) { const b = document.createElement('button'); b.type = 'button'; b.className = 'd-ce-btn'; b.textContent = '重试'; wrap.appendChild(b); }
    return wrap;
  };
  const render = k => {
    body.textContent = '';
    if (k === 'loading') {
      const sk = document.createElement('div');
      sk.className = 'd-ce-sk';
      [38, 64, 47, 82, 56, 71].forEach(h => { const i = document.createElement('i'); i.style.height = h + '%'; sk.appendChild(i); });
      body.appendChild(sk);
    } else if (k === 'error') {
      body.appendChild(box('取数没成功', '接口 8 秒没回应，已停止等待。', true));
    } else {
      body.appendChild(box('这段时间没有记录', '换个时间范围，或者等明天第一批数据进来。', false));
    }
    tabs.forEach(t => t.setAttribute('aria-selected', t.dataset.s === k ? 'true' : 'false'));
  };
  tabs.forEach(t => { t.onclick = () => render(t.dataset.s); });
  render('empty');
});
