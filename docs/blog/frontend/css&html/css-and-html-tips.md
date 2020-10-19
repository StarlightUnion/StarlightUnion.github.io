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

### 4.`display:none`与`visibility:hidden`

* `display:none`：隐藏元素，不保留页面空间。
* `visibility:hidden`：隐藏元素，但只是看不见而已，所处的页面空间还在。

### 5.超出部分文字显示省略号

```css
.ellipsis {
  overflow: hidden;      /*溢出隐藏*/
	white-space: nowrap;	/*规定文本不进行换行*/
	text-overflow: ellipsis;	/*当对象内文本溢出时显示省略标记（...）*/
}
```

### 6.使用`overflow:hidden`进行响应式布局

`overflow:hidden`除了常见意义上的超出父元素大小部分进行裁剪隐藏外，还可以防止父元素被子元素撑开。

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

### 3.输入框限制数字输入

`oninput`事件在`value`改变时触发，但**如果通过`js`改变将不会触发**。

#### 支持浮点数，不支持正负

```html
<input
   oninput="value=value.replace(/[^\d|^\.]/g,'')"
   placeholder="请输入数字"
>
```

#### 仅支持数字，不支持正负

```html
<input
   oninput="value=value.replace(/[^\d]/g,'')"
   placeholder="请输入数字"
>
```

### 4.使用`<colgroup>`和`<col>`格式化表格

参考此文：[HTML `<colgroup>` 标签](https://www.w3school.com.cn/tags/tag_colgroup.asp)

🍗 不断更新...