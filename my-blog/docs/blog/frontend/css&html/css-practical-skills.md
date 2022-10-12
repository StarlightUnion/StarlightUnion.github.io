---
title: CSS实用技巧集合
date: 2020/01/12 00:00:00
tags: ["CSS", "技巧"]
---

# CSS实用技巧集合

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 1.选中第`n`的倍数个子元素

```css
/* 选中第 5 的倍数个子元素 */
.parent > .child:nth-child(5n+5) {

}
```

## 2.子元素相对于父元素绝对定位

给父元素设置一个`position: relative`，如果不设置，将会相对于它的祖先元素中有设置`position`的元素定位。

## 3.用好`box-sizing`

参考此文：[【CSS进阶】盒子模型与box-sizing属性](/blog/frontend/css&html/box-model-and-box-sizing.html)

**响应式布局**最好全部设置为`box-sizing: border-box`，这样盒子的宽度包含`padding`的宽度，直接给盒子设置`width: 100%`就可以实现响应式布局，少些麻烦。

## 4.`display:none`与`visibility:hidden`

* `display:none`：隐藏元素，不保留页面空间。
* `visibility:hidden`：隐藏元素，但只是看不见而已，所处的页面空间还在。

## 5.超出部分文字显示省略号

```css
.ellipsis {
  overflow: hidden;      /*溢出隐藏*/
  white-space: nowrap;	/*规定文本不进行换行*/
  text-overflow: ellipsis;	/*当对象内文本溢出时显示省略标记（...）*/
}
```

## 6.使用`overflow:hidden`进行响应式布局

`overflow:hidden`除了常见意义上的超出父元素大小部分进行裁剪隐藏外，还可以防止父元素被子元素撑开。

## 7.`pointer-events:none`和`user-select:none`

* `pointer-events:none`：禁用所有鼠标事件，**点击、鼠标移入移出、选择等事件**都不能用了。

  参考此文：[CSS3 pointer-events:none应用举例及扩展](https://www.zhangxinxu.com/wordpress/2011/12/css3-pointer-events-none-javascript)

* `user-select:none`：**禁用鼠标选择事件**。<font style="user-select:none">一般我们选中网页文字，文字会呈现选中效果</font>，如下图：👇

  ![css-practical-skills-01](/images/frontend/css/css-practical-skills-01.png)

  > 👉~~现在这段文字已经选不中了~~



****


🍗 不断更新...

