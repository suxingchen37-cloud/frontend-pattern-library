// 用法：先 <script src="blocks/date-pick.js"></script>，再调用 window.INITS['date-pick'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['date-pick'] = (root => {
    const grid = root.querySelector('[data-grid3]'), head = root.querySelector('[data-month3]'), pick = root.querySelector('[data-pick3]');
    let y = 2026, m = 9, selected = '';
    const render = () => {
      head.textContent = y + '.' + String(m + 1).padStart(2, '0');
      const first = new Date(y, m, 1).getDay();
      const days = new Date(y, m + 1, 0).getDate();
      let html = ['日', '一', '二', '三', '四', '五', '六'].map((d) => '<span>' + d + '</span>').join('');
      for (let i = 0; i < first; i++) html += '<span></span>';
      for (let d = 1; d <= days; d++) {
        const key = y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
        html += '<button type="button" data-day3="' + key + '" class="' + (selected === key ? 'on' : '') + '">' + d + '</button>';
      }
      grid.innerHTML = html;
      grid.querySelectorAll('[data-day3]').forEach((b) => b.onclick = () => {
        selected = b.dataset.day3; pick.textContent = '已选 ' + selected; render();
      });
    };
    root.querySelector('[data-prev3]').onclick = () => { m--; if (m < 0) { m = 11; y--; } render(); };
    root.querySelector('[data-next3]').onclick = () => { m++; if (m > 11) { m = 0; y++; } render(); };
    render();
  });
