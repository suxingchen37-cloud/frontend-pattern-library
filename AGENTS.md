# 本仓库的生成流水线（人机共用）

这个站点**不是手改页面来的**。所有内容长在 `data/` 里，页面与 AI 产物都是生成物。

## 唯一真相 / 生成物

| 层 | 位置 | 归属 |
|---|---|---|
| 资产数据（唯一真相） | `data/assets/motion/<id>.json` | 可写，按 `data/schema.md` |
| 令牌（数字唯一来源） | `data/tokens.json` | 只增不改语义 |
| 分类登记 | `data/categories.json` | 新分类必须先登记 |
| `llms.txt` 正文源 | `data/rules.md` | 改文案只改这里，不动代码 |
| 站点合成器 | `tools/site.mjs` | **勿改，改了同步跑** |
| AI 产物生成器 | `tools/build.mjs` | **勿改，改了同步跑** |
| 一致性自检 | `tools/verify.mjs` | 只读 |
| 站点补丁产物 | `lab-extra4.js`、`index.html`、`motion-lab.html` | **生成物，勿手改** |
| AI 取料产物 | `agent/`、`llms.txt` | **生成物，勿手改** |

## 改完数据必须跑这三条

```
node tools/build.mjs && node tools/site.mjs && node tools/verify.mjs
```

三条都退出 0 才算改完。`--check` 版本用于确认没有漂移：

```
node tools/build.mjs --check && node tools/site.mjs --check
```

## 协作约定（多 agent 同时在场时）

1. `tools/build.mjs`、`tools/site.mjs`、`lab-extra4.js`、`data/schema.md` 由站点维护方持有，另一方请勿修改。
2. `data/assets/motion/*.json` 里 `source: "v4"` 的条目（新增批次）与其余条目可以分头维护，但**同一时刻只允许一个人跑 build/site**。
3. 改 `data/` 的人负责跑上面那三条命令；不跑就等于把漂移留给下一个人。
4. 新增资产一律按 `data/schema.md` 写 JSON，不要手改 `motion-lab.html`、`index.html`、`agent/`。
5. 分类只用 `data/categories.json` 已登记的；要加新分类先登记。

## 站点

`http://127.0.0.1:8801/?tab=motion` —— 动效与交互实验室。
卡片的增减、计数、分类列表全部由数据推导，不需要手改任何 HTML。

## 给另一位协作者的留言（2026-10-23 17:40）

我这侧已完成的（都已提交进 git，可 `git log` 看）：
- 首页重做：四张卡墙 → 印刷目录版式（`index.html`，提交 `ca0f300`）
- 184 条全量冒烟测试：无空舞台、无页面横向滚动、CSS 变量齐全、控制台 0 报错
- `llms.txt` 正文已抽到 `data/rules.md`（占位符渲染；缺文件或未知占位符会直接构建失败）
- git 基线已建（`agent/` 已忽略，见 `.gitignore`）

### 需要你配合的三件事

1. **改完 `data/` 就跑这三条**，别只改数据：
   ```
   node tools/build.mjs && node tools/site.mjs && node tools/verify.mjs
   ```
   三条都退出 0 才算改完。现在工作区积了 141 个未提交文件，一旦有人在中间构建，产物会和数据对不上。

2. **小批提交**。一次改 127 个 JSON 很难回退，也看不出哪一步引入了问题。

3. **以下文件归我这侧，请不要改**：
   - `tools/site.mjs`（它会写 `motion-lab.html`，两边同时改会互相覆盖）
   - `tools/verify.mjs`（三方一致性闸门，改了等于改判据）
   - `index.html`（首页刚重做并提交）

### 我正在等的

- `motion-lab.html` 与 `lab-*.js` 你正在改，我不动。
- 你告一段落后，我要做一轮 **chrome 视觉收敛**：28 种软阴影收到 3 档、荧光绿 `#d9f875` 从 26 处降到 ≤3 处、分类标题去掉 `text-transform:uppercase`、标题里的中点去掉。**你改完在提交信息里写一句「motion-lab 告一段落」，我就接着上。**

### 一件想跟你分工的事

`motion` 字段还有 144 条空着（机械/物理/印刷）。这个要批量写 `data/assets/motion/*.json`——如果你还在连续改这些文件，谁先写谁覆盖。

**建议：这 144 条的标注由我做**（我按类别给默认值，再人工抽查），你专心清剩下的 warning。你要是想自己做，在提交信息里说一声。

### 两个提醒

- 临时脚本请继续用 `tools/_` 前缀；目前 `tools/_scan.mjs`、`tools/_scan2.mjs`、`tools/_fix-ss.mjs`、`tools/_llms.before.txt` 都还在工作区没提交，别不小心混进产物。
- `agent/` 是生成物（700 个文件），已在 `.gitignore`；不要手改，改数据后重建即可。

### 已知待办（可能你还不知道）

- **`agent/` 被 gitignore，部署到 GitHub 后 `/agent/index.json` 会 404**，需要「CI 里构建」或「把 agent 一并提交」二选一
- 需要 GitHub Actions 在推送时跑 `build --check` + `verify`
- 仓库根还没有 `README.md`，首屏应该写清这条流水线

—— 另一个 agent（负责数据管道、站点视觉、验收与 git）

## 改 llms.txt 的正文

正文在 `data/rules.md`，不写在代码里。它用占位符引用数据，改完跑 `node tools/build.mjs` 就会填进去：

- `{{assetCount}}` / `{{catCount}}` / `{{tokensVersion}}` / `{{catList}}`
- `{{fsList}}` `{{spList}}` `{{radiusList}}` `{{durList}}` `{{easeList}}` `{{inkList}}` `{{shadowList}}` `{{borderList}}`
- `{{lhBody}}` `{{lhNote}}` `{{lhDisplay}}` `{{trDisplay}}` `{{trBody}}` `{{trMono}}`
- `{{paperBg}}` `{{paperPanel}}` `{{nightBg}}` `{{nightPanel}}` 与 `{{inkMain}}` 等墨色
- `{{radiusPolicy}}` `{{spacePolicy}}` `{{durationPolicy}}` `{{shadowPolicy}}` `{{borderPolicy}}` `{{inkPolicy}}` `{{markerPolicy}}`
- `{{markerHi}}` `{{durAmbient}}` `{{retiredLav}}` `{{bannedWords}}`
- `{{#emptyAssets}}…{{/emptyAssets}}`：资产为空时才出现的段落

写了不存在的占位符、或删掉 `rules.md`，`build.mjs` 会直接报错退出 1 —— 不会悄悄产出半截文件。

## 存档约定（git）

这个目录是一个 git 仓库，用于记录改动历史、对比差异、精确回退。

- **生成物不入库**：`agent/`（700 个产物，可由 `node tools/build.mjs` 重建）已列入 `.gitignore`。
  `llms.txt` 与 `lab-extra4.js` 虽也是生成物，但它们是站点/AI 入口，入库便于 diff 文案变化。
- **谁改谁提交**，提交说明写清「改了什么、为什么」；不要提交生成物或临时文件。
- 看改了什么：`git diff`（未提交）或 `git show --stat HEAD`（上一次提交）。
- 回退到某个提交：`git reset --hard <hash>`（整份）或 `git checkout <hash> -- <file>`（单个文件）。
- 换行统一 LF（见 `.gitattributes`），避免 Windows 把生成物改成 CRLF 后 `--check` 误报漂移。
