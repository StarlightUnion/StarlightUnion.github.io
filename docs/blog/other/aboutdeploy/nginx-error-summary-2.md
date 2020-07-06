---
title: Nginx部署笔记-常见错误总结（2）
date: 2020/05/22 22:05:23
tags: ["杂记", "Nginx", "Windows", "Summary"]
---

# Nginx部署笔记-常见错误总结（2）

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> **Nginx**错误总结第二弹！🎉（其实是踩坑爬坑经验总结😐）

## 一、根目录下缺少文件夹

**错误如下：**

![nginx-error-s2-01](/images/other/aboutdeploy/nginx-error-s2-01.png)

其实原因就是**根目录下少了个`temp`文件夹**。。

一个典型的`Nginx`包目录结构如下：👇

![nginx-project-content](/images/other/nginx-deploy-02.png)

## 二、处理`HTTP 304 Not Modified`问题

> 将往**某个地址的请求代理后**，出现第一次见的`304 Not Modified`状态码。
>
> 查了一下，这个状态码提示的是当前请求的资源本地有缓存并且没有修改过，就会返回`304`，否则就是`200`了，直接返回资源。返回`304`状态码，服务端可以避免其它的操作，可以减少带宽的使用。

![nginx-error-s2-03](/images/other/aboutdeploy/nginx-error-s2-03.png)

解决这个问题可以在`nginx.conf`的**代理块配置中设置一个请求头表示没有缓存，强制从服务端获取资源**。

```nginx
proxy_set_header Cache-Contro no-cache; # 下面的贴图写错了
```

![nginx-error-s2-02](/images/other/aboutdeploy/nginx-error-s2-02.png)



🍗 有待补充...

