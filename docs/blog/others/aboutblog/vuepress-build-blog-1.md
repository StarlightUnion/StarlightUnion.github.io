---
title: vuepress + GitHub搭建个人博客笔记（1）
date: 2020/04/07 00:00:00
tags: Vuepress, Blog
---

# vuepress + GitHub搭建个人博客笔记（1）
<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 准备搭博客了。之前了解了一下`vuepress`，它**极简**而且又**支持MD语法**，而且还可以使用`Vue`自己**开发个性化插件**，还有一个重要的理由是有自己的网站感觉很酷👀！
## 一、开始

相关的教程网络上已经一搜一大堆了，我的[参考教程](https://www.cnblogs.com/softidea/p/10084946.html)， 很多**重复的劳动都简要写一下好了**。

```shell
# 全局安装
npm install -g vuepress
# 建立my-blog文件夹
mkdir my-blog
```

在`my-blog`下创建文件结构如下所示：

```
.根目录
├── docs
│   ├── .vuepress
│   │   ├── public 存放图片等静态资源
│   │   ├── styles
│   │   │   └── palette.styl 主题样式->全局
│   │   └── config.js 配置
│   ├── README.md 首页
│   └── blog
│       └── README.md
└── package.json
```

### 1.`config.js`

```js
module.exports = {
  title: '游客17846',
  description: 'Just do it!',
  head: [// 会加入<head>中
    ['link', { rel: 'icon', href: '/logo.ico' }],// 指定浏览器Tab图标
    ['link', { rel: 'manifest', href: '/manifest.json' }],//PWA
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }]// 指定safari浏览器保存书签至桌面图标
  ],
  serviceWorker: true,
  base: '/',// 部署时指定存放的项目的地址
  markdown: {
    lineNumbers: true// 代码块行号显示
  },
  themeConfig: {
    logo: '/logo.png',// 主页显示图标
    nav: [
      { text: '首页', link: '/' },// 首页地址不想指定的话就不用改，默认指向docs下面的README.md
      { text: '博文', link: '/blog/' },// 默认指向blog下的README.md
      { text: 'GitHub', link: 'https://github.com/StarlightUnion' }
    ],
    lastUpdated: '上次更新时间'// 页面最下方的最后更新时间戳
  }
};
```

参考资料：

* [vuepress基本配置官方文档](https://www.vuepress.cn/guide/basic-config.html#配置文件)

* [PWA](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)

施工中🚧...

