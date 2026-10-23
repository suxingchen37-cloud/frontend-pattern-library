# 前端模式库

一套可直接点、可直接复制的通用前端参考库：动效与交互 94 个效果、设计系统、内容呈现规范。纯静态、零依赖、单页入口。

## 运行

```bash
node serve.mjs
# http://127.0.0.1:8801/
```

端口可用 `PORT=8802 node serve.mjs` 覆盖。

## 结构

| 标签 | 文件 | 内容 |
|---|---|---|
| 动效与交互 | `motion-lab.html` + `lab-more.js` + `lab-extra2.js` | 94 个真交互效果，18 个分类；点「选中」→「复制清单」取 id |
| 设计系统 | `design-system.html#design` | 颜色令牌、7 档字阶、间距/圆角/阴影、24 个可复制图标、空态插画、组件六态矩阵 |
| 内容呈现 | `design-system.html#content` | Markdown、代码块（行号/高亮/复制）、diff、图片查看器、文案语气 |

`index.html` 是唯一入口与标签外壳；页面选择存 `localStorage`，夜间主题通过 `?theme=` 与 `postMessage` 同步进内容页。

## 加一个效果

1. 在 `lab-more.js` 或 `lab-extra2.js` 的 `window.DEMOS_EXTRA` 里追加 `{ id, cat, t, en, d, body, css }`。
2. 需要交互时，在 `window.INITS_EXTRA` 里挂同名初始化函数。
3. 每张卡的 CSS 会被 `scopedCss()` 按卡片 id 作用域化；卡内布局注意 `min-width: 0`，避免撑破网格。

加载顺序的两个约束：`DEMOS.push(...DEMOS_EXTRA)` 必须在分类计算之前；`Object.assign(INITS, INITS_EXTRA)` 必须在 `INITS` 定义之后。
