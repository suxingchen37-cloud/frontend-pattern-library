# 本仓库的生成流水线（人机共用）

这个站点**不是手改页面来的**。内容长在 `data/` 里，页面与 AI 产物都是生成物。

## 当前规模

条数以 `agent/index.json` 的 `count` 为准，**不要在其他地方写死**。截至 2026-10-23 18:40 的快照：

- 资产 **224 条 / 26 分类**：老 144 条（`inline` + `lab-more` + `lab-extra2` + `lab-extra3`）+ 新增（`v4` / `v5`，含「图表」新分类）
- 页面：总览、动效实验室、设计系统、纵深示范（`depth.html`）、反例对照（`ai-tells.html`）、整站实战 `site/`
- 生成物：`agent/`、`llms.txt`、`lab-extra4.js`
- 远端：`github.com/suxingchen37-cloud/frontend-pattern-library`（public）

## 唯一真相 / 生成物

| 层 | 位置 | 说明 |
|---|---|---|
| 资产数据（唯一真相） | `data/assets/motion/<id>.json` | 按 `data/schema.md` 写 |
| 令牌（数字唯一来源） | `data/tokens.json` | 只增不改语义 |
| 分类登记 | `data/categories.json` | 新分类必须先登记 |
| `llms.txt` 正文源 | `data/rules.md` | 改文案只改这里，不动代码 |
| 站点合成器 | `tools/site.mjs` | 改后必须重跑 |
| AI 产物生成器 | `tools/build.mjs` | 改后必须重跑 |
| 一致性自检 | `tools/verify.mjs` | 只读 |
| 站点补丁产物 | `lab-extra4.js`、`index.html`、`motion-lab.html` | 生成物，勿手改 |
| AI 取料产物 | `agent/`、`llms.txt` | 生成物，**当前入库**，勿手改 |

## 改完数据必须跑这三条

```
node tools/build.mjs && node tools/site.mjs && node tools/verify.mjs
```

三条都退出 0 才算改完。因为 `agent/` 现在入库，改完还要把再生后的 `agent/` 一起提交——
否则线上（jsDelivr / raw）取到的是旧产物。只确认漂移：

```
node tools/build.mjs --check && node tools/site.mjs --check
```

## 协作约定（多 agent / 多人同时在场时）

1. **同一时刻只允许一个人跑 `build` + `site`**，否则产物互相覆盖。
2. **谁改 `data/` 谁跑那三条 + 提交 `agent/` 变更**；不跑等于把漂移留给下一个人。
3. 新增资产按 `data/schema.md` 写 JSON；**不要手改** `agent/`、`index.html`、`motion-lab.html`、`lab-extra4.js`。
4. 分类只用 `data/categories.json` 已登记的；要加新分类先登记。
5. 临时脚本用 `tools/_` 前缀，别混进提交。
6. 提交说明写清「改了什么、为什么」；用 `git log` 能看懂才能回退。

## 站点与取料

- 本地站点：`http://127.0.0.1:8801/?tab=motion`
- AI 取料（国内优先）：
  `https://cdn.jsdelivr.net/gh/suxingchen37-cloud/frontend-pattern-library@main/`
  索引 `agent/index.json`，单条 `agent/blocks/<id>.html|.css|.js`，预览 `agent/preview/<id>.html`
- raw 兜底：`https://raw.githubusercontent.com/suxingchen37-cloud/frontend-pattern-library/main/`（国内常超时）

卡片的增减、计数、分类列表全部由数据推导，不需要手改任何 HTML。

## 改 llms.txt 的正文

正文在 `data/rules.md`，用占位符引用数据，改完跑 `node tools/build.mjs` 就会填进去：

- `{{assetCount}}` / `{{catCount}}` / `{{tokensVersion}}` / `{{catList}}`
- `{{fsList}}` `{{spList}}` `{{radiusList}}` `{{durList}}` `{{easeList}}` `{{inkList}}` `{{shadowList}}` `{{borderList}}`
- `{{lhBody}}` `{{lhNote}}` `{{lhDisplay}}` `{{trDisplay}}` `{{trBody}}` `{{trMono}}`
- `{{paperBg}}` `{{paperPanel}}` `{{nightBg}}` `{{nightPanel}}` 与 `{{inkMain}}` 等墨色
- `{{radiusPolicy}}` `{{spacePolicy}}` `{{durationPolicy}}` `{{shadowPolicy}}` `{{borderPolicy}}` `{{inkPolicy}}` `{{markerPolicy}}`
- `{{statusList}}`（状态色）
- `{{markerHi}}` `{{durAmbient}}` `{{retiredLav}}` `{{bannedWords}}`
- `{{#emptyAssets}}…{{/emptyAssets}}`：资产为空时才出现的段落

写了不存在的占位符、或删掉 `rules.md`，`build.mjs` 会直接报错退出 1 —— 不会悄悄产出半截文件。

## 存档约定（git）

- 仓库是公开的；`agent/` 目前入库（786 个生成物），其余生成物（`llms.txt`、`lab-extra4.js`）同样入库以便 diff。
- **谁改谁提交**，说明写清「改了什么、为什么」。
- 看改动：`git diff` / `git show --stat HEAD`；回退：`git reset --hard <hash>` 或 `git checkout <hash> -- <file>`。
- 换行统一 LF（见 `.gitattributes`），避免 Windows 把生成物改成 CRLF 后 `--check` 误报漂移。
- 本地历史备份分支：`local-history-2026-10-23`（合并远端历史前的那条独立历史）。

## 待办（未完成，按优先级）

1. **GitHub Actions 未启用**：推送令牌缺 `workflow` 权限；两个工作流暂存在
   `D:\111\_poc-world\_github-pending\github\workflows\`。授权后放回 `.github/workflows/` 并推送。
2. **Pages 未配置**：启用后把 Source 设为 GitHub Actions（`deploy-pages` 按白名单发布，已排除 `data/`、`tools/`）。
   在 Pages 可用之前，AI 取料走 jsDelivr / raw。
3. **设计系统与内容呈现尚未接入数据管道**：这两块仍是手写 HTML，只有动效 206 条由 `data/` 驱动。
4. 移动端与可访问性未做系统巡检（375 / 768 / 1280、键盘 Tab、夜间对比度）。
