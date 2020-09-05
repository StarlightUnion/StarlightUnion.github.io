---
title: npm run eject获取React配置
date: 2020/09/05 00:00:00
tags: ["React.js"]
---

# npm run eject获取React配置

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

![react-errors-05](/images/frontend/react/react-errors-05.png)

红圈内就是获取的项目配置。

`paths.js`部分内容如下图：👇

> `paths.js`里主要

![react-errors-06](/images/frontend/react/react-errors-06.png)

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