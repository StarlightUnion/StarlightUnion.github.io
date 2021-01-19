---
title: WSL-Ubuntu使用小记
date: 2020/12/18 20:33:00
tags: ["杂记", "WSL", "Linux", "Ubuntu"]
---

# WSL-Ubuntu使用小记

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 本文来折腾一下WSL。
>
> WSL即`Windows Subsystem for Linux`是**Windows10**的一个子系统，可以提供**近乎原生**的GNU/Linux环境。
>
> 与Linux相比，Windows对于开发人员来说还是不怎么友好的，仅前端开发环境配置而言，Windows还是稍显繁琐。

开始折腾。

## 一、启用Windows功能

* 在「windows搜索」（即小娜）搜`windows功能`即出现「启用或关闭Windows功能」。

* 在下面的弹窗中**勾选**「适用于Linux的Windows子系统」。

  ![wsl-01](/images/other/devtool/wsl-01.png)

* 点击「确定」，**这需要一些时间来配置功能**。

## 二、下载Linux系统

* 功能开启后，打开「应用商店」，搜索`linux`即出现以下结果（结果只表示当时，不代表将来），包括了多个Linux的发行版。这里我选择`Ubuntu`，直接下载即可。

  ![wsl-02](/images/other/devtool/wsl-02.png)

* 下载完成并安装后就可以看到它了。

  ![wsl-03](/images/other/devtool/wsl-03.png)

* 点击即可打开命令窗口。

  ![wsl-08](/images/other/devtool/wsl-08.png)

## 三、开发环境搭建

> WSL安装好了，下面搭开发环境。
>
> 总不能用命令行写代码吧😂

微软在`VSCode`中提供了官方插件「Remote-WSL」用于支持`VSCode`连接`WSL`。

**接下来：**

* 在`VSCode`中搜索插件「Remote-WSL」并安装。

  ![wsl-05](/images/other/devtool/wsl-05.png)

* 此时左下角会出现一个**醒目**的蓝色标识（此时它会自动连接到安装的WSL），如下图👇

  ![wsl-06](/images/other/devtool/wsl-06.png)

* 点击它打开一个新窗口，选择「打开文件夹」，就可以打开Linux子系统里面的项目代码并编辑了。

  ![wsl-07](/images/other/devtool/wsl-07.png)

  ![wsl-09](/images/other/devtool/wsl-09.png)

## 四、安装`node`环境

> WSL与Windows是隔离的，所以在WSL里还要配置`node`等环境。
>
> 不过也有个好消息，它是内置`git`的。😂
>
> ![wsl-04](/images/other/devtool/wsl-04.png)

安装`node`环境可参考[CentOS下配置Node.js和Nginx环境](/blog/other/devtool/nodejs-config-for-centos.html)，都是Linux，大差不差。。。

::: danger ⚠️安装环境前必须切换root用户!!!

* ![wsl-10](/images/other/devtool/wsl-10.png)


* ![wsl-11](/images/other/devtool/wsl-11.png)

```shell
sudo passwd root # 设置root新密码
su -
```

当前用户变为`root@xxxx`即成功切换root用户。

:::

## 五、参考文档

* 1.[适用于 Linux 的 Windows 子系统概述 | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/wsl/)

