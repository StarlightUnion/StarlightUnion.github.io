---
title: Nginx部署笔记-常见错误总结（1）
date: 2020/05/07 21:18:00
tags: ["杂记", "Nginx", "Windows", "Summary"]
---

# Nginx部署笔记-常见错误总结（1）

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 最近一直在各种服务器上用Nginx部署系统，也遇到了不少问题，在此做个记录📝。

## 一、端口被占用

![nginx-error-summary-1-01](/images/other/nginx-error-summary-1-01.png)

在部署时出现了上图这个错误，提示：`bind<> to 0.0.0.0:9091 failed <0013: An attempt was made to access a socket in a way forbidden by its access permission> `。

还好我启动后`nginx -t`测试了一下。

错误提示大意应该是`9091`端口**已被使用**。我看了一下配置，原来是配置里面某个端口号写错了。。。

## 二、自启动配置失败

![nginx-error-summary-1-02](/images/other/nginx-error-summary-1-02.png)

`install`的时候发现报错了，👆上图所示。

想着会不会是版本的原因，因为这个服务器的操作系统版本是`Windows Server 2008 R2 Standard`，非常有年代感的视图界面。。我之前用过的服务器都是`2012 R2`。。

后来检查了一下`IIS`里的`.NET Framework`版本发现是2.0....

> **查看方法：**
>
> * 打开`IIS`，在最右边栏可以看到👇
>
>   ![nginx-error-summary-1-03](/images/other/nginx-error-summary-1-03.png)
>
> * 点击可以看到👇
>
>   ![nginx-error-summary-1-04](/images/other/nginx-error-summary-1-04.png)

根据[Nginx部署笔记-Windows（2）开机自启动](/blog/others/devtool/nginx-start.html)一文：

![nginx-error-summary-1-05](/images/other/nginx-error-summary-1-05.png)

似乎问题已解决？

::: warning

我**更改了版本后重新按步骤配置**，发现仍然报错，后来服务器重启之后试了一下`install`，终于成功。。

:::

## 三、内外网不通

对于一些**内外网不相通**的服务器，在配置外网时，某些**验证请求等**需在服务端访问的请求`需要配置内网地址`，否则将会出现外网请求超时（~~由于内外网不相通~~）而影响用户正常访问。

