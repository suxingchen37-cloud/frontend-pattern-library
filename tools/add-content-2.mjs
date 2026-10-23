// 内容 第二批 10 条。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data', 'assets', 'motion');
const A = [];

/* 11 下载卡 */
A.push({
  id: 'download-card', cat: '内容', t: '文件下载卡', en: 'download card',
  d: '文件卡写清三件事：文件名、格式与大小、拿来干嘛。只写「下载」的卡片，用户得点开才知道是不是自己要的。格式和大小放在同一行等宽字，是为了对齐着扫。下载中改成进度与取消，不让按钮一直转圈。',
  body: '<div class="d-dl"><div class="d-dl-row"><b>灯光清单.pdf</b><span>PDF · 240 KB · 打印用 A3</span></div><button type="button" class="d-dl-btn" data-dl>下载</button></div>',
  css: '.d-dl{display:flex;align-items:center;gap:12px;max-width:340px;padding:12px 14px;border:1px solid var(--line);border-radius:10px;background:var(--paper)}\n.d-dl-row{min-width:0;flex:1}\n.d-dl-row b{display:block;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.d-dl-row span{display:block;margin-top:1px;font-family:var(--font-mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}\n.d-dl-btn{flex:0 0 auto;min-width:76px;padding:5px 12px;border:1px solid var(--line);border-radius:999px;background:var(--bg);color:var(--ink);font:inherit;font-size:11px;cursor:pointer}\n.d-dl-btn.busy{color:var(--muted)}',
  init: "root => {\n  var btn = root.querySelector('[data-dl]');\n  if (!btn) return;\n  var p = 0, timer = 0;\n  btn.addEventListener('click', function () {\n    if (btn.classList.contains('busy')) { clearInterval(timer); btn.classList.remove('busy'); btn.textContent = '下载'; return; }\n    btn.classList.add('busy'); p = 0;\n    timer = setInterval(function () { p += 20; btn.textContent = p + '%'; if (p >= 100) { clearInterval(timer); btn.textContent = '已下载'; setTimeout(function () { btn.classList.remove('busy'); btn.textContent = '再下一次'; }, 900); } }, 220);\n  });\n}",
  motion: '机械', tags: ['下载', '文件', '内容'],
});

/* 12 剧透折叠 */
A.push({
  id: 'spoiler-reveal', cat: '内容', t: '剧透折叠', en: 'spoiler reveal',
  d: '剧透默认模糊而不是直接隐藏：隐藏会让人以为那段不存在，模糊保留长度和排版，说明「这里有内容，但你可能不想看」。点一下变清晰，不做动画——动画会让被遮住的字先闪一下。',
  body: '<div class="d-sr"><p>结尾那场戏，父亲其实没有进门，他站在<button type="button" class="d-sr-mask" data-mask aria-pressed="false">门外听了两分钟就下楼了</button>。这件事全片只提过一次。</p></div>',
  css: '.d-sr{max-width:340px;padding:12px}\n.d-sr p{margin:0;font-size:13px;line-height:1.9}\n.d-sr-mask{padding:0 2px;border:0;background:var(--ink);color:transparent;font:inherit;border-radius:2px;cursor:pointer;filter:blur(1px);transition:filter 120ms var(--ease),background-color 120ms var(--ease),color 120ms var(--ease)}\n.d-sr-mask.on{background:transparent;color:inherit;filter:none}\n.d-sr-mask:focus-visible{outline:1px solid var(--ink);outline-offset:2px}',
  init: "root => {\n  var m = root.querySelector('[data-mask]');\n  if (!m) return;\n  m.addEventListener('click', function () { var on = m.classList.toggle('on'); m.setAttribute('aria-pressed', on ? 'true' : 'false'); });\n}",
  motion: '无动效', tags: ['剧透', '折叠', '正文', '内容'],
});

/* 13 正文小目录 */
A.push({
  id: 'inline-toc', cat: '内容', t: '正文小目录', en: 'inline toc',
  d: '小目录放在正文开头、只列三到五节：长文才需要目录，而长文的目录放在开头比固定在侧边更适合窄屏。当前小节在滚动中高亮，但只高亮不滚动——目录自己会跟着跳的，人就没法点别处。',
  body: '<div class="d-it" data-toc><b>本文分四节</b><ol><li><a href="#" data-to="0" class="d-it-on">一、光从哪来</a></li><li><a href="#" data-to="1">二、色温</a></li><li><a href="#" data-to="2">三、显色</a></li><li><a href="#" data-to="3">四、阴影</a></li></ol></div>',
  css: '.d-it{max-width:340px;padding:12px 14px;border:1px solid var(--line);border-radius:10px;background:var(--paper)}\n.d-it>b{display:block;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;color:var(--faint);font-weight:400;margin-bottom:6px}\n.d-it ol{list-style:none;margin:0;padding:0;display:grid;gap:3px}\n.d-it a{display:block;padding:2px 0;color:var(--muted);text-decoration:none;font-size:12px;border-left:2px solid transparent;padding-left:8px}\n.d-it a.d-it-on{color:var(--ink);border-left-color:var(--ink)}\n.d-it a:hover{color:var(--ink)}',
  init: "root => {\n  var links = [].slice.call(root.querySelectorAll('[data-to]'));\n  if (!links.length) return;\n  links.forEach(function (a) {\n    a.addEventListener('click', function (e) {\n      e.preventDefault();\n      links.forEach(function (x) { x.classList.toggle('d-it-on', x === a); });\n    });\n  });\n}",
  motion: '无动效', tags: ['目录', '长文', '导航', '内容'],
});

/* 14 行内定义 */
A.push({
  id: 'inline-definition', cat: '内容', t: '行内定义', en: 'inline definition',
  d: '术语第一次出现时在括号里给一句定义，之后再出现就不重复：每次都解释会打断阅读，一次不解释则后文全废。定义用正文同字号、淡化颜色，不用斜体——中文斜体是伪斜体，看起来像出错。',
  body: '<div class="d-id2"><p>灯的<span class="d-id2-def">显色指数（灯照在物体上，颜色跟自然光下差多少）</span>到九十以上，木头的暖色基本不走样；低于八十，红色会发灰。<span class="d-id2-dim">这个数字通常印在包装侧面。</span></p></div>',
  css: '.d-id2{max-width:340px;padding:12px}\n.d-id2 p{margin:0;font-size:13px;line-height:1.9}\n.d-id2-def{color:var(--muted)}\n.d-id2-dim{color:var(--faint)}',
  init: null,
  motion: '无动效', tags: ['定义', '术语', '正文', '内容'],
});

/* 15 带头像引语 */
A.push({
  id: 'quote-portrait', cat: '内容', t: '带头像引语', en: 'quote with portrait',
  d: '引语配头像时，头像放在引语下方而不是上方：先读话，再确认是谁说的。加粗引号用文字标点而不是图形，这样缩放时不会错位。引语太长就截断，一句半以内最像人说的话。',
  body: '<figure class="d-qp"><blockquote>灯不用亮，够用就行。</blockquote><figcaption><span class="d-qp-ava">周</span><div><b>周迟</b><em>灯光师 · 九年</em></div></figcaption></figure>',
  css: '.d-qp{margin:0;max-width:340px;padding:16px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}\n.d-qp blockquote{margin:0;font-family:var(--font-serif);font-size:21px;line-height:1.6;letter-spacing:-.01em}\n.d-qp blockquote:before{content:"「";color:var(--faint)}\n.d-qp blockquote:after{content:"」";color:var(--faint)}\n.d-qp figcaption{display:flex;align-items:center;gap:8px;margin-top:10px}\n.d-qp-ava{width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:var(--ink);color:var(--paper);font-family:var(--font-serif);font-size:11px}\n.d-qp figcaption b{display:block;font-size:11px}\n.d-qp figcaption em{display:block;font-style:normal;font-family:var(--font-mono);font-size:9px;color:var(--faint)}',
  init: null,
  motion: '无动效', tags: ['引语', '头像', '长文', '内容'],
});

/* 16 文末注释 */
A.push({
  id: 'endnote-list', cat: '内容', t: '文末注释', en: 'endnotes',
  d: '注释统一放文末、正文里只留上标数字：脚注浮层适合网页，但打印出来会散架。注释编号和正文用同一套等宽数字，扫的时候能对上。每条注释带一个「回到正文」的锚点，不加也能用，加了更像书。',
  body: '<div class="d-en"><p class="d-en-body">显色指数低于八十时，红色会明显发灰<sup><a href="#" class="d-en-ref" data-n="1">1</a></sup>，这一点在布料上最明显<sup><a href="#" class="d-en-ref" data-n="2">2</a></sup>。</p><ol class="d-en-list"><li id="d-en-1"><b>1</b><span>《照明设计手册》第三版，第 42 页。</span></li><li id="d-en-2"><b>2</b><span>2026 年 3 月实测，同色布在两种灯下的照片对比。</span></li></ol></div>',
  css: '.d-en{max-width:340px;padding:12px}\n.d-en-body{margin:0 0 10px;font-size:13px;line-height:1.9}\n.d-en-body sup a{font-family:var(--font-mono);font-size:9px;color:var(--ink-vermilion);text-decoration:none;padding:0 1px}\n.d-en-list{margin:0;padding:10px 0 0;border-top:1px solid var(--line);list-style:none;display:grid;gap:5px}\n.d-en-list li{display:flex;gap:8px;font-size:11px;line-height:1.7;color:var(--muted)}\n.d-en-list b{font-family:var(--font-mono);font-size:9px;color:var(--faint);font-weight:400;padding-top:2px}',
  init: "root => {\n  [].slice.call(root.querySelectorAll('[data-n]')).forEach(function (a) {\n    a.addEventListener('click', function (e) {\n      e.preventDefault();\n      var t = root.querySelector('#d-en-' + a.dataset.n);\n      if (t) { t.scrollIntoView({ block: 'nearest' }); t.style.background = 'color-mix(in srgb,var(--marker-hi) 30%,transparent)'; setTimeout(function () { t.style.background = ''; }, 900); }\n    });\n  });\n}",
  motion: '无动效', tags: ['注释', '脚注', '长文', '内容'],
});

/* 17 阅读信息 */
A.push({
  id: 'reading-meta', cat: '内容', t: '阅读信息', en: 'reading meta',
  d: '阅读时长按每分钟三百字算，不写「约」：写了「约」就等于承认不准。更新日期和初发日期都写，改了什么都不说，只写「已更新」等于没说。三个信息用一根细线隔开，不堆成一行点号。',
  body: '<div class="d-rm"><span>2 分钟读完</span><i></i><span>初发 2026-09-18</span><i></i><span>更新 2026-10-02 · 改了第二段的数据</span></div>',
  css: '.d-rm{display:flex;align-items:center;gap:8px;flex-wrap:wrap;max-width:340px;padding:8px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);font-family:var(--font-mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}\n.d-rm i{width:1px;height:10px;background:var(--line)}',
  init: null,
  motion: '无动效', tags: ['阅读', '元信息', '长文', '内容'],
});

/* 18 系列导航 */
A.push({
  id: 'series-nav', cat: '内容', t: '系列导航', en: 'series nav',
  d: '系列文章在文末给出上一篇和下一篇，标明第几篇共几篇：只给标题，读者不知道自己在哪儿。当前篇不用高亮列表，只写「第 3 篇 / 共 6 篇」，一行就够。链接方向用文字「上一篇」，不用箭头。',
  body: '<div class="d-sn"><span>这是「光与房间」的第 3 篇，共 6 篇</span><div class="d-sn-row"><a href="#">上一篇：窗的朝向</a><a href="#">下一篇：阴影的形状</a></div></div>',
  css: '.d-sn{max-width:340px;padding:12px 14px;border-top:1px solid var(--ink);border-bottom:1px solid var(--line)}\n.d-sn>span{display:block;font-family:var(--font-mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}\n.d-sn-row{display:flex;justify-content:space-between;gap:10px;margin-top:8px}\n.d-sn-row a{font-size:12px;color:var(--ink);text-decoration:none;border-bottom:1px solid var(--line);padding-bottom:1px}\n.d-sn-row a:hover{border-bottom-color:var(--ink)}',
  init: null,
  motion: '无动效', tags: ['系列', '导航', '长文', '内容'],
});

/* 19 图上标注 */
A.push({
  id: 'image-annotation', cat: '内容', t: '图上标注', en: 'image annotation',
  d: '标注点只放数字，说明放图下面按编号排：点旁边写全句会挡住画面。标注点固定 18px，加一圈描边，保证在任何底色上都看得见。编号和下方说明用同一套等宽字，斜着扫也能对上。',
  body: '<figure class="d-ia"><div class="d-ia-art"><span class="d-ia-dot" style="--x:26%;--y:32%">1</span><span class="d-ia-dot" style="--x:62%;--y:54%">2</span><span class="d-ia-dot" style="--x:44%;--y:78%">3</span></div><figcaption><p><b>1</b>东窗，早上七点最亮。</p><p><b>2</b>桌角，木头在这里开始褪色。</p><p><b>3</b>插座位置，决定灯能放哪儿。</p></figcaption></figure>',
  css: '.d-ia{margin:0;max-width:340px}\n.d-ia-art{position:relative;height:150px;border:1px solid var(--line);border-radius:6px;background:repeating-linear-gradient(45deg,var(--paper) 0 10px,color-mix(in srgb,var(--ink) 4%,var(--paper)) 10px 20px)}\n.d-ia-dot{position:absolute;left:var(--x);top:var(--y);width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;display:grid;place-items:center;background:var(--ink);color:var(--paper);font-family:var(--font-mono);font-size:9px;box-shadow:0 0 0 3px var(--paper)}\n.d-ia figcaption{margin-top:8px;display:grid;gap:3px}\n.d-ia figcaption p{margin:0;display:flex;gap:8px;font-size:11px;line-height:1.7;color:var(--muted)}\n.d-ia figcaption b{font-family:var(--font-mono);font-size:9px;color:var(--ink);font-weight:400;padding-top:2px}',
  init: null,
  motion: '无动效', tags: ['标注', '图片', '正文', '内容'],
});

/* 20 更正声明 */
A.push({
  id: 'correction-notice', cat: '内容', t: '更正声明', en: 'correction notice',
  d: '更正放在正文最上方、用一条竖线标出、写清哪里错了、改成什么、什么时候改的：把更正藏到文末，等于等读者发现。竖线用警示色，正文仍用正常色——错的是事实，不是整篇文章。不写「感谢指正」这类客套，一句足够。',
  body: '<div class="d-cr"><b>10 月 2 日更正</b><p>原文写「三千开尔文」，实际是三千五百；第二段的实测数据同时更新。原文保留删除线，可对照。</p><p class="d-cr-old"><del>三千开尔文</del> → <ins>三千五百开尔文</ins></p></div>',
  css: '.d-cr{max-width:340px;padding:10px 0 10px 12px;border-left:2px solid var(--warn)}\n.d-cr b{display:block;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;color:var(--warn);font-weight:400}\n.d-cr p{margin:4px 0 0;font-size:11px;line-height:1.8;color:var(--muted)}\n.d-cr-old{font-family:var(--font-mono);font-size:10px}\n.d-cr-old del{color:var(--faint)}\n.d-cr-old ins{text-decoration:none;color:var(--ink);border-bottom:1px solid var(--ink)}',
  init: null,
  motion: '无动效', tags: ['更正', '声明', '长文', '内容'],
});

for (const a of A) { a.source = 'v4'; fs.writeFileSync(path.join(DIR, a.id + '.json'), JSON.stringify(a, null, 2) + '\n', 'utf8'); }
console.log('写入 ' + A.length + ' 条：' + A.map(a => a.id).join(', '));
