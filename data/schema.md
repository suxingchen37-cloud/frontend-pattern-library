# 资产数据契约 v1

一条资产 = 一个 JSON 文件。位置：`data/assets/motion/<id>.json`。
文件名必须与 `id` 完全一致（`<id>.json`）。

## 字段

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| id | string | 是 | 全局唯一，kebab-case，只用 [a-z0-9-]，不得与既有文件重名 |
| cat | string | 是 | 分类。必须已存在于`data/categories.json` 已登记的分类中，或在 `data/categories.json` 中显式登记 |
| t | string | 是 | 中文名，短，不带标点结尾 |
| en | string | 是 | 英文名，小写，用于检索 |
| d | string | 是 | 一句话说明"为什么这样做"。**必须给理由，禁止写"提升体验"** |
| body | string | 是 | HTML 片段。只用本条自己的 class 前缀 `d-`，禁止全局选择器；行内 `style` 只允许 `--自定义属性`（逐元素数据） |
| css | string | 是 | 纯 CSS 文本，不带 `<style>` 标签，不写 `#c-` 前缀（外层自动作用域） |
| init | string \| null | 是 | 交互初始化函数的源码字符串，签名为 `root => { ... }`；无交互填 null |
| source | string | 是 | 来源批次：`inline` / `lab-more` / `lab-extra2` / `lab-extra3` / `v4` / `v5`（两批新增，v5 为第二批） |
| motion | string | 是 | 运动语言：`机械` / `物理` / `印刷` / `无动效`。判据看这条自己用的曲线，不看名字；`无动效` 只描述现状——要加动画随时按前三族加 |
| tags | string[] | 否 | 检索词，2–5 个 |

## 校验与风格边界

结构错误（如缺字段、非法 id、未登记分类、init 语法错误、截断预览的 style/script）直接拒收。
质量契约默认报告 WARN，`node tools/build.mjs --strict` 将 WARN 升级为失败；CI 使用严格模式。

1. `id` 唯一且与文件名一致，`body` 非空，`css` 是字符串；纯行为资产可用非空 init 配合空 css。
2. class 使用 `d-` 前缀；init 中的选择器跟随 body，避免拿不到元素。
3. body 的行内 style 只允许逐元素数据所需的 `--自定义属性`；布局与外观放在 css。
4. css 不手写渲染器的 `#c-` / `#pv-` 前缀；keyframes 名称带 `d-<id>-` 前缀。
5. transition 列出实际变化的属性，避免 transition:all 引入无关动画。
6. css 变量在预览 tokens、本条代码中定义，或带有效 fallback。
7. 说明字段写具体设计理由，不以泛化宣传词代替内容；motion 与 tags 支持检索。

**完全不预设风格**：不封禁颜色、材质、阴影或某条曲线，不要求固定圆角值或刻意破格。
预览 tokens 是运行示例的数值来源，不限制消费方的品牌与视觉表现。避免 AI 模板感的判断见 `data/rules.md`。

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
4. 跑 `node tools/emit.mjs`、`node tools/verify.mjs`，再运行 build / site / emit 的 `--check`；build 加 `--strict`
5. 在浏览器打开 `agent/preview/<id>.html` 看一眼

## 谁是真源（2026-10-23 起）

`data/assets/motion/*.json` 是唯一真源，两边都是产物：

- AI 侧：`tools/build.mjs` → `agent/**` + `llms.txt`
- 人看侧：`tools/site.mjs` → `lab-extra4.js`（source=v4）；`tools/emit.mjs` → `motion-lab.html` 内联数组 + `lab-more.js` + `lab-extra2.js` + `lab-extra3.js`（老 144 条）

**`tools/extract.mjs` 是一次性导入器，不要再跑**：它会把 `motion` 无条件写成空串，等于抹掉元数据；
`--prune` 更会直接删掉 40 条 v4 资产。emit 自带回读核对（逐字段比对 JSON），要验证保真跑 `node tools/emit.mjs --check`。

**不要手改 `motion-lab.html`、`lab-more.js`、`lab-extra*.js` 或首页计数——那些是生成物。**
