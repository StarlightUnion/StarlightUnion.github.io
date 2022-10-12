---
title: "【HTML进阶】base标签的使用技巧-为页面设置统一的资源地址"
date: 2020/03/31 00:00:00
tags: ["HTML", "HTML进阶", "标签"]
---

# 【HTML进阶】base标签的使用技巧-为页面设置统一的资源地址

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 要不是因为部署项目，我还不知道有这个标签🙄。

> `<base>`标签是用来指定一个**HTML页中所有的`相对路径`**的**根路径**，对比测量基准，我把它称为**基路径/基值**，反正是自己爱怎么叫就怎么叫。。。

::: warning

* 一个HTML中只能有**一个**`<base>`，并且这个`<base>`的`href`属性必须有值。如果有多个的话，只会使用第一个``<base>``标签。

* `<base>`标签需放在`<head>`里面，并且得是`<head>`的第一个子元素。
* 该属性设置的**基路径**可以在JS中使用 `document.baseURI` 获取到。如果文档不包含`<base>`元素，`baseURI` 默认为 `document.location.href`。
* 这个**基路径**可以用来解析**页面中所有的相对路径**，比如JS`<script>`，CSS`<link>`，图片`<img>`，超链接`<a>`等元素的路径。

:::

由于公司以往的项目是使用`.net`技术**前后端不分离**开发的，所以也不需要手动配置地址。但这事坏就坏在这个框架是**公司自己鼓捣的**。。。它的入口文件`index.html`的`<head>`中一长串的**JS和CSS文件引用**，手动改也不现实。之前部署前后端分离项目的时候都是老老实实的**查找替换**，但是总不是个办法。经过一顿研究~~百度~~，找到了这么个方法，这里放上[参考资料](https://blog.csdn.net/qq_30109365/article/details/82182508)。

## 一、`<base>`标签的用法

```html
<head>
> <base href="http://www.xxx.com/">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	...
</head>
```

用法如上面的实例代码所示，挺简单的，但是怎么**配置静态资源的路径有点麻烦**，不过搞懂了也简单。

前文提到`<base>`标签是**一个HTML页**中所有的`相对路径`的`根路径`，所以引用的静态资源都得是相对路径，如果确实需要引用网络上的资源的话设置绝对路径就好了。

## 二、设置静态资源路径

```
.根目录
├── common
│   ├── 111.js
│   ├── 111.css
│   ├── 222.js
│   └── 222.css
├── public
│   ├── html
│   │   └── index.html
│   └── script
│       └── plug.js
```

### 1.设置一

如上图这样的文件目录结构，引用**相关静态资源**使用`<base>`标签可以设置为：👇

```html
<head>
  <base href="http://www.xxx.com/">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <script type="text/javascript" src="/common/111.js"></script>
  <script type="text/javascript" src="/common/222.js"></script>
  <link rel="stylesheet" href="/common/111.css">
  <link rel="stylesheet" href="/common/222.css">

  <script type="text/javascript" src="/public/scripts/plug.js"></script>
	...
</head>
```

### 2.设置二

同样的文件目录结构，还可以设置为：

```html
<head>
  <base href="http://www.xxx.com/public/script/">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--  -->
  <script type="text/javascript" src="/common/111.js"></script>
  <script type="text/javascript" src="/common/222.js"></script>
  <link rel="stylesheet" href="/common/111.css">
  <link rel="stylesheet" href="/common/222.css">

> <script type="text/javascript" src="/script/plug.js"></script>
	...
</head>
```

设置一很简单，设置二这样也是可以的。

浏览器在解析的时候会比较**基路径**和**静态文件的相对路径**，如果**相对路径中的一部分包含在基路径中**，比如`plug.js`的`/script/`在基路径中已经有了，那么就会将二者拼起来

->`http://www.xxx.com/public/script/plug.js`

如果没有则会取**前面的域名（如果为ip地址的话则是ip+端口号）**和**相对路径**拼起来，比如`111.js`

->`http://www.xxx.com/common/111.js`

## 三、浏览器兼容性

![html](/images/frontend/css/html-base-tag-01.png)