---
title: vuepress + GitHub搭建个人博客笔记（1）
date: 2020/04/07 00:00:00
tags: ["Vuepress", "Blog"]
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
# 进入my-blog文件夹
cd my-blog
# 初始化项目 该命令会自动生成package.json等文件
npm init -y
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

::: danger

⚠️注意：`README.md`是必须的，访问`/blog/`时将自动指向`blog`文件夹下面的`README.md`，没有该文件会引发编译错误。

:::

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
      { text: 'GitHub', link: 'https://github.com/UAERNAME' }
    ],
    lastUpdated: '上次更新时间'// 页面最下方的最后更新时间戳
  }
};
```

参考资料：

* [vuepress基本配置官方文档](https://www.vuepress.cn/guide/basic-config.html#配置文件)

* [PWA](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)

### 2.`palette.styl`

```stylus
$accentColor = #87cefa // 主题色
$textColor = #000 // 文字颜色
$borderColor = #eaecef // 边框颜色
$codeBgColor = #282c34 // 代码背景颜色
```

这是全局样式文件，可以**自己设置主题色**等，另外在写自己的插件或页面时，**这些样式可以继承使用**。

### 3.`package.json`

在`package.json`的`"scripts"`里面添加如下代码：

```json
{
  ...
  "scripts": {
    "dev": "vuepress dev docs",// 开发环境运行
    "build": "vuepress build docs"// 打包生成部署环境的文件
  }
  ...
}
```

也可以不添加，直接用`vuepress dev docs`和`vuepress build docs`，**macOS**下请在命令前加`sudo`。

**接下来就可以跑一下试试了** => `npm run dev`。

::: warning

这部分有会遇到一些比较常见的**错误/问题**，参见[第三部分](#三、常见问题)

:::

## 二、部署

部署这里需要使用GitHub来托管代码，使用`GitHub Pages`搭建静态站点，有的用就行了，要啥自行车。

### 1.新建一个部署用仓库

在GitHub中新建一个仓库，该仓库将被用来存放打包生成好的用来部署的文件（就是`npm run build`/`vuepress build docs`命令生成的存放在`docs/.vuepress`里面的`dist`文件夹）。

::: warning

⚠️注意：**该仓库**必须具有以下特征：

* 1.仓库名必须为`USERNAME.github.io`，注意这是**用户名而不是昵称**。该仓库不用克隆至本地。

  用户名可以从GitHub地址中看出来 -> **红圈内容**，可不分大小写。

  ![vuepress](/images/other/vuepress-blog-01.png)

* 2.需在设置中将`GitHub Pages`开启。

  步骤：进入仓库->点击选项卡中的`Setting`->`GitHub Pages`中选择`master branch`。

  ![vuepress](/images/other/vuepress-blog-02.png)

  ![vuepress](/images/other/vuepress-blog-03.png)

:::

### 2.另外新建一个源代码仓库

上面的仓库用来**存放部署项目编译后生成的文件**，本仓库用来**存放博客项目的源代码**，就是`my-blog`文件夹。

### 3.部署自动化`deploy.sh`

在项目根目录创建`deploy.sh`，写入以下内容：

```shell
# 确保脚本抛出遇到的错误
set -e

# 编译生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 发布到上面建立的第一个仓库
git push -f git@github.com:USERNAME/USERNAME.github.io.git master

# 返回上一次工作目录
cd -
```

在`package.json`的`scripts`中添加命令：

```json {7}
{
  ...
  "scripts": {
    "dev": "vuepress dev docs",// 开发环境运行
    "build": "vuepress build docs",// 打包生成部署环境的文件
    // 自动执行deploy.sh脚本，执行自动编译并将dist上传至USERNAME.github.io仓库
    "deploy": "sudo bash deploy.sh",
  }
  ...
}
```

这里前面加了一个`sudo`是因为macOS中执行需要管理员权限，windows下就不用加了，另外windows下执行的话需要在**powershell**中执行，**cmd是不认得这个`bash`的**。

::: warning

差不多一个博客项目就搭建完了，另外还搭建了自动化部署的一整套流程。

* 写完博客后，在本地运行`npm run dev`，当然也可以边写边运行，保存后通过热更新可以直接看到效果。
* 检查无误后执行`npm run deploy`，就可以执行`deploy.sh`脚本**执行编译和自动部署**。
* 另外`Typora`这个`Markdowm`编写神器是非常好用👍。

:::

## 三、常见问题

### 1.白屏并且模块加载失败

![vuepress](/images/other/vuepress-blog-04.png)

一般是刚建的`md`的文件里面没有写入任何字符，导致错误。

### 2.白屏并且热更新失败

![vuepress](/images/other/vuepress-blog-05.png)

不知道为啥，我这里很常见，写着写着就这样，需要`control + c`退出，并且重新`npm run dev`。