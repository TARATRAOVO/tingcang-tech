# 抱朴科技 - 巡天智能天线扫描系统官网

[![Website](https://img.shields.io/badge/Website-Live-blue)](https://tqjusafj7v7uo.ok.kimi.link)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

## 项目简介

抱朴科技官方网站，展示"巡天智能天线扫描系统"——一套基于无人机自主飞行与SDR频谱扫描技术的通信基础设施数字化管理解决方案。

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **UI组件**: shadcn/ui
- **图标**: Lucide React

## 项目结构

```
├── public/              # 静态资源
│   ├── hero-bg.jpg      # 首页背景图
│   ├── drone.jpg        # 无人机产品图
│   ├── tower.jpg        # 通信铁塔图
│   ├── spectrum-ui.jpg  # 频谱分析界面
│   ├── scanning.jpg     # 无人机扫描场景
│   ├── team-1.jpg       # 团队成员头像
│   ├── team-2.jpg
│   ├── team-3.jpg
│   └── team-feige.png   # 非哥头像
├── src/
│   ├── components/      # 组件
│   │   ├── Navigation.tsx   # 导航栏
│   │   └── Footer.tsx       # 页脚
│   ├── pages/           # 页面
│   │   ├── Home.tsx         # 首页
│   │   ├── Product.tsx      # 产品页
│   │   ├── About.tsx        # 关于我们
│   │   └── Contact.tsx      # 联系我们
│   ├── index.css        # 全局样式
│   ├── App.tsx          # 主应用
│   └── main.tsx         # 入口文件
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 页面说明

### 首页 (Home)
- 全屏Hero欢迎区域
- 核心技术优势展示
- 行业数据统计
- 解决方案预览

### 产品页 (Product)
- 系统技术架构
- 核心功能模块
- 痛点对比分析
- 商业模式设计
- 未来扩展空间

### 关于我们 (About)
- 公司愿景与使命
- 核心竞争优势
- 核心团队介绍
- 发展历程
- 融资计划

### 联系我们 (Contact)
- 联系表单
- 联系方式
- 地图位置

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署

项目构建后会生成 `dist` 目录，可直接部署到任何静态托管服务。

## 团队成员

- **张明远** - 创始人 & CEO（上海交大博士）
- **李雨桐** - 技术总监（上海交大硕士）
- **非哥** - AI技术负责人（上海交大工学硕士）

## 许可证

© 2024 抱朴科技. 保留所有权利.
