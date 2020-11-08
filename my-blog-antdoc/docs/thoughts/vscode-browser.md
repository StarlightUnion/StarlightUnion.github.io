---
title: VS Code的本质-浏览器
date: 2020/07/31 00:00:00
tags: ["随想", "发现", "VS Code"]
---

# VS Code的本质-浏览器

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 今天发现`VS Code`的本质就是个浏览器。。😐
>

### 折腾

今天无意中打开了`VS Code`自带的`Dev Tools`，如下步骤：

* 顶部菜单栏选择「帮助」 -> 「`Toggle Developer Tools`」 。

![vscode-browser-01](/images/thoughts/vscode-browser-01.png)

然后弹出来下面这个👇

![vscode-browser-02](/images/thoughts/vscode-browser-02.png)

刚开始并没有啥感觉。。（因为弹个浏览器的开发者工具也没啥😐 ）

直到**鼠标在`Elements`里面移动的时候**才发现事情有些不对劲。。❓😮

原来`VS Code`就是个**浏览器**❗️❗️❗️

### 了解一下

通过参考资料~~百度~~了解到：👇

> 知乎@[韩骏](https://www.zhihu.com/question/43666493/answer/755349873)
>
> VS Code 是基于 [Electron](https://electronjs.org/) (原来叫 Atom Shell) 进行开发的。Electron 基于 Node.js（作为后端运行时）和 Chromium（作为前端渲染)，使得开发者可以使用 HTML, CSS 和 JavaScript 等前端技术来开发跨平台桌面 GUI 应用程序。Atom, GitHub Desktop, Slack, Microsoft Teams, WordPress Desktop 等知名软件都是基于 Electron 开发的。

打开`GitHub Desktop`找了一下，果然找到了。。。

![vscode-browser-03](/images/thoughts/vscode-browser-03.png)

### 总结

**说它本质上就是一个浏览器似乎也没什么问题。。。**

### 参考资料

* 1.[vs code的界面是用的什么技术？- 知乎](https://www.zhihu.com/question/43666493)