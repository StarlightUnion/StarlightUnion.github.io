---
title: React开发环境中的错误和问题集合
date: 2020/07/13 00:00:00
tags: ["React.js"]
---

# React开发环境中的错误和问题集合

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 1.`findDOMNode is deprecated in StrictMode`

引入`antd`组件报错：`findDOMNode is deprecated in StrictMode...`

研究~~百度~~一番发现是`<React.StrictMode>`的问题，去掉就好了。。

![react-errors-01](/images/frontend/react/react-errors-01.png)

![react-errors-02](/images/frontend/react/react-errors-02.png)

## 2.`Error: Cannot find module 'resolve'`

错误 ❌ 具体信息：

```
internal/modules/cjs/loader.js:985
	throw err;
	^

Error: Cannot find module 'resolve'
....
```

![react-errors-03](/images/frontend/react/react-errors-03.png)

这个需要删除`node_modules`重新安装，原因似乎是我安装依赖时一部分使用了`npm`安装，还有一部分用了`cnpm`？

## 3.获取项目配置信息`npm run eject`

> `React`的配置是隐藏的，想要更改配置，需要使用`npm run eject`来获取配置，然后修改。

::: danger 注意

⚠️ 需要注意的是该命令执行时可能会出错，那是因为原文件内容已经被修改，想要解决错误需要清除文件的`git`修改状态。可以`git add .` -> `git commit -m "commit"` -> `npm run eject`，如果关联到`git`的话可以直接提交后再执行。

:::

![react-errors-04](/images/frontend/react/react-errors-04.png)

![react-errors-05](/images/frontend/react/react-errors-05.png)

红圈内就是获取的项目配置文件。

> 详细请出门右转[npm run eject获取React配置](/blog/frontend/react/npm-run-eject.html)

## 4.引用`src`外的静态资源

默认状态下不支持引用`src`以外的静态资源，比如我引用了一张存放在与`src`同级的`assets`目录下的图片，报了以下错误：

```
Cannot find module '../../assets/logo128.png'

...

Module not found: You attempted
```



![react-errors-07](/images/frontend/react/react-errors-07.png)

![react-errors-08](/images/frontend/react/react-errors-08.png)

🍗 有待补充...

