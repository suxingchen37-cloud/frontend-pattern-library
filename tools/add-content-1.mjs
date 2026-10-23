// 内容 第一批 10 条：正文里的块，不是组件库卡片。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data', 'assets', 'motion');
const A = [];

/* 1 导语段 */
A.push({
  id: 'lede-paragraph', cat: '内容', t: '导语段', en: 'lede paragraph',
  d: '导语比正文大两档、行高更松、宽度更窄：它的活是让人决定要不要往下读，所以一行不能塞太多字。导语不放粗、不加底色——加粗会变成标题，底色会变成提示框，两者都让它看起来像结论而不是引子。',
  body: '<div class="d-lp3"><p class="d-lp3-lede">这间屋子的光是斜着进来的。早上七点打在桌面，十点就退到柜子上；一天里只有四十分钟，桌角那块木纹是亮的。</p><p class="d-lp3-body">其余时间它都在暗处。所以这张桌子最常被用来放东西，而不是写字。</p></div>',
  css: '.d-lp3{max-width:340px;font-family:var(--font-serif)}\n.d-lp3-lede{margin:0;font-size:21px;line-height:1.6;letter-spacing:-.01em;max-width:26ch}\n.d-lp3-body{margin:12px 0 0;font-family:var(--font-sans);font-size:13px;line-height:1.8;color:var(--muted);max-width:34ch}',
  init: null,
  motion: '无动效', tags: ['导语', '长文', '排版', '内容'],
});

/* 2 要点摘要 */
A.push({
  id: 'key-takeaways', cat: '内容', t: '要点摘要', en: 'key takeaways',
  d: '要点放三到四条、每条一行半以内：再多就变成目录，就该放正文里了。不加图标、不加序号圆圈——序号会让人以为有先后顺序，而这些点是并列的。位置固定在标题下，滚动时跟着走，读完正文还能回来对。',
  body: '<div class="d-kt"><b>读完你会知道</b><ul><li>为什么台灯的色温比亮度更影响阅读</li><li>三千五百开尔文适合哪种房间</li><li>怎么用一张白纸判断显色够不够</li></ul></div>',
  css: '.d-kt{max-width:340px;padding:14px 16px;border-left:2px solid var(--ink);background:var(--paper)}\n.d-kt b{display:block;font-family:var(--font-mono);font-size:9px;letter-spacing:.12em;color:var(--faint);font-weight:400;margin-bottom:6px}\n.d-kt ul{margin:0;padding:0;list-style:none;display:grid;gap:5px}\n.d-kt li{position:relative;padding-left:14px;font-size:13px;line-height:1.6}\n.d-kt li:before{content:"";position:absolute;left:0;top:10px;width:5px;height:1px;background:var(--ink)}',
  init: null,
  motion: '无动效', tags: ['摘要', '要点', '长文', '内容'],
});

/* 3 图注 */
A.push({
  id: 'figure-caption', cat: '内容', t: '图注与编号', en: 'figure caption',
  d: '图注放在图下面、比正文小一档、编号和说明分开：编号用等宽字，一眼能找到；说明用正文字体，读起来不跳。图注不写「如图所示」，那句话不提供信息。图注和正文之间留一行空，避免被读成正文的第一句。',
  body: '<figure class="d-fc"><div class="d-fc-art"><span>桌面光位</span></div><figcaption><b>图 3</b>早上七点，光从东窗进来，落在桌角。快门 1/60，光圈 f/2.8。</figcaption></figure>',
  css: '.d-fc{margin:0;max-width:340px}\n.d-fc-art{position:relative;height:120px;border:1px solid var(--line);border-radius:6px;background:linear-gradient(120deg,var(--paper),color-mix(in srgb,var(--ink) 12%,var(--paper)))}\n.d-fc-art span{position:absolute;left:10px;bottom:8px;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--muted)}\n.d-fc figcaption{display:flex;gap:8px;margin-top:8px;font-size:11px;line-height:1.7;color:var(--muted)}\n.d-fc figcaption b{font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint);font-weight:400;white-space:nowrap;padding-top:2px}',
  init: null,
  motion: '无动效', tags: ['图注', '编号', '长文', '内容'],
});

/* 4 提示块 */
A.push({
  id: 'callout-note', cat: '内容', t: '提示块三型', en: 'callout variants',
  d: '提示块只分三型：注意、例外、做法。四型以上就开始凭感觉挑。三型靠左侧竖线的颜色和标签字区分，不靠底色——三块不同底色放在一起，页面会花。提示块不用感叹号，感叹号多了等于没有重点。',
  body: '<div class="d-cn"><div class="d-cn-item d-cn-warn"><b>注意</b><p>色温低于三千开尔文，蓝色会发闷。</p></div><div class="d-cn-item d-cn-exc"><b>例外</b><p>如果墙是米色的，可以再低两百开。</p></div><div class="d-cn-item d-cn-do"><b>做法</b><p>先定色温，再调亮度，最后看阴影。</p></div></div>',
  css: '.d-cn{display:grid;gap:8px;max-width:340px}\n.d-cn-item{padding:8px 12px;border-left:2px solid var(--line);background:var(--paper)}\n.d-cn-item b{display:block;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;font-weight:400;margin-bottom:2px}\n.d-cn-item p{margin:0;font-size:12px;line-height:1.7;color:var(--muted)}\n.d-cn-warn{border-left-color:var(--warn)}\n.d-cn-warn b{color:var(--warn)}\n.d-cn-exc{border-left-color:var(--ink-yellow)}\n.d-cn-exc b{color:var(--muted)}\n.d-cn-do{border-left-color:var(--ok)}\n.d-cn-do b{color:var(--ok)}',
  init: null,
  motion: '无动效', tags: ['提示', '标注', '长文', '内容'],
});

/* 5 术语解释 */
A.push({
  id: 'glossary-tooltip', cat: '内容', t: '术语解释', en: 'glossary tooltip',
  d: '术语用虚线下划线，不改成蓝色链接：蓝色会让人以为点了会跳走。解释浮层里第一句是人话，第二句才给数字。键盘 Tab 也能打开，因为不是所有人用鼠标。点空白处关掉，不用非得再点一次术语。',
  body: '<div class="d-gt"><p class="d-gt-body">这盏灯的<button type="button" class="d-gt-term" data-term>显色指数<i class="d-gt-tip" data-tip>灯照在物体上，颜色跟自然光下差多少。九十分以上，木头的暖色基本不走样。</i></button>在九十二，木头的暖色基本不走样。</p></div>',
  css: '.d-gt{max-width:340px;padding:12px}\n.d-gt-body{margin:0;font-size:13px;line-height:2}\n.d-gt-term{position:relative;padding:0;border:0;background:none;color:inherit;font:inherit;border-bottom:1px dashed var(--muted);cursor:help}\n.d-gt-tip{position:absolute;left:50%;bottom:calc(100% + 8px);width:210px;margin-left:-105px;padding:8px 10px;border:1px solid var(--line);border-radius:6px;background:var(--paper);box-shadow:0 12px 24px -8px #20241e26;font-style:normal;font-size:11px;line-height:1.7;color:var(--muted);text-align:left;opacity:0;transform:translateY(4px);transition:opacity 160ms var(--ease),transform 160ms var(--ease);pointer-events:none;z-index:2}\n.d-gt-term.on .d-gt-tip{opacity:1;transform:none}\n.d-gt-term:focus-visible{outline:1px solid var(--ink);outline-offset:2px}',
  init: "root => {\n  var term = root.querySelector('[data-term]');\n  if (!term) return;\n  var toggle = function (e) { e.stopPropagation(); term.classList.toggle('on'); };\n  term.addEventListener('click', toggle);\n  term.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(e); } });\n  document.addEventListener('click', function () { term.classList.remove('on'); });\n}",
  motion: '印刷', tags: ['术语', '浮层', '长文', '内容'],
});

/* 6 作者小传 */
A.push({
  id: 'author-bio', cat: '内容', t: '作者小传', en: 'author bio',
  d: '作者信息放文末，一行头像加两行字：资历写具体年份和做过什么，不写「资深」「热爱」。头像用姓氏一个字，因为虚构作者的真人照片会抢注意力，而首字母没有任何信息负担。',
  body: '<div class="d-ab2"><span class="d-ab2-ava">周</span><div class="d-ab2-txt"><b>周迟</b><p>做了九年灯光，前五年在剧组，后四年在剧场。现在给展厅布光。</p></div></div>',
  css: '.d-ab2{display:flex;gap:12px;max-width:340px;padding:14px 0;border-top:1px solid var(--line)}\n.d-ab2-ava{flex:0 0 36px;height:36px;border-radius:50%;display:grid;place-items:center;background:var(--ink);color:var(--paper);font-family:var(--font-serif);font-size:15px}\n.d-ab2-txt b{display:block;font-size:13px}\n.d-ab2-txt p{margin:2px 0 0;font-size:11px;line-height:1.7;color:var(--muted)}',
  init: null,
  motion: '无动效', tags: ['作者', '小传', '长文', '内容'],
});

/* 7 相关阅读 */
A.push({
  id: 'related-links', cat: '内容', t: '相关阅读', en: 'related links',
  d: '相关阅读给三条、每条带一句为什么相关：只给标题等于让人猜。三条以内是有理由的——再多，读者会认为这是推荐位而不是延伸阅读。链接文字用标题本身，不写「点击阅读」。',
  body: '<div class="d-rl"><b>接着读</b><ol><li><span>《白天也需要开灯的房间》</span><em>讲的是同一个房间，但换了南窗。</em></li><li><span>《三千五百开尔文的来历》</span><em>为什么这个数字反复出现在灯具上。</em></li><li><span>《一张白纸测显色》</span><em>三分钟能做完的土办法。</em></li></ol></div>',
  css: '.d-rl{max-width:340px;padding-top:12px;border-top:1px solid var(--line)}\n.d-rl>b{display:block;font-family:var(--font-mono);font-size:9px;letter-spacing:.12em;color:var(--faint);font-weight:400;margin-bottom:6px}\n.d-rl ol{list-style:none;margin:0;padding:0;display:grid;gap:8px;counter-reset:r}\n.d-rl li{position:relative;padding-left:18px}\n.d-rl li:before{counter-increment:r;content:counter(r);position:absolute;left:0;top:1px;font-family:var(--font-mono);font-size:9px;color:var(--faint)}\n.d-rl li span{display:block;font-size:12px;text-decoration:underline;text-decoration-color:var(--line);text-underline-offset:3px;cursor:pointer}\n.d-rl li em{display:block;font-style:normal;font-size:11px;color:var(--muted);margin-top:1px}',
  init: null,
  motion: '无动效', tags: ['相关', '阅读', '长文', '内容'],
});

/* 8 数字引述 */
A.push({
  id: 'pull-stat', cat: '内容', t: '数字引述', en: 'pull stat',
  d: '正文里的一个数字放大到 56px、单独占一行，旁边必须跟一句来源：没有来源的大数字，读者只会记住数不信。数字不加粗、不用油墨填满——它已经够大了，再上色就变成广告。',
  body: '<div class="d-ps2"><b>40<span>分钟</span></b><p>一天里，只有四十分钟桌角是亮的。</p><em>来源：2026 年 3 月，三个晴天的实测。</em></div>',
  css: '.d-ps2{max-width:340px;padding:16px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}\n.d-ps2 b{display:block;font-family:var(--font-mono);font-size:56px;line-height:1;letter-spacing:-.04em;font-weight:500}\n.d-ps2 b span{font-size:21px;letter-spacing:0;margin-left:2px;color:var(--muted)}\n.d-ps2 p{margin:8px 0 0;font-family:var(--font-serif);font-size:15px;line-height:1.7;max-width:24ch}\n.d-ps2 em{display:block;margin-top:6px;font-style:normal;font-family:var(--font-mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}',
  init: null,
  motion: '无动效', tags: ['数字', '引述', '长文', '内容'],
});

/* 9 时间线片段 */
A.push({
  id: 'timeline-block', cat: '内容', t: '时间线片段', en: 'timeline block',
  d: '时间线竖向排、左侧一条细线、节点是小圆点：横向时间线在窄屏一定会被压扁。时间放左边、内容放右边，年份用等宽字对齐，扫一眼就能比较间隔。只给有转折的年份，平年不写。',
  body: '<div class="d-tb"><ol><li><b>2018</b><div><span>第一次给剧组布光</span><p>一天拍十六个小时，学会先看窗。</p></div></li><li><b>2021</b><div><span>转到剧场</span><p>灯位固定，光要跟着人走。</p></div></li><li><b>2024</b><div><span>开始做展厅</span><p>观众会停下来，光可以更暗。</p></div></li></ol></div>',
  css: '.d-tb{max-width:340px;padding-left:4px}\n.d-tb ol{list-style:none;margin:0;padding:0 0 0 18px;border-left:1px solid var(--line)}\n.d-tb li{position:relative;padding:0 0 14px 10px}\n.d-tb li:last-child{padding-bottom:0}\n.d-tb li:before{content:"";position:absolute;left:-23px;top:6px;width:7px;height:7px;border-radius:50%;background:var(--bg);border:1px solid var(--ink)}\n.d-tb b{display:block;font-family:var(--font-mono);font-size:10px;letter-spacing:.06em;color:var(--faint);font-weight:400}\n.d-tb span{display:block;font-size:13px;margin-top:1px}\n.d-tb p{margin:1px 0 0;font-size:11px;line-height:1.7;color:var(--muted)}',
  init: null,
  motion: '无动效', tags: ['时间线', '历程', '长文', '内容'],
});

/* 10 正文对比 */
A.push({
  id: 'comparison-inline', cat: '内容', t: '正文内对比', en: 'inline comparison',
  d: '正文里的对比用两列小表，不用卡片：卡片会把两样东西推得很远，而对比需要眼睛来回扫。差异项加一行底色标记，不加红绿——红绿在纸色上对比不足。表头只有两列，第三列会开始像决策表。',
  body: '<div class="d-ci"><table><thead><tr><th></th><th>卤素</th><th>LED</th></tr></thead><tbody><tr><td>色温</td><td>三千</td><td>可调</td></tr><tr class="d-ci-hi"><td>显色</td><td>近满分</td><td>九十二</td></tr><tr><td>发热</td><td>烫手</td><td>微温</td></tr><tr><td>寿命</td><td>两千小时</td><td>两万五千</td></tr></tbody></table></div>',
  css: '.d-ci{max-width:340px}\n.d-ci table{width:100%;border-collapse:collapse;font-size:11px}\n.d-ci th{text-align:left;padding:6px 8px;border-bottom:1px solid var(--ink);font-weight:600;font-size:11px}\n.d-ci td{padding:5px 8px;border-bottom:1px solid var(--line);color:var(--muted)}\n.d-ci td:first-child{color:var(--ink);width:56px}\n.d-ci-hi td{background:color-mix(in srgb,var(--marker-hi) 22%,transparent);color:var(--ink)}',
  init: null,
  motion: '无动效', tags: ['对比', '表格', '正文', '内容'],
});

for (const a of A) { a.source = 'v4'; fs.writeFileSync(path.join(DIR, a.id + '.json'), JSON.stringify(a, null, 2) + '\n', 'utf8'); }
console.log('写入 ' + A.length + ' 条：' + A.map(a => a.id).join(', '));
