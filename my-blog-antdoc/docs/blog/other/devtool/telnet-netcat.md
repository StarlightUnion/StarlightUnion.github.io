---
title: 测试远程计算机端口命令
date: 2021/01/15 22:23:00
tags: ["杂记", "端口"]
---

# 测试远程计算机端口命令

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 一、`Windows`

`Windows`环境下，测试远程计算机端口是否开通可以使用`Telnet`，它是TCP/IP协议族中的一员，主要用于远程登录服务器。

****

假如我要测试`192.168.1.100:8888`是否畅通，**可以使用以下命令：**

`telnet 192.168.1.100 8888`

![telnet-netcat-03](/images/other/devtool/telnet-netcat-03.png)

### 若连接失败

![telnet-netcat-03](/images/other/devtool/telnet-netcat-04.png)

### 连接成功

连接成功窗口界面会闪一下，出现**一个闪动的下划线光标**。如果该端口部署了HTML的话则会出现HTML的代码结构。

### “不是内部或外部命令”

此时`Telnet`没有开启，需要按以下操作开启。

::: details 展开查看开启操作

* 1.搜索「windows功能」或在「控制面板」中找到「启用或关闭Windows功能」；

  ![telnet-netcat-02](/images/other/devtool/telnet-netcat-02.png)

* 2.在弹出窗口中勾选「Telnet Client」，点击确定即可。

  ![telnet-netcat-01](/images/other/devtool/telnet-netcat-01.png)

:::

## 二、`macOS`

在`macOS`中可以使用内置的`NetCat`来测试，`NetCat`是Unix下的一个使用UDP和TCP协议的网络测试工具。

**使用命令：**

`nc -vz -w 2 192.168.1.100 8888`

