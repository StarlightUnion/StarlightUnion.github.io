---
title: npm run eject获取React配置
date: 2020/09/05 00:00:00
tags: ["React.js"]
---

# npm run eject获取React配置

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 注：当前`react`版本`16.13.1`。

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
│   ├── env.js
│   ├── getHttpsConfig.js
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
└── ...
```

## 三、常用配置文件详解

### 1.`paths.js`

`paths.js`部分内容如下图：👇

```js
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'src/main'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  proxySetup: resolveApp('src/setupProxy.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrlOrPath,
};
```



🚧 施工中...