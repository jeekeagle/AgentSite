# 智能体设计与应用 · 课程站点

<div align="center">

![智能体设计与应用](assets/favicon.svg)

**让 Agent 替你干活。**

一门讲清楚智能体是什么、怎么搭、怎么落地的中文通识课。

[在线站点](https://ada.your-university.edu) · [课程大纲](https://ada.your-university.edu/syllabus/) · [快速开始](https://ada.your-university.edu/get-started/) · [学生作品](https://ada.your-university.edu/showcase/) · [课程项目](https://ada.your-university.edu/projects/) · [FAQ](https://ada.your-university.edu/faq/) · [关于](https://ada.your-university.edu/about/)

</div>

---

## 这是什么

本站是《智能体设计与应用》课程的官方网站。讲义、作业、案例、4 周项目说明全部公开。

| 板块 | 内容 |
| --- | --- |
| 课程大纲 | 12 章、考核方式、先修要求 |
| 快速开始 | 三十分钟跑通你的第一个 Agent |
| 学生作品 | 往届学生做的真实 Agent 项目 |
| 课程项目 | 4 周组队项目的选题、里程碑、评分 |
| FAQ | 关于 Agent / 课程 / 工具的常见问题 |
| 关于 | 课程组、社区、授权与引用 |

设计参考 [rea.tools](https://rea.tools/) 的文档站风格。所有讲义、代码、案例以 **CC BY-SA 4.0** 协议发布。

## 站点结构

`
.
├── index.html          首页
├── syllabus.html       课程大纲
├── get-started.html    快速开始
├── showcase.html       学生作品
├── projects.html       课程项目
├── faq.html            常见问题
├── about.html          关于课程
├── 404.html            404 页面
├── assets/
│   ├── styles.css      全部样式（明暗主题 + 中文排版）
│   ├── theme.js        主题预加载（避免闪烁）
│   ├── main.js         Copy 按钮 / 滚动 TOC / 回到顶部
│   ├── favicon.svg     站点图标
│   └── images/
│       └── hero-anatomy.svg  首页插画
├── vercel.json         Vercel 部署配置
├── LICENSE             CC BY-SA 4.0 + MIT
└── README.md           你正在看的文件
`

## 本地预览

无任何依赖，直接双击 index.html 就能看。

或者用 Python 起一个本地服务器：

`ash
python -m http.server 8000
# 然后访问 http://localhost:8000
`

## 部署到 Vercel

### 方式一：GitHub 集成（推荐）

1. 把这个仓库 push 到 GitHub。
2. 登录 [vercel.com](https://vercel.com)，点 **Add New → Project**。
3. Import 这个仓库。
4. Framework Preset 选 **Other**（不用 build）。
5. 点 Deploy。

30 秒后你会拿到一个 *.vercel.app 域名。

### 方式二：Vercel CLI

`ash
npm i -g vercel
vercel login
vercel        # 预览部署
vercel --prod # 生产部署
`

### 自定义域名

在 Vercel 控制面板 → Settings → Domains 添加你的域名，跟着提示改 DNS 即可。

## 二次开发

想改样式？只需要改 ssets/styles.css。所有颜色、间距、字号都是 CSS 变量（在 :root 里），改一处全站生效：

`css
:root {
  --accent: #b45309;     /* 主题色 */
  --paper: #fafaf9;      /* 背景 */
  --ink: #1c1917;        /* 主文字 */
  --font-serif: "Source Han Serif SC", ...;  /* 大标题字体 */
}
`

想加新页面？复制 bout.html，改 <title> / 内容、加上导航里的链接。导航在每个页面的 <header> 里。

## 内容更新

- 章节讲义放在每个章节的卡片里。
- 学生作品按类别放在 showcase.html。
- FAQ 按主题分组，按需增删 <details>。

## 贡献

欢迎提 Issue / PR：

- 讲义笔误、错别字：直接 PR。
- 新案例、新学生作品：发 Issue 附源代码 / 视频。
- 新章节提案：先发 Issue 讨论，别直接 PR。

## 授权

- 讲义与文案：[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- 代码（CSS / JS / 配置）：[MIT](LICENSE)
- 站点设计参考 [rea.tools](https://rea.tools/)。

---

由《智能体设计与应用》课程组与选课同学共同维护。
