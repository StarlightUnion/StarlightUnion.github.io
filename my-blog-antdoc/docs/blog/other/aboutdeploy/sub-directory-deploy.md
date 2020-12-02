---
title: Nginx部署React项目至服务器二级目录实践
date: 2020/10/28 22:15:59
tags: ["Nginx", "React.js", "部署"]
---

# Nginx部署React项目至服务器二级目录实践

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 本文记录了一次`React`项目使用`Nginx`部署至服务器二级目录的实践过程。

## 一、修改资源路径

`React`打包后的资源路径是`/static/xxx.js`这种形式，是从项目根路径（即`nginx`中的`root`设置的路径）开始的，如果要部署到二级目录，需要将其修改为`./`。

当然如果部署环境需要也可以改为`../`或其它。

![sub-directory-deploy-01](/images/other/aboutdeploy/sub-directory-deploy-01.png)

如上图所示👆 ，在`package.json`中添加`"homepage": "."`，即可将资源的路径修改为`./static/xxx.js`这种形式。

## 二、在路由中添加`basename`

![sub-directory-deploy-02](/images/other/aboutdeploy/sub-directory-deploy-02.png)

还是如上图所示👆 ，添加`basename="/example"`，

此时，如果你的页面原来是`localhost:8000/home`，添加之后将会变为`localhost:8000/example/home`。

## 三、将项目打包之后部署

项目打包之后部署至`Nginx`中配置的`root`目录下的二级目录`example`。

### 1.简单配置

``` nginx {11,12,13}
server {
  listen       8000;
  server_name  192.168.0.1;

  root   root_dir;

  location /{
    index index.html index.htm;
  }

  location ^~/example/ {
    index index.html index.htm;
  }
}
```

由于**路由的存在**，简单配置并不可行。

这种配置在路由跳转时会因为直接**404**。比如从`/example/`跳转到`/example/home`因为`/example/`目录下并无`home`目录而找不到资源。

### 2.对资源请求做特殊处理

``` nginx {16,18,19,20,22,23,24,26,27,28,30,31,32}
server {
    listen       8000;
    server_name  192.168.0.1;

    root   root_dir;

    location /{
      index index.html index.htm;
      # autoindex on;
      # autoindex_exact_size off;
      # autoindex_localtime on;
    }

    location ^~/example/ {
      index index.html index.htm;
      try_files $uri $uri/ /example/index.html;

      location ~*  ^/([^/]+\.js)$ {
        alias /nginx-1.14.2/root_dir/example/js/$1;
      }

      location ~* ^/\.(js)$ {
        root root_dir/example/js/;
      }

      location ~*  ^/([^/]+\.css)$ {
        alias /nginx-1.14.2/root_dir/example/$1;
      }

      location ~* ^/\.(css)$ {
        root root_dir/example/;
      }
    }
  }
```

### 要点

* `try_files $uri $uri/ /example/index.html;`：设置一个查找顺序。

  比如寻找`xxx.js`，**寻找顺序为**：

  * `$uri`=>`/root_dir/example/xxx.js`;
  * `$uri/`=>`/root_dir/example/xxx.js/index`;
  * `/root_dir/example/index.html`。

* ``` nginx
  location ~*  ^/([^/]+\.js)$ {
    alias /nginx-1.14.2/root_dir/example/js/$1;
  }

  location ~* ^/\.(js)$ {
    root root_dir/example/js/;
  }
  ```

  这一组是**重定向**资源路径，另一组也是一样的。它将`.js`的请求地址重定向到了`alias`和`root`指定的地址。

  `alias`和`root`二者的区别可以了解一下。

## 四、参考资料

* 1.[关于react 在打包后：“找不到资源路径”的问题、部署到服务器二级目录](https://blog.csdn.net/qq_35856855/article/details/88174523?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.channel_param)
* 2.[nginx配置选项try_files详解](https://blog.csdn.net/qq_24861509/article/details/102716191)
* 3.[nginx的location、root、alias指令用法和区别](https://www.nginx.cn/4658.html)

