---
title: npm run eject获取React配置
date: 2020/09/05 00:00:00
tags: ["React.js"]
---

# npm run eject获取React配置

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> *版本信息：当前使用`React`版本`16.13.1`。*

## 一、获取配置

通常情况下，使用`npx create-react-app new-project`创建的新项目中的配置文件时隐藏的。

要想获取项目的配置文件并修改，需要使用`npm run eject`命令。

::: danger 注意

⚠️ 需要注意的是该命令执行时可能会出错，那是因为原文件内容已经被修改，想要解决错误需要清除文件的`git`修改状态。可以`git add .` -> `git commit -m "commit"` -> `npm run eject`，如果关联到`git`的话可以直接提交后再执行。

:::

## 二、配置文件目录结构

![react-errors-05](/images/frontend/react/react-errors-05.png)

红圈内就是获取的项目配置。下面是结构

```
.根目录
├── config
│   ├── jest 单元测试的配置
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── env.js 开发环境配置方法库
│   ├── getHttpsConfig.js 获取https证书配置方法库
│   ├── modules.js 获取模块配置方法库
│   ├── paths.js 开发环境/打包路径配置文件
│   ├── pnpTs.js TypeScript模块映射表(?)
│   ├── webpack.config.js 打包配置文件
│   └── webpackDevServer.config.js 开发环境dev server配置文件
├── scripts
│   ├── build.js 打包时执行
│   ├── start.js 开发时执行
│   └── test.js 测试时执行
└── ...
```
