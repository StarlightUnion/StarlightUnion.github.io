---
title: 【HTML进阶】如何实现点击a标签直接下载图片？
date: 2021/01/26 00:00:00
tags: ["HTML", "HTML进阶", "标签"]
---

# 【HTML进阶】如何实现点击a标签直接下载图片？

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 近几天遇见个需求，需要点击某个图标直接下载图片。

参考以前的做法，在`<a>`标签里套了个图标，但是**点击之后却并不是直接下载**，而是**直接打开了图片**？😒

**我要的是下载不是预览啊喂！？**

****

经过一番研究~~搜索~~，发现不少文章的**解决方案**都直接指向了`<a>`标签的一个属性`download`（详见[参考资料[1]](#四、参考资料)）。

## 一、`<a>`标签的`download`属性

::: tip 定义和用法

`download`属性规定被下载的超链接目标。

在 \<a> 标签中必须设置`href`属性。

该属性也可以设置一个值来规定下载文件的名称。所允许的值没有限制，浏览器将自动检测正确的文件扩展名并添加到文件 (.img, .pdf, .txt, .html, 等等)。

:::

### 1.注意这里有坑

::: danger 注意

只有当`href`为**相对地址**时才能成功下载，如果填写的是**绝对地址**，**还是直接打开预览！！！**

:::

### 2.测试一下

#### 1）相对地址

* `<a href="/logo.png">测试链接1</a>`

  <a href="/logo.png">测试链接1</a>

* `<a href="/logo.png" download="logo">测试链接2</a>`

  <a href="/logo.png" download="logo">测试链接2</a>

#### 2）绝对地址

* `<a href="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" download="test">测试链接3</a>`

  <a href="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" download="test">测试链接3</a>

## 二、如何解决绝对地址的下载问题

目前我能想到两种方法：

* 1.针对**其它源的图片或文件地址做代理**，将对它们的访问代理到本地处理。
* 2.将**其它源的图片或文件转成`base64`格式**放入`href`。

## 三、浏览器兼容性

![a-download-01](/images/frontend/css/a-download-01.png)

## 四、参考资料

* 1.[HTML \<a\> download 属性 - W3School](https://www.w3school.com.cn/tags/att_a_download.asp)
* 2.[在html使用a标签 直接下载图片 不通过后台实现直接下载](https://www.cnblogs.com/lizhaoyao/p/5457415.html)

* 3.[点击a标签下载当前链接的图片](https://blog.csdn.net/u011423258/article/details/84821792)

