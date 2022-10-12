---
title: 如何发布一个npm包？
date: 2021/03/18 20:40:00
tags: ["npm"]
---

# 如何发布一个npm包？

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 本文记录发布`npm`包的经过。
>
> 之前想要模仿某脚手架，使用`TypeScript`写一个自己的脚手架，顺便锻炼一下自己的`TypeScript`能力，结果**搭个开发框架就花了两天**，现在总算能**发包**了。

## 一、发包前准备

* 一个`npm`包必须要有一个`package.json`，这个在初始化的时候使用`npm init`命令就可以生成。

* 在根目录下添加`.npmignore`文件，该文件用于设置一个目录（或者叫**黑名单**），发布时会忽略目录里的文件。

  比如我们使用`TypeScript`写的话必须编译成JS使用，那么就可以在发包的时候忽略源码，仅发布编译后的代码。

  ```
  # .npmignore 示例

  node_modules
  src/
  ```

* 必须要有`npm`账号，需要先[注册账号](https://www.npmjs.com/signup)。

::: tip 忽略规则

* 如果包的根目录下没有`.npmignore`文件，将使用`.gitignore`的配置作为**黑名单**。

* `package.json`里面的`files`字段也可以设置发包时的文件目录，但是它是**白名单**。
* 优先级：`files`（白名单） > `.npmignore`（黑名单） > `.gitignore`（黑名单）。

:::

## 二、发包

发包主要就两个命令：

```shell
npm adduser # 添加用户并登陆
npm publish # 发布
```

::: danger ⚠️注意

如果使用`cnpm`在开发中安装`node_modules`的话，就会在生成的`package-lock.json`中将依赖包的源地址变为淘宝镜像：

`https://registry.npm.taobao.org/xxx`，

就会出现下面的情况，登陆了半天登不上去，然后返回了个500。

![package-publish-01](/images/frontend/npm/package-publish-01.png)

此时要使用以下命令代替：

```shell
npm adduser --registry http://registry.npmjs.org
npm publish --registry http://registry.npmjs.org
```

:::

发布成功后就会收到`npm`发来的邮件！包就发成了！！！

::: warning

由于`cnpm`使用的是镜像源地址，它与`npm`同步的时间大概是**10分钟左右一次**，所以我们刚发布的包使用`cnpm`安装的话大概率找不到包，还是用`npm`吧。

:::

