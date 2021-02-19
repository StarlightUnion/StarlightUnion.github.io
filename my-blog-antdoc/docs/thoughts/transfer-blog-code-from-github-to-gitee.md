---
title: 将博客仓库从Github迁移到Gitee
date: 2021/02/13 21:14:00
tags: ["随想"]
---

# 将博客仓库从Github迁移到Gitee

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 一、从`Github`拉取更新巨慢

参考前文[Node.js + GitHub Webhooks实现自动化部署](/blog/other/aboutdeploy/auto-deploy-nodejs)，我的博客使用了**自动化部署**。

更新时，**只需要执行相关脚本（打包修改后的博客源码并提交到`Github`，服务器会从`Github`下载打包后的源码）。**

但是国内网络从`Github`**拉取和克隆**代码一直是不稳定的，我在更新过程中经常遇到因为网络原因（速度**xkb/s~1xkb/s**不等🙃 ）导致拉取更新超时，从而导致**更新失败**。。如下图👇 ，是一次更新失败的日志。

![tbcfgtg-01](/images/thoughts/tbcfgtg-01.png)

## 二、迁移到`Gitee`

`Gitee`（即码云）毕竟是国内版的`Github`，体验过之后感觉还不错，就是用惯了`Github`，它的操作习惯和界面有些不适应。

* 1.在`Gitee`上新建一个仓库用于保存博客打包后的源码，从`Github`导入代码。

  ::: tip Gitee特有导入功能

  `Gitee`特有导入功能可以从`Github`上导入仓库内容。

  :::

* 2.在服务器上克隆该仓库，修改`Nginx`配置，将博客`root`地址指向克隆好的仓库地址。

* 3.在`Gitee`上给新建仓库设置`Webhooks`地址，向该地址**测试推送**。

  ![tbcfgtg-02](/images/thoughts/tbcfgtg-02.png)

* 4.在服务器上根据测试推送**修改服务配置**。

* 5.在博客的部署脚本上添加一行推送地址，打包完成后强制推送到这两个仓库。

  ![tbcfgtg-03](/images/thoughts/tbcfgtg-03.png)

## 三、要点

推送到`Gitee`需要在本地配置`Gitee`的SSH Key，可参考[WindowsPC同时配置GitLab和GitHub](/blog/other/devtool/gitlab-and-github)。

