---
title: vuepress + GitHub搭建个人博客笔记（2）必备插件
date: 2020/04/08 00:00:00
tags: Vuepress, Blog
---
# vuepress + GitHub搭建个人博客笔记（2）必备插件

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> vuepress官方提供了一些插件，可以让**博客更加好用**。这里记录我安装的插件。。
>
> [插件 | VuePress中文文档](https://www.vuepress.cn/plugin/)

## 一、手动安装

### 1.back-to-top

> 点击后页面自动滚动回顶部。

![vuepress-plugin-01](/images/other/vuepress-plugin-01.png)

```shell
yarn add -D @vuepress/plugin-back-to-top
# OR npm install -D @vuepress/plugin-back-to-top
```

**配置**

```js {9}
// config.js
module.exports = {
  ...
  plugins: [
    ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  	}],
    '@vuepress/back-to-top'
  ]
  ...
}
```

### 2.google-analytics

> 一个网站分析插件，可以在**谷歌分析**的后台界面查看博客网站的流量、访问来源、在线人数等信息。
>
> 该插件需要使用GAID（即 Google Analytics ID），所以**需要谷歌账号并且具备一定的*魔法*知识**。

![vuepress-plugin-02](/images/other/vuepress-plugin-02.png)

**首先全局安装**，[官网](https://www.vuepress.cn/plugin/official/plugin-google-analytics.html#安装)推荐使用`yarn`安装，否则会出问题。

```shell
npm install -g yarn # 安装yarn包管理器
yarn --version # 查看yarn版本

yarn add -D @vuepress/plugin-google-analytics
# OR npm install -D @vuepress/plugin-google-analytics
```

**配置**

```js
module.exports = {
  ...
  plugins: [
    ['@vuepress/google-analytics', {
        'ga': '' // UA-00000000-0 填上GAID
    }]
  ]
  ...
}
```

**[获取GAID]( https://analytics.google.com)**

注册并获取一个ID

![vuepress-plugin-03](/images/other/vuepress-plugin-03.png)

GAID:`UA-账号ID-x`，可以查看注册的账号信息获取GAID。

## 二、vuepress和默认主题自带

### 3.active-header-links

> 作用是使侧边栏的**菜单**随页面的滚动自动选中。

**配置**

```js
// config.js
module.exports = {
  ...
  plugins: ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  }]
  ...
}
```

### 4.last-updated

> 从GitHub获取最后提交时间戳(timestamp)作为最后更新的时间基准。

![vuepress-plugin-04](/images/other/vuepress-plugin-04.png)

该插件需要安装`moment`👇

```shell
npm install moment --save   # npm
yarn add moment             # Yarn
```

**配置**

```js
module.exports = {
  ...
  plugins: [
    ...
    ['@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ]
    ...
  ]
}
```

[Moment.js文档](http://momentjs.cn/)

### 5.register-components

具体参考文档，该插件可以使在某个目录下的所有组件被注册为全局组件。