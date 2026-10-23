// 设计系统页对齐 tokens.json v1.0.0：
// 1) :root 换成正典令牌（旧变量留别名，页面其余 CSS 不用改）
// 2) A 颜色、B 字阶两节按真令牌重写
// 3) 顶部加章节导航；正文限宽到 1560，别把 4 列表格拉成 2400 宽
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const p = path.join(ROOT, 'design-system.html');
let s = fs.readFileSync(p, 'utf8');

/* ---------- 1. :root ---------- */
const oldRoot = s.slice(s.indexOf(':root{'), s.indexOf('}\n[data-theme=night]') + 1);
const newRoot = `:root{
  /* 纸与墨 */
  --bg:#f3f1e9;--paper:#fbfaf5;--ink:#20241e;--muted:#6b7860;--faint:#94a184;--line:#deded2;
  /* 油墨与标记笔 */
  --ink-vermilion:#c2402a;--ink-indigo:#2b4b8f;--ink-yellow:#e8c34a;--marker-hi:#d9f875;
  /* 状态 */
  --ok:#3d7347;--warn:#a8502f;
  /* 字阶（8 档） */
  --fs-9:9px;--fs-11:11px;--fs-13:13px;--fs-15:15px;--fs-21:21px;--fs-34:34px;--fs-56:56px;--fs-96:96px;
  /* 间距（8 档，4 的倍数） */
  --sp-4:4px;--sp-8:8px;--sp-12:12px;--sp-16:16px;--sp-24:24px;--sp-40:40px;--sp-64:64px;--sp-96:96px;
  /* 圆角（5 档） */
  --radius-table:0px;--radius-tag:2px;--radius-control:6px;--radius-card:10px;--radius-pill:999px;
  /* 时长与曲线 */
  --dur-feedback:120ms;--dur-move:180ms;--dur-reveal:280ms;--dur-ambient:900ms;
  --ease-mechanical:linear;--ease-physical:cubic-bezier(.34,1.56,.64,1);--ease-print:cubic-bezier(.2,.75,.25,1);
  /* 阴影（3 档）与描边（2 档） */
  --shadow-divider:0 1px 0 var(--line);--shadow-press:inset 0 1px 0 #fff5;--shadow-overlay:0 12px 24px -8px #20241e26;
  --border-default:1px var(--line);--border-strong:1px var(--ink);
  /* 旧名别名：本页其余 CSS 仍按旧名取值，映射到上面对应档位 */
  --s1:var(--sp-4);--s2:var(--sp-8);--s3:var(--sp-12);--s4:var(--sp-16);--s5:var(--sp-24);--s6:var(--sp-40);--s7:var(--sp-64);
  --r1:var(--radius-control);--r2:var(--radius-card);--r3:var(--radius-card);--r4:var(--radius-card);--rpill:var(--radius-pill);
  --sh1:var(--shadow-divider);--sh2:var(--shadow-overlay);--sh3:var(--shadow-overlay);
  --f11:var(--fs-11);--f12:var(--fs-11);--f13:var(--fs-13);--f14:var(--fs-15);--f17:var(--fs-21);--f22:var(--fs-34);--f28:var(--fs-34);
  --ease:var(--ease-print);
  /* 退役色：只保留给本页旧的示例块，新代码别用 */
  --lime:var(--marker-hi);--mint:color-mix(in srgb,var(--ink) 14%,var(--paper));--amber:var(--ink-yellow);
  --coral:var(--ink-vermilion);--red:var(--ink-vermilion);--lav:color-mix(in srgb,var(--ink-indigo) 14%,var(--paper));--blue:var(--ink-indigo);
}`;
s = s.replace(oldRoot, newRoot);

/* ---------- 2. 夜间 ---------- */
s = s.replace(`[data-theme=night]{--bg:#121610;--paper:#191d18;--ink:#e8efe0;--muted:#a9b8a0;--faint:#7b8a72;--line:#2c3327;
  --ok:#8fd3a4;--warn:#f0a184;
  --sh1:0 1px 2px #0006;--sh2:0 6px 18px #0007;--sh3:0 18px 40px #000a}`,
`[data-theme=night]{--bg:#121610;--paper:#191d18;--ink:#e8efe0;--muted:#a9b8a0;--faint:#7b8a72;--line:#2c3327;
  --ok:#8fd3a4;--warn:#f0a184;
  --shadow-divider:0 1px 0 var(--line);--shadow-press:inset 0 1px 0 #ffffff14;--shadow-overlay:0 12px 24px -8px #00000066;
  --sh1:var(--shadow-divider);--sh2:var(--shadow-overlay);--sh3:var(--shadow-overlay)}`);

/* ---------- 3. 版心与章节导航 ---------- */
s = s.replace('main{max-width:none;margin:0 auto;padding:28px clamp(24px,4vw,64px) 100px;display:flex;flex-direction:column;gap:40px}',
`main{max-width:1560px;margin:0 auto;padding:28px clamp(24px,4vw,64px) 100px;display:flex;flex-direction:column;gap:40px}
.section-nav{position:sticky;top:49px;z-index:9;display:flex;gap:6px;flex-wrap:wrap;padding:8px clamp(24px,4vw,64px);background:var(--bg);border-bottom:1px solid var(--line)}
.section-nav a{font:inherit;font-size:11px;letter-spacing:.02em;padding:4px 10px;border:1px solid var(--line);border-radius:999px;color:var(--muted);text-decoration:none;background:var(--paper)}
.section-nav a:hover{color:var(--ink);border-color:var(--ink)}
.section-nav b{font-family:var(--font-mono,ui-monospace);font-weight:400;color:var(--faint);margin-right:6px}
@media (max-width:900px){.section-nav{top:45px;overflow:auto;flex-wrap:nowrap}}`);

/* ---------- 4. A 颜色 ---------- */
const aStart = s.indexOf('<section id="design">');
const aEnd = s.indexOf('</section>', aStart) + '</section>'.length;
const newA = `<section id="design">
  <h2>A 颜色：三层，一层比一层省</h2>
  <p class="lead">纸与墨是底，油墨只标状态，标记笔只做荧光笔。换主题只换纸与墨，油墨不动。<b>正文对比度 ≥ 7:1，次要 ≥ 4.5:1。</b></p>
  <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(120px,1fr))">
    <div class="token"><i class="sw" style="background:var(--bg)"></i>--bg 纸底</div>
    <div class="token"><i class="sw" style="background:var(--paper)"></i>--paper 面板</div>
    <div class="token"><i class="sw" style="background:var(--ink)"></i>--ink 主墨</div>
    <div class="token"><i class="sw" style="background:var(--muted)"></i>--muted 次级</div>
    <div class="token"><i class="sw" style="background:var(--faint)"></i>--faint 弱墨</div>
    <div class="token"><i class="sw" style="background:var(--line)"></i>--line 描边</div>
  </div>
  <table class="spec" style="margin-top:16px">
    <tr><th>油墨</th><th>值</th><th>用在哪</th><th>规矩</th></tr>
    <tr><td><span class="sw" style="display:inline-block;width:14px;height:14px;vertical-align:-2px;background:var(--ink-vermilion);border-radius:2px"></span> --ink-vermilion 朱</td><td>#c2402a</td><td>危险、删除、当前选中</td><td rowspan="3">一页最多两种油墨，禁止三色同屏</td></tr>
    <tr><td><span class="sw" style="display:inline-block;width:14px;height:14px;vertical-align:-2px;background:var(--ink-indigo);border-radius:2px"></span> --ink-indigo 靛</td><td>#2b4b8f</td><td>焦点环、信息、链接</td></tr>
    <tr><td><span class="sw" style="display:inline-block;width:14px;height:14px;vertical-align:-2px;background:var(--ink-yellow);border-radius:2px"></span> --ink-yellow 黄</td><td>#e8c34a</td><td>提醒、待处理</td></tr>
    <tr><td><span class="sw" style="display:inline-block;width:14px;height:14px;vertical-align:-2px;background:var(--marker-hi);border-radius:2px"></span> --marker-hi 荧光</td><td>#d9f875</td><td>只在「此刻看这里」时用</td><td>全站 ≤3 处，禁作背景</td></tr>
    <tr><td><span class="sw" style="display:inline-block;width:14px;height:14px;vertical-align:-2px;background:var(--ok);border-radius:2px"></span> --ok 成功</td><td>#3d7347</td><td>成功、已完成</td><td rowspan="2">只标状态，不作装饰</td></tr>
    <tr><td><span class="sw" style="display:inline-block;width:14px;height:14px;vertical-align:-2px;background:var(--warn);border-radius:2px"></span> --warn 警示</td><td>#a8502f</td><td>警示、待确认</td></tr>
  </table>
  <p class="lead" style="margin:14px 0 0">退役：<span style="background:color-mix(in srgb,var(--ink) 14%,var(--paper));padding:1px 6px;border-radius:2px;font-family:var(--font-mono,ui-monospace);font-size:11px">--mint</span> <span style="background:color-mix(in srgb,var(--ink-indigo) 14%,var(--paper));padding:1px 6px;border-radius:2px;font-family:var(--font-mono,ui-monospace);font-size:11px">--lav</span> 这类彩色只留在存量老资产里，新资产只用上面两行油墨。</p>
</section>`;
s = s.slice(0, aStart) + newA + s.slice(aEnd);

/* ---------- 5. B 字阶与间距 ---------- */
const bStart = s.indexOf('<h2>B 字阶与间距</h2>');
const bSecStart = s.lastIndexOf('<section>', bStart);
const bEnd = s.indexOf('</section>', bStart) + '</section>'.length;
const newB = `<section>
  <h2>B 字阶、间距、圆角、阴影</h2>
  <p class="lead">八档字阶、八档间距、五档圆角、三档阴影。表外数字一律不用；圆角按层级取，禁止整页同值。</p>
  <table class="spec">
    <tr><th>令牌</th><th>字号 / 行高</th><th>用在哪</th><th>样例</th></tr>
    <tr><td>--fs-9</td><td>9px</td><td>角标、编号、图注编号</td><td><span style="font-size:var(--fs-9);color:var(--faint);font-family:var(--font-mono,ui-monospace)">SPEC 04 · 2026</span></td></tr>
    <tr><td>--fs-11</td><td>11px</td><td>时间戳、标签、次要说明</td><td><span style="font-size:var(--fs-11);color:var(--muted)">3 条未读 · 刚刚更新</span></td></tr>
    <tr><td>--fs-13</td><td>13px</td><td>紧凑正文、表格单元</td><td><span style="font-size:var(--fs-13)">紧凑模式下的正文行，一行能多放几个字</span></td></tr>
    <tr><td>--fs-15</td><td>15px / 1.7</td><td><b>正文默认</b></td><td><span style="font-size:var(--fs-15)">把复杂留给系统，把简单留给用户。</span></td></tr>
    <tr><td>--fs-21</td><td>21px</td><td>区块标题、页面小节</td><td><span style="font-size:var(--fs-21);font-weight:650;letter-spacing:-.01em">把重要的留下来</span></td></tr>
    <tr><td>--fs-34</td><td>34px</td><td>页面主标题</td><td><span style="font-size:var(--fs-34);font-weight:650;letter-spacing:-.02em">把复杂交给我们</span></td></tr>
    <tr><td>--fs-56</td><td>56px</td><td>首屏大字（每页 ≤1 处）</td><td><span style="font-size:var(--fs-56);font-weight:650;letter-spacing:-.03em">缓坡</span></td></tr>
    <tr><td>--fs-96</td><td>96px</td><td>封面字（仅示范站）</td><td><span style="font-size:var(--fs-96);font-weight:700;letter-spacing:-.03em;line-height:1">格</span></td></tr>
  </table>
  <div class="chips" style="margin-top:16px">
    <span class="token"><i class="sw" style="height:12px;width:var(--sp-4)"></i>4</span>
    <span class="token"><i class="sw" style="height:12px;width:var(--sp-8)"></i>8</span>
    <span class="token"><i class="sw" style="height:12px;width:var(--sp-12)"></i>12</span>
    <span class="token"><i class="sw" style="height:12px;width:var(--sp-16)"></i>16</span>
    <span class="token"><i class="sw" style="height:12px;width:var(--sp-24)"></i>24</span>
    <span class="token"><i class="sw" style="height:12px;width:var(--sp-40)"></i>40</span>
    <span class="token"><i class="sw" style="height:12px;width:var(--sp-64)"></i>64</span>
    <span class="token"><i class="sw" style="height:12px;width:var(--sp-96)"></i>96</span>
  </div>
  <div class="chips" style="margin-top:14px">
    <span style="border-radius:var(--radius-table);border:1px solid var(--line);padding:4px 10px;font-size:var(--fs-11)">table 0</span>
    <span style="border-radius:var(--radius-tag);border:1px solid var(--line);padding:4px 10px;font-size:var(--fs-11)">tag 2</span>
    <span style="border-radius:var(--radius-control);border:1px solid var(--line);padding:4px 10px;font-size:var(--fs-11)">control 6</span>
    <span style="border-radius:var(--radius-card);border:1px solid var(--line);padding:4px 10px;font-size:var(--fs-11)">card 10</span>
    <span style="border-radius:var(--radius-pill);border:1px solid var(--line);padding:4px 10px;font-size:var(--fs-11)">pill 999</span>
    <span style="box-shadow:var(--shadow-divider);border-radius:var(--radius-tag);padding:4px 10px;font-size:var(--fs-11);background:var(--paper)">divider</span>
    <span style="box-shadow:var(--shadow-press);border-radius:var(--radius-tag);padding:4px 10px;font-size:var(--fs-11);background:var(--paper)">press</span>
    <span style="box-shadow:var(--shadow-overlay);border-radius:var(--radius-tag);padding:4px 10px;font-size:var(--fs-11);background:var(--paper)">overlay</span>
  </div>
  <table class="spec" style="margin-top:16px">
    <tr><th>时长</th><th>值</th><th>用在哪</th></tr>
    <tr><td>--dur-feedback</td><td>120ms</td><td>按下、悬停、勾选这类小反馈</td></tr>
    <tr><td>--dur-move</td><td>180ms</td><td>位移、展开、抽屉</td></tr>
    <tr><td>--dur-reveal</td><td>280ms</td><td>整块揭示、翻面、滚动立起</td></tr>
    <tr><td>--dur-ambient</td><td>900ms</td><td>环境动画；超过必须写理由</td></tr>
  </table>
</section>`;
s = s.slice(0, bSecStart) + newB + s.slice(bEnd);

/* ---------- 6. 章节导航 ---------- */
if (!s.includes('section-nav')) {
  const nav = `<nav class="section-nav" aria-label="章节">
  <a href="#design"><b>A</b>颜色</a>
  <a href="#type"><b>B</b>字阶与间距</a>
  <a href="#icons-sec"><b>C</b>图标</a>
  <a href="#empties-sec"><b>D</b>空态</a>
  <a href="#matrix-sec"><b>E</b>状态矩阵</a>
  <a href="#specs"><b>·</b>组件图鉴</a>
  <a href="#content"><b>F–J</b>内容呈现</a>
  <a href="#content-specs"><b>·</b>内容图鉴</a>
</nav>`;
  s = s.replace('</header>', '</header>\n' + nav);
}
s = s.replace('<h2>B 字阶、间距、圆角、阴影</h2>', '<h2 id="type">B 字阶、间距、圆角、阴影</h2>');
s = s.replace('<h2>C 图标集（24 个 · 24×24 线性 · stroke 1.8）</h2>', '<h2 id="icons-sec">C 图标集（24 个 · 24×24 线性 · stroke 1.8）</h2>');
s = s.replace('<h2>D 空态插画（几何 ✳ 体系）</h2>', '<h2 id="empties-sec">D 空态插画（几何 ✳ 体系）</h2>');
s = s.replace('<h2>E 组件状态矩阵</h2>', '<h2 id="matrix-sec">E 组件状态矩阵</h2>');

fs.writeFileSync(p, s, 'utf8');
console.log('root:', s.includes('--radius-pill'), '| A:', s.includes('三层，一层比一层省'), '| B:', s.includes('--fs-96'), '| nav:', s.includes('section-nav'));
