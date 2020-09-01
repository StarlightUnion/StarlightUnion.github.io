---
title: CSS和HTML的实用技巧集合
date: 2020/07/11 00:00:00
tags: ["CSS", "HTML", "技巧"]
---

# CSS和HTML的实用技巧集合

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## CSS相关

### 1.选中第`n`的倍数个子元素

```css
/* 选中第 5 的倍数个子元素 */
.parent > .child:nth-child(5n+5) {
  
} 
```

### 2.子元素相对于父元素绝对定位

给父元素设置一个`position: relative`，如果不设置，将会相对于它的祖先元素中有设置`position`的元素定位。

### 3.用好`box-sizing`

参考此文：[【CSS进阶】盒子模型与box-sizing属性](/blog/frontend/css&html/box-model-and-box-sizing.html)

**响应式布局**最好全部设置为`box-sizing: border-box`，这样盒子的宽度包含`padding`的宽度，直接给盒子设置`width: 100%`就可以实现响应式布局，少些麻烦。

## HTML相关

### 1.页面加载完成后执行脚本-`defer`属性

```html
<script type="text/javascript" src="./demo.js" defer="defer"></script>
```

之前的话想要页面加载完后执行的脚本引用都是**直接放在页面最下面**，这样的坏处是要翻一整页代码，但有了`defer`之后，就可以和其它脚本引用一样都放在`head`里面了。

### 2.设置浏览器tab页的图标

```html
<link rel="icon" href="/logo.ico">
```

其实这个不这么写，在根目录下放一个`favicon.ico`也是可以的，但名字必须是`favicon.ico`。



🍗 不断更新...