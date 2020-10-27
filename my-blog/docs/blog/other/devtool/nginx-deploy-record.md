---
title: Nginx部署笔记-Windows（1）
date: 2020/03/25 00:00:00
tags: ["杂记", "Nginx", "Windows"]
---

# Nginx部署笔记-Windows（1）
<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 对于**前后端分离**的项目，由于**页面和服务运行的端口不一致，会产生跨域问题**，所以必须使用反向代理以解决跨域问题。

## 一、获取Nginx

![nginx](/images/other/nginx-deploy-01.png)

可以从[官网](http://nginx.org/en/download.html)获取，上图中选择一个版本，下载后直接解压即可。

将**解压后的整个文件夹**，拷贝至目标计算机/服务器。（这里以``nginx-1.14.2``为例）

::: warning

⚠️注意：nginx不需要安装，开箱即用

:::

![nginx](/images/other/nginx-deploy-02.png)

如上图所示，这是一个典型的``nginx``的文件目录结构。

* 配置文件：``nginx-1.14.2/conf/nginx.conf``

* 前端代码：``nginx-1.14.2/project``
* 报错信息（默认）：``nginx-1.14.2/logs/error.log``

## 二、配置Nginx

```nginx
http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    # tcp_nopush     on;
    #keepalive_timeout  0;
    keepalive_timeout  65;
    #gzip  on;

    upstream web1 { #负载均衡模块
    	server localhost:8080; #服务地址
    }

    server {
        listen       8000; #监听端口
        server_name  localhost; #前端地址
        root   project; #前端项目文件目录

        location /{ #路由模块
            index index.html index.htm;
            autoindex on; #自动文件索引 开
            #autoindex_exact_size off;
            #autoindex_localtime on;
        }

        location ^~/api/{	#服务请求代理
            proxy_pass http://web1;
            proxy_set_header X-real-ip $remote_addr;
            proxy_set_header Host $http_host;
        }

        error_page  500 502 503 504  /50x.html;
        location = /50x.html {
        	root   html;
        }
  }

```

以上为一个**典型~~简单~~**的nginx配置示例，前端项目部署在``http://localhost:8000``，若**请求地址中**带有``/api/``，被视为请求服务，将被代理至``http://localhost:8080``。

接下来启动nginx就好了->``start nginx``。

## 三、Nginx常用命令

* 启动服务：``start nginx``

* 强制停止：``nginx -s stop``

* 强制重启：``nginx -s reload``

* 强制退出：``nginx -s quit``

* 测试配置：``nginx -t``
* 强制关闭**windows**下**所有nginx进程**：``taskkill /im nginx.exe /f``

::: warning

⚠️注意：以上**nginx开头的命令**为**cmd**中使用命令，**powershel**l中会报错（如下图所示），如果想在powershell中使用，需要将``nginx``替换为``.\nginx``，如``nginx -s reload``->``.\nginx -s reload``。

:::

![nginx](/images/other/nginx-deploy-03.png)

## 四、Nginx常见错误

### 1.需使用管理员权限打开cmd

![nginx](/images/other/nginx-deploy-04.png)

### 2.nginx -s reload需要在start nginx后使用

![nginx](/images/other/nginx-deploy-05.png)