---
title: 使用Nginx代理访问图片等资源
date: 2020/08/06 00:00:00
tags: ["杂记", "Nginx"]
---

# 使用Nginx代理访问图片等资源

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

>  工作上遇到的问题，这里记录一下处理方法。📝

## 问题

前端页面需要展示**详情图片**，后端把图片都存在一个文件夹下（另一个盘。。），并且他这个版本的服务（老老老老。。）没有文件服务。🤔

通俗的来说，就是我的页面放在`D`盘，图片却需要去获取`E:/images/`里的图片。

`<img>`的`src`属性并不能接受一个**另一个磁盘的绝对地址**，例如`E:/images/image-01.png`。

所以需要**代理访问**资源。

## 解决

好在前端使用`Nginx`部署，顺便查了一下，可以实现代理访问。

```nginx{8,10}
...
server {
  listen 8000;
  server_name xxxx;
  
  location /fileimages/ {
    # 重写访问地址 将路径中以 /fileimages/ 为开头的访问指定访问目录
    rewrite ^/fileimages/(.*)$ /$1 break;
    # 指定访问目录为 E:/images
    root E:/images;
  }
}
...
```

在`Nginx`中这样配置后

`<img>`的`src`可以这样写：

```html
<img src="/fileimages/image-01.png">
```

就可以访问到`E:/images`下面的图片了。

## 参考资料

* [nginx代理访问图片的方法](https://www.jianshu.com/p/0b4afcd37ca7)

