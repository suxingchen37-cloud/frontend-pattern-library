(function () {
  const root = document.documentElement;
  const qs = new URLSearchParams(location.search);
  const initial = qs.get('theme') || localStorage.getItem('site.theme');
  if (initial === 'night') root.setAttribute('data-theme', 'night');

  const themeBtn = document.getElementById('themebtn');
  const paintTheme = () => {
    if (!themeBtn) return;
    const night = root.getAttribute('data-theme') === 'night';
    themeBtn.textContent = night ? '纸色' : '夜间';
    themeBtn.setAttribute('aria-label', night ? '切换到纸色主题' : '切换到夜间主题');
  };
  paintTheme();
  themeBtn?.addEventListener('click', () => {
    const night = root.getAttribute('data-theme') !== 'night';
    const value = night ? 'night' : 'paper';
    root.setAttribute('data-theme', value);
    localStorage.setItem('site.theme', value);
    paintTheme();
    if (window.parent !== window) {
      try { window.parent.postMessage({ type: 'site-theme', value }, '*'); } catch { }
    }
  });
  window.addEventListener('message', (e) => {
    if (!e.data || e.data.type !== 'site-theme') return;
    const value = e.data.value === 'night' ? 'night' : 'paper';
    root.setAttribute('data-theme', value);
    localStorage.setItem('site.theme', value);
    paintTheme();
  });

  const menuBtn = document.getElementById('menubtn');
  const nav = document.getElementById('nav');
  const closeNav = () => {
    nav?.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    if (menuBtn) menuBtn.textContent = '菜单';
  };
  menuBtn?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? '收起' : '菜单';
  });
  nav?.addEventListener('click', (e) => { if (e.target.closest('a')) closeNav(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    root.classList.add('reveal-ready');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  }

  // reading progress
  const bar = document.querySelector('.progress-bar');
  const body = document.querySelector('.article-body');
  if (bar && body) {
    const update = () => {
      const start = body.offsetTop - 90;
      const end = start + body.offsetHeight - window.innerHeight + 140;
      const pct = Math.max(0, Math.min(1, (window.scrollY - start) / Math.max(1, end - start)));
      bar.style.width = (pct * 100).toFixed(2) + '%';
      bar.setAttribute('aria-valuenow', String(Math.round(pct * 100)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  // toc highlight
  const toc = document.querySelector('.toc');
  if (toc && body) {
    const heads = [...body.querySelectorAll('h2[id]')];
    const links = [...toc.querySelectorAll('a[href^="#"]')];
    const sync = () => {
      let current = heads[0]?.id;
      heads.forEach((h) => { if (h.getBoundingClientRect().top < 140) current = h.id; });
      links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + current));
    };
    sync();
    window.addEventListener('scroll', sync, { passive: true });
  }

  // footnote popover
  const pop = document.querySelector('.fn-pop');
  document.querySelectorAll('.fnref').forEach((ref) => {
    ref.addEventListener('click', () => {
      const note = document.getElementById('fn-' + ref.dataset.fn);
      if (!pop || !note) return;
      pop.textContent = note.textContent.trim();
      pop.classList.add('on');
      clearTimeout(pop._t);
      pop._t = setTimeout(() => pop.classList.remove('on'), 5200);
    });
  });

  // copy link
  document.querySelectorAll('[data-copy-link]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        const old = btn.textContent;
        btn.textContent = '链接已复制';
        setTimeout(() => { btn.textContent = old; }, 1600);
      } catch {
        btn.textContent = '复制失败';
      }
    });
  });

  // archive
  const archiveList = document.getElementById('archiveList');
  if (archiveList) {
    const items = [...archiveList.querySelectorAll('.entry')].map((el) => ({
      href: el.getAttribute('href'),
      date: el.dataset.date,
      cat: el.dataset.cat,
      title: el.dataset.title,
      dek: el.dataset.dek,
      read: el.dataset.read,
    }));
    const count = document.getElementById('archiveCount');
    const chips = [...document.querySelectorAll('[data-filter]')];
    const search = document.getElementById('archiveSearch');
    const viewBtns = [...document.querySelectorAll('[data-view]')];
    let cat = '全部';
    let q = '';
    let view = 'list';

    const listHTML = (list) => list.map((it) => `
      <a class="entry" href="${it.href}">
        <time>${it.date}</time>
        <div><h3>${it.title}</h3><p>${it.dek}</p></div>
        <span class="cat">${it.cat}</span>
        <span class="read">${it.read}</span>
      </a>`).join('');

    const gridHTML = (list) => list.map((it) => `
      <a class="acard" href="${it.href}">
        <div class="art" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="body">
          <h3>${it.title}</h3>
          <p>${it.dek}</p>
          <div class="meta"><span>${it.date} · ${it.cat}</span><span>${it.read}</span></div>
        </div>
      </a>`).join('');

    const empty = (label) => `<div class="archive-empty"><b>没有找到「${label}」</b>换个关键词，或点「全部」看所有文章。</div>`;

    const render = () => {
      const list = items.filter((it) => (cat === '全部' || it.cat === cat)
        && (!q || (it.title + it.dek + it.cat).toLowerCase().includes(q)));
      if (count) count.textContent = list.length + ' 篇';
      if (!list.length) { archiveList.className = 'archive-list'; archiveList.innerHTML = empty(q || cat); return; }
      if (view === 'grid') {
        archiveList.className = 'archive-grid';
        archiveList.innerHTML = gridHTML(list);
      } else {
        archiveList.className = 'archive-list';
        archiveList.innerHTML = listHTML(list);
      }
    };

    chips.forEach((chip) => chip.addEventListener('click', () => {
      cat = chip.dataset.filter;
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      render();
    }));
    search?.addEventListener('input', (e) => { q = e.target.value.trim().toLowerCase(); render(); });
    viewBtns.forEach((btn) => btn.addEventListener('click', () => {
      view = btn.dataset.view;
      viewBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      render();
    }));
    render();
  }

  try { localStorage.getItem('site.theme'); } catch { }

  // newsletter
  const news = document.getElementById('newsForm');
  if (news) {
    news.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = news.querySelector('input[type=email]');
      const msg = news.querySelector('.form-msg');
      const value = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        msg.textContent = '邮箱看起来不对，检查一下再试。';
        msg.className = 'form-msg bad';
        input.focus();
        return;
      }
      msg.textContent = '记下了。出刊那天你会收到一封，不会转发给任何人。';
      msg.className = 'form-msg';
      input.value = '';
    });
  }

  // contact
  const contact = document.getElementById('contactForm');
  if (contact) {
    contact.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = contact.querySelector('.contact-msg');
      const name = contact.querySelector('[name=name]').value.trim();
      const email = contact.querySelector('[name=email]').value.trim();
      const text = contact.querySelector('[name=message]').value.trim();
      if (!name || !text) {
        msg.textContent = '名字和内容至少写一个，不然编辑室不知道回什么。';
        msg.className = 'contact-msg bad';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.textContent = '留一个能收到回信的邮箱。';
        msg.className = 'contact-msg bad';
        return;
      }
      msg.textContent = '收到了。编辑室会在三个工作日内回信。';
      msg.className = 'contact-msg ok';
      contact.reset();
    });
  }
})();
