---
title: Node.js + GitHub Webhooks实现自动化部署
date: 2020/05/28 21:29:00
tags: ["杂记", "自动化部署", "Node.js", "GitHub", "Webhooks", "CentOS", "Linux"]
---

# Node.js + GitHub Webhooks实现自动化部署

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> **博客**已经成功部署到云服务器了，但是还有一个问题需要解决。
>
> 👉博客的文章增加、修改等都在个人PC上完成，并且本地有开发环境，**编译之后生成的适合生产环境的项目源码会提交到GitHub上的远程仓库**。此时博客已迁移到了云服务器上，为了使云服务器上的代码的版本保持最新，我有想到**三个操作**：👇
>
> * 1、远程登录云服务器手动更新；
> * 2、为**服务器设置定时脚本**，比如每隔24小时执行一次，与GitHub上的仓库同步；
> * 3、建立**某种自动更新机制**，代码更新到GitHub仓库之后让云服务器这边触发同步。
>
> 第一个操作明显繁琐，不符合懒人需求🤣，第二个操作**定时脚本**可以用用，但明显第三个才是出路啊。。

## 一、GitHub WebHooks

`GitHub Webhooks`是GitHub提供的一个API，如果为一个GitHub上的一个远程仓库配置了`Webhooks`，当有人往这个远程仓库`push`代码完成后，GitHub会往`Webhooks`里配置的地址发送一个`POST`请求，并在`body`中给出本次更新的仓库信息、更新的文件等信息。

这个`post`请求相当于一个**通知**，我们收到`post`请求后可以对**服务器端的本地仓库进行更新**，拉取·个 GitHub上的最新代码，从而实现**一次提交，服务器端自动化部署**。

::: details 展开查看详情

配置`GitHub Webhooks`：进入一个仓库 -> 右上角`Settings` -> 侧边栏`Webhooks`。

![auto-deploy-01](/images/other/aboutdeploy/auto-deploy-01.png)

一次`push`时`Webhooks`返回的部分数据：👇

![auto-deploy-02](/images/other/aboutdeploy/auto-deploy-02.png)

:::

## 二、使用`node.js`搭建服务

说实话这是第一次正经使用`node.js`。。



施工中🚧...

