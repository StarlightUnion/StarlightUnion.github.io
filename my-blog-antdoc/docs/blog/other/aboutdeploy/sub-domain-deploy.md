---
title: Nginx二级域名部署实践
date: 2021/02/18 22:41:32
tags: ["杂记", "Nginx", "部署"]
---

# Nginx二级域名部署实践

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 一、起源

今天想要往自己的服务器上部署一个项目，但是主域名已经被博客占了，所以就想到了**二级域名**。

之前也尝试过搞二级域名，不过遇到些问题，加上当时也不是非要不可，就搁置了。今天准备花点时间尝试一下。本文记录了一次`Nginx`下的二级域名部署实践。

## 二、操作经过

* 1.在**XX云**的控制台中新增一条**解析记录**，添加一个名为`maptalks`的二级域名解析。

  **目的是为了访问该域名时能正确指到我的服务器**。

  ![sub-domain-01](/images/other/aboutdeploy/sub-domain-01.png)

* 2.将项目打包后生成的文件传到远程服务器。

* 3.修改`Nginx`配置：

  ```nginx{12}
  # 博客
  server {
    listen 443 ssl;
    server_name example.com www.example.com;

    ...
  }

  # 二级域名 maptalks
  server {
    listen 443 ssl;
    server_name maptalks.example.com www.maptalks.example.com;

    ...

    location / {
      root /maptalks;
      index index.html index.htm
    }

    ...
  }

  # 访问http返回https
  server {
    listen 80;
    server_name example.com www.example.com maptalks.example.com www.maptalks.example.com;
    return 301 https://$host$request_uri;
  }
  ```

* 4.重启`Nginx`即可。

## 三、总结

配置二级域名其实只要再`server_name`上做区分就好了，我之前失败的原因是以为在端口上做区分。。😂

另外需**注意**：

::: danger ⚠️注意

如果想要给`maptalks.example.com`配置`HTTPS`的话需要申请另外的`SSL`证书，它不能使用主域名`example.com`的`SSL`证书。

:::

