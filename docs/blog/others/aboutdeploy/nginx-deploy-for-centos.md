---
title: Nginx部署笔记-CentOS
date: 2020/05/26 21:35:00
tags: ["杂记", "Nginx", "CentOS", "Linux", "Blog"]
---

# Nginx部署笔记-CentOS

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 本文主要记录在CentOS上使用`nginx`部署前端项目的过程。

在[CentOS下配置node.js和nginx环境](/blog/others/devtool/nodejs-config-for-centos.html)一文中已经安装好了`nginx`，并且能顺利跑起来了，那么接下来就比较简单了。这回部署的是**博客**，之前放在`GitHub`上，响应缓慢，较大的图片加载更是有如蜗牛，这次要把它放到云服务器上。

## 一、获取源码

从GitHub上克隆了一份已经编译好的部署环境的**博客源码**，将其通过`FTP`发送到云端，在根目录下新建一个文件夹，命名为`my-blog`。

## 二、修改`nginx.conf`

```shell
cd /usr/local/nginx/conf && ls
vim nginx.conf # 进入文件查看模式
```

![nginx-deploy-for-centos-01](/images/other/aboutdeploy/nginx-deploy-for-centos-01.png)

> 按`i`键进入编辑模式，在配置中添加如下配置。确认无误后按`esc`退出编辑模式，输入`:wq`，保存并离开。

```nginx
...
server {
	listen	80;
	server_name	your host;

  location / {
    root	/my-blog/master/; # 这里为博客项目的地址
    index	index.html index.htm;
  }

  error_page /404.html;
}
...
```

![nginx-deploy-for-centos-02](/images/other/aboutdeploy/nginx-deploy-for-centos-02.png)

## 三、启动

```shell
cd ..
cd sbin
./nginx -s stop # 停止
./nginx # 启动
./nginx -s reload # 重置
./nginx -t # 测试
```

![nginx-deploy-for-centos-03](/images/other/aboutdeploy/nginx-deploy-for-centos-03.png)

由于之前配置`nginx`中已经建立了软链接，上面的有关`nginx`的命令可以直接使用，不用再加`./`。

