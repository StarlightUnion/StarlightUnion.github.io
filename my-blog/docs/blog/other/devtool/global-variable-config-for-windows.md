---
title: Windows系统中配置全局变量
date: 2020/06/13 16:29:00
tags: ["杂记", "Windows", "全局变量", "Yarn"]
---

# Windows系统中配置全局变量

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

###  安装失败

今天在Windows中尝试安装`yarn`失败了。。

失败过程如下：↓

> * 1.从`npm`安装`yarn`，输入命令`npm instal -g yarn`。
>
> ![global-varible-config-01](/images/other/devtool/global-variable-config-01.png)
>
> * 2.接着输入`yarn -version`查看版本信息，结果提示不能用。。
>
> ![global-varible-config-02](/images/other/devtool/global-variable-config-02.png)

**首先**检查安装过程，用的是管理员权限，不存在权限不足的问题；**接着**检查安装路径，路径下已经有`yarn`的文件存在。所以问题应该出在**全局变量**上。

和[CentOS配置Node.js和Nginx环境](/blog/other/devtool/nodejs-config-for-centos.html)一样，想要在全局中使用`npm`、`node`、`nginx`命令需要建立软链接到全局路径下。

###  配置环境变量

::: details 展开查看进入窗口过程

快捷进入环境变量窗口编辑两种方式：

* 1.桌面此电脑右键选择`属性` -> 左侧选择`高级系统设置` -> 选择第三tab`高级` -> `环境变量`。

![global-varible-config-03](/images/other/devtool/global-variable-config-03.png)

* 2.快捷键`Win + R`弹窗输入`sysdm.cpl`-> 选择第三tab`高级` -> `环境变量`。

![global-varible-config-04](/images/other/devtool/global-variable-config-04.png)

:::

在环境变量窗口中选择**系统变量**栏，再选择`Path`，双击打开编辑窗口，添加全局环境中`yarn`的地址，地址在`yarn`安装完成后会显示在命令行中。。

![global-varible-config-05](/images/other/devtool/global-variable-config-05.png)

![global-varible-config-06](/images/other/devtool/global-variable-config-06.png)