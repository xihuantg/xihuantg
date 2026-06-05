# 豫志通项目交接文档

## 当前状态

项目是一个静态前端演示站点，入口文件为 `index.html`，核心交互在 `app.js`，样式在 `styles.css`，演示数据在 `data.js`。`v1/` 目录保留早期版本快照。

网站链接：

- 新版线上预览：https://xihuantg.github.io/xihuantg/?v=14#home
- 旧版快照：https://xihuantg.github.io/xihuantg/v1/?v=1
- GitHub 仓库：https://github.com/xihuantg/xihuantg

最近一轮主要完成了 PC 端视觉与信息架构重构：

- PC 端从深色长页面改为浅暖色、顶部导航、分板块展示。
- 顶部导航保留 `智能推荐 / 志愿诊断 / 院校专业组 / 会员`，点击后切换桌面板块。
- 会员页改为套餐置顶，首屏先展示付费方案和解锁能力，不再放大段场景营销文案。
- 会员页新增个人信息入口卡，点击进入独立 `#profile` 个人中心。
- `#profile` 已按快志愿 PC 端个人中心方向重做：左侧成绩卡和个人菜单，右侧专业定位测评、账号摘要、兴趣/性格测评入口、档案数据面板。
- 手机端继续保留原底部导航和移动端页面逻辑，只同步更柔和的颜色变量。

## 关键文件

### `index.html`

- 页面结构、顶部导航、会员页、个人中心页、移动端首页均在此文件。
- `#pricing` 是会员中心入口，当前套餐卡 `pricingGrid` 已置顶。
- `#membershipBenefits` 是会员权益对比区。
- `#profile` 是新增个人中心工作台，包含：
  - 左侧 `profile-sidebar`：我的成绩、修改成绩、智能填报、同分去向、个人中心菜单。
  - 右侧 `profile-content`：专业定位测评、账号卡、提示条、兴趣/性格测评卡、档案统计。

### `styles.css`

- 全局颜色已改为浅暖色系统：
  - 背景 `#f6f1e7`
  - 主卡片 `#fffaf1`
  - 导航背景 `rgba(255, 250, 241, 0.96)`
  - 主按钮 `#c73525`
  - 品牌红 `#9f2b22`
  - 强调金 `#d79a2b`
  - 正文 `#2d211b`
  - 辅助文字 `#77685a`
- PC 端使用 `body[data-desktop-tab]` 控制板块展示。
- 会员页隐藏旧 `#why-pay`，并按 `pricing -> benefits -> report -> data` 顺序显示。
- 个人中心样式集中在 `.profile-workbench`、`.profile-sidebar`、`.profile-content`、`.profile-test-actions`、`.profile-report-board` 等选择器。

### `app.js`

- 新增桌面端页面状态：
  - `state.desktopTab`
  - `normalizeDesktopTab()`
  - `openDesktopTab()`
- 移动端仍使用 `openMobileTab()` 和 `data-mobile-tab`。
- 新增 `renderProfile()`，复用现有 `getProfile()`、`state.member`、`state.volunteers`、`state.recommendations`，同步：
  - 省份、选科、分数、位次、批次
  - 专业偏好、会员状态、可报专业组数、已加入志愿数、报告状态
- 新增 `[data-desktop-open]` 点击处理，用于会员页进入个人中心，以及个人中心内跳转推荐、诊断、院校专业组、会员页。
- 未改推荐算法、数据结构或筛选逻辑。

### `data.js`

- 演示院校专业组、专业目录、套餐等数据。
- 本轮未调整算法和数据源。

## 页面路由

项目仍是静态 HTML，通过 hash 与 body dataset 控制视图。

- `#home`：首页档案填写与当前考生档案预览。
- `#recommend`：智能推荐。
- `#volunteer` / `#diagnosis`：志愿诊断。
- `#schools`：院校专业组、专业适配、公开信息。
- `#pricing` / `#account`：会员中心。
- `#profile`：个人中心工作台。

PC 端使用 `body[data-desktop-tab]` 显示对应板块；移动端使用 `body[data-mobile-tab]` 和底部导航。

## 已验证

已执行：

```powershell
node --check app.js
```

结果：通过。

已使用 Chrome headless 截图检查：

- 会员页：套餐已置顶，个人信息入口在套餐下方，旧长文不再作为首屏。
- 个人中心页：已形成 PC 端工作台布局，左侧成绩/菜单，右侧测评中心和账号摘要。
- 移动端：底部导航和移动账号入口未被结构性破坏。

Chrome headless 在本机偶尔会返回非零 exit code，但截图文件实际写出，可以人工打开 PNG 复核。

## 当前未提交改动

本地工作区仍有未提交文件：

- `index.html`
- `styles.css`
- `app.js`
- `HANDOFF.md`

如果需要正式发布，应先再次做桌面和移动截图检查，再提交这些文件。

## 后续建议

- 如果继续参考快志愿，优先补齐个人中心里的 VIP 开通弹窗、收藏列表和志愿表管理状态，不要再增加长营销文案。
- 当前登录、会员开通、收藏、导出均为前端模拟；正式上线前需要接入真实账号、订单和数据接口。
- `data.js` 仍是演示数据，正式收费前必须替换为可校验数据，并保留来源说明。
- 所有中文文件保持 UTF-8 编码，避免用会破坏编码的工具批量重写。
