# 个人简历网站部署指南

## 部署方案建议

根据您的项目特点，我推荐以下几种适合的部署方案：

### 1. Vercel 部署（推荐）

[Vercel](https://vercel.com/) 是一个优秀的前端项目托管平台，特别适合React、Vite等现代前端框架，提供免费的HTTPS域名和全球CDN加速。

#### 部署步骤：

1. 首先将您的项目代码上传到GitHub、GitLab或Bitbucket仓库
2. 访问 [Vercel官网](https://vercel.com/) 并使用您的代码托管平台账号登录
3. 点击 "New Project" 按钮，选择您的简历网站仓库
4. Vercel会自动识别您的项目类型和构建配置（对于Vite项目，会自动使用`npm run build`）
5. 点击 "Deploy" 按钮开始部署
6. 部署完成后，Vercel会提供一个可公开访问的域名（如 `your-resume.vercel.app`）

### 2. Netlify 部署

[Netlify](https://www.netlify.com/) 也是一个流行的静态网站托管平台，提供类似的免费服务。

#### 部署步骤：

1. 将项目代码上传到代码托管平台
2. 访问 [Netlify官网](https://www.netlify.com/) 并登录
3. 点击 "New site from Git"
4. 选择您的代码托管平台和仓库
5. 设置构建命令为 `npm run build`，发布目录为 `dist`
6. 点击 "Deploy site"
7. 部署完成后，Netlify会提供一个随机生成的域名，您也可以设置自定义域名

### 3. GitHub Pages 部署

如果您更倾向于使用GitHub生态系统，可以使用 [GitHub Pages](https://pages.github.com/) 部署您的静态网站。

#### 部署步骤：

1. 将项目代码上传到GitHub仓库
2. 安装 `gh-pages` 包：`npm install --save-dev gh-pages`
3. 在 `package.json` 中添加以下脚本：
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. 运行 `npm run deploy` 命令部署网站
5. 部署完成后，您的网站将可以通过 `https://your-username.github.io/your-repo-name` 访问

## 项目构建说明

在部署前，您可以先在本地构建项目以确保一切正常：

1. 确保已安装依赖：`npm install` 或 `pnpm install`
2. 运行构建命令：`npm run build` 或 `pnpm build`
3. 构建完成后，生成的静态文件会在 `dist` 目录中

## 自定义域名设置

如果您拥有自己的域名，可以在上述平台中设置自定义域名：

1. 在您的域名注册商处修改DNS设置，添加相应的CNAME或A记录
2. 在托管平台的项目设置中配置您的自定义域名
3. 等待DNS记录生效（通常需要几分钟到几小时）
4. 启用HTTPS（大多数平台会自动提供免费SSL证书）

## 注意事项

1. 确保您的项目中没有包含敏感信息（如API密钥等）
2. 如果您的简历内容需要定期更新，考虑设置自动部署流程
3. 部署后，可以使用工具如 [Google Search Console](https://search.google.com/search-console) 来提交您的网站，提高搜索引擎可见性
4. 定期检查网站的加载性能和可用性

## 管理员功能访问

根据项目PRD，您的网站包含管理员功能：

- 管理员登录页面：`/admin`
- 默认管理员账户：`admin@example.com`（请在实际部署前修改）
- 默认管理员密码：`admin123`（请在首次登录后立即修改）

祝您部署顺利！如果您在部署过程中遇到任何问题，可以参考各平台的官方文档或寻求技术支持。