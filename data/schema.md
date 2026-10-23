# 资产数据契约 v1

一条资产 = 一个 JSON 文件。位置：`data/assets/motion/<id>.json`。
文件名必须与 `id` 完全一致（`<id>.json`）。

## 字段

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| id | string | 是 | 全局唯一，kebab-case，只用 [a-z0-9-]，不得与既有文件重名 |
| cat | string | 是 | 分类。必须已存在于现有 22 个分类中，或在 `data/categories.json` 中显式登记 |
| t | string | 是 | 中文名，短，不带标点结尾 |
| en | string | 是 | 英文名，小写，用于检索 |
| d | string | 是 | 一句话说明"为什么这样做"。**必须给理由，禁止写"提升体验"** |
| body | string | 是 | HTML 片段。只用本条自己的 class 前缀 `d-`，禁止全局选择器；行内 `style` 只允许 `--自定义属性`（逐元素数据） |
| css | string | 是 | 纯 CSS 文本，不带 `<style>` 标签，不写 `#c-` 前缀（外层自动作用域） |
| init | string \| null | 是 | 交互初始化函数的源码字符串，签名为 `root => { ... }`；无交互填 null |
| source | string | 是 | 来源批次：`inline` / `lab-more` / `lab-extra2` / `lab-extra3` / `v4` |
| motion | string | 是 | 运动语言：`机械` / `物理` / `印刷` / `无动效`。判据看这条自己用的曲线，不看名字；`无动效` 只描述现状——要加动画随时按前三族加 |
| tags | string[] | 否 | 检索词，2–5 个 |

## 硬性约束（机器校验，任一不过即拒收）

1. `id` 唯一，且与文件名一致
2. `body` 非空；`css` 允许为空，但仅限纯行为资产（`init` 非空），否则算漏写样式
3. `body` 里出现的所有 class 必须以 `d-` 开头；`init` 里引用类名的地方（选择器字符串、`class="..."` 拼串）必须跟着一起改，否则交互会取到 null
4. `body` 的行内 `style` 只允许写 `--自定义属性`（波形高度、热力深浅这类逐元素数据）；任何样式属性（`height`/`color`/`margin`…）必须收进 `css`
5. `css` 里不得出现 `#c-` / `#pv-` 前缀（那是渲染层自动加的）
6. `css` 里所有 `@keyframes` 名称必须带本条 id 前缀（如 `@keyframes d-<id>-in`），防止跨条冲突
7. 不得使用黑名单样式：`transition:all`、`cubic-bezier(.4,0,.2,1)`、`rgba(0,0,0,`、`backdrop-filter`、紫色系 hex
8. `css` 里的圆角只能取 `0 / 2 / 6 / 10 / 999`（见 `data/tokens.json`）；百分比（`50%` 圆点、头像）是形状，不受档位限制
9. `css` 引用的 `--变量` 必须在 `data/tokens.json` 生成的表里，或本条自己定义过
10. `d` 不得命中禁词：赋能 一键 无缝 极致 沉浸 丝滑 焕新

> 2–4、8、9 是 2026-10-23 清老资产时定下来的口径：老批次里 71 条是纯静态样板、
> 33 条的按钮一直靠本站宿主样式才有外观（抄走就是裸按钮），所以行内数据与通用件都单独立了规矩。

## 示例

```json
{
  "id": "fade-stagger",
  "cat": "入场",
  "t": "错峰淡入",
  "en": "staggered fade-up",
  "d": "每项延迟 40ms 是因为低于 30ms 人看不出顺序、高于 60ms 会显得慢。",
  "body": "<div class=\"d-stack\"><i class=\"d-chip\"></i></div>",
  "css": ".d-stack{display:flex;flex-direction:column;gap:8px}",
  "init": null,
  "source": "inline",
  "motion": "印刷",
  "tags": ["入场", "列表", "延迟"]
}
```

## 新增一条的步骤

1. 写 `data/assets/motion/<id>.json`（`source` 填 `v4`，并把 id 追加进 `data/order.json` 只在改老批次时需要）
2. 跑 `node tools/build.mjs`（生成 agent/** 与 llms.txt）
3. 跑 `node tools/site.mjs`（v4 → lab-extra4.js 与站点计数）
4. 跑 `node tools/build.mjs --check` 与 `node tools/site.mjs --check` 确认无漂移
5. 在浏览器打开 `agent/preview/<id>.html` 看一眼

## 谁是真源（2026-10-23 起）

`data/assets/motion/*.json` 是唯一真源，两边都是产物：

- AI 侧：`tools/build.mjs` → `agent/**` + `llms.txt`
- 人看侧：`tools/site.mjs` → `lab-extra4.js`（source=v4）；`tools/emit.mjs` → `motion-lab.html` 内联数组 + `lab-more.js` + `lab-extra2.js` + `lab-extra3.js`（老 144 条）

**`tools/extract.mjs` 是一次性导入器，不要再跑**：它会把 `motion` 无条件写成空串，等于抹掉元数据；
`--prune` 更会直接删掉 40 条 v4 资产。emit 自带回读核对（逐字段比对 JSON），要验证保真跑 `node tools/emit.mjs --check`。

**不要手改 `motion-lab.html`、`lab-more.js`、`lab-extra*.js` 或首页计数——那些是生成物。**
