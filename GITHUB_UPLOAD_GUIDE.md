# GitHub 上传指南

## 方法一：通过 Git 命令行上传

### 1. 在 GitHub 创建新仓库

1. 登录 GitHub 账号
2. 点击右上角 **+** 按钮，选择 **New repository**
3. 填写仓库信息：
   - **Repository name**: `baopu-tech-website` (或你喜欢的名字)
   - **Description**: 抱朴科技官方网站 - 巡天智能天线扫描系统
   - **Visibility**: Public (或 Private)
   - 不要勾选 "Initialize this repository with a README"
4. 点击 **Create repository**

### 2. 本地初始化并推送

在解压后的项目目录中执行以下命令：

```bash
# 进入项目目录
cd baopu-tech-website

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: 抱朴科技官网项目"

# 添加远程仓库（将 YOUR_USERNAME 替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/baopu-tech-website.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

---

## 方法二：通过 GitHub Desktop 上传

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录你的 GitHub 账号
3. 点击 **File** → **Add local repository**
4. 选择解压后的项目文件夹
5. 填写提交信息，点击 **Commit to main**
6. 点击 **Publish repository**
7. 填写仓库名称，选择 Public/Private，点击 **Publish**

---

## 方法三：通过 GitHub 网页直接上传

1. 在 GitHub 创建新仓库（同上）
2. 进入仓库页面，点击 **uploading an existing file** 链接
3. 将项目文件拖拽到上传区域
4. 注意：这种方法需要分批上传，因为文件较多

---

## 方法四：使用 VS Code 上传

1. 用 VS Code 打开项目文件夹
2. 点击左侧源代码管理图标 (Ctrl+Shift+G)
3. 点击 **Initialize Repository**
4. 输入提交信息，点击 **Commit**
5. 点击 **Publish to GitHub**
6. 选择 Public/Private，点击 **Publish**

---

## 项目文件清单

```
baopu-tech-website/
├── README.md              # 项目说明文档
├── package.json           # 项目依赖配置
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 构建配置
├── tailwind.config.js     # Tailwind CSS 配置
├── index.html             # 入口 HTML
├── public/                # 静态资源
│   ├── hero-bg.jpg        # 首页背景
│   ├── drone.jpg          # 无人机图片
│   ├── tower.jpg          # 铁塔图片
│   ├── spectrum-ui.jpg    # 频谱界面
│   ├── scanning.jpg       # 扫描场景
│   ├── team-1.jpg         # 团队成员1
│   ├── team-2.jpg         # 团队成员2
│   ├── team-3.jpg         # 团队成员3
│   └── team-feige.png     # 非哥头像
├── src/
│   ├── App.tsx            # 主应用组件
│   ├── main.tsx           # 入口文件
│   ├── index.css          # 全局样式
│   ├── components/        # 组件
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/             # 页面
│   │   ├── Home.tsx
│   │   ├── Product.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── components/ui/     # UI 组件 (shadcn)
└── dist/                  # 构建输出
```

---

## 部署到 GitHub Pages

如果你想用 GitHub Pages 部署网站：

### 1. 安装 gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. 修改 package.json

添加以下字段：

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/baopu-tech-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. 部署

```bash
npm run deploy
```

---

## 常见问题

### Q: 推送时提示权限错误？
A: 确保已配置 GitHub 凭据，或使用 SSH 密钥：
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/baopu-tech-website.git
```

### Q: node_modules 需要上传吗？
A: 不需要！已配置 .gitignore 忽略 node_modules

### Q: 如何更新网站？
A: 修改代码后执行：
```bash
git add .
git commit -m "更新说明"
git push
```

---

## 相关链接

- **在线预览**: https://tqjusafj7v7uo.ok.kimi.link
- **技术栈**: React + TypeScript + Tailwind CSS + Vite
- **设计**: 极简主义深色模式

---

如有问题，请检查：
1. Git 是否已安装: `git --version`
2. Node.js 版本: `node --version` (建议 18+)
3. GitHub 账号是否正常登录
