# mybhappybirthday

一个温暖、简洁的生日时间胶囊网站。朋友可以在生日之前留下祝福，留言会在 7 月 21 日统一解锁展示。

## 技术栈

- Next.js App Router
- React
- Tailwind CSS
- Supabase
- Vercel

## 本地开发

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## Supabase 设置

1. 在 Supabase 创建项目。
2. 打开 SQL Editor。
3. 执行 `supabase/schema.sql`。
4. 在项目设置中复制 Project URL 和 service role key。

## 环境变量

复制 `.env.example` 为 `.env.local`：

```bash
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
UNLOCK_DATE="2026-07-21T00:00:00+08:00"
```

Vercel 部署时也需要配置同样的环境变量。

## 页面

- `/` 首页和倒计时
- `/message` 留言表单
- `/wall` 留言墙，7 月 21 日前不会展示任何留言
- `/future` 隐藏彩蛋页面

## 安全处理

- `/api/messages` 会按 IP 做每分钟最多 3 次提交的限制。
- 服务端会清理 HTML 标签、script 标签和控制字符。
- 留言展示使用 React 文本渲染，不使用 `dangerouslySetInnerHTML`，避免 XSS。
- Supabase service role key 只在服务端 API 使用，不会暴露到浏览器。
