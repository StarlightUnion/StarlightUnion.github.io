---
title: 【CSS进阶】选择器进阶笔记（2）伪类和伪元素
date: 2020-03-30 00:00:00
tags: CSS, selector, CSS进阶
---

# 【CSS进阶】选择器进阶笔记（2）伪类和伪元素

接上一个[选择器进阶笔记（1）](https://starlightunion.github.io/blog/frontend/css-selector-1.html)，CSS选择器还有**伪类和伪元素**这两大重要的组成部分。

## 一、CSS3之前的伪类和伪元素

**CSS3之前的伪类和伪元素**主要如下图所示👇

![1](/images/frontend/css/css-selector-02-01.png)

表中`:first-letter`和`:first-line`都是生面孔，**不过看字面意思应该也能猜出他的作用。。。**

**测试一下：**

```html
<style>
    p:first-letter {
      font-size: 20px;
      font-weight: 700;
    }

    p:first-line {
      color: red;
    }
</style>
<div>
    <p>
      JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
      <br>
      While it is most well-known as the scripting language for Web pages,
      many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
    </p>
    <p>
      JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
      While it is most well-known as the scripting language for Web pages,
      many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
    </p>
</div>
```

图示：

![3](/images/frontend/css/css-selector-02-03.png)

::: danger

需要注意的是第一个`p`标签中是有一个`<br>`的，**强制换行可以控制第一行要显示的内容**。

:::

## 二、CSS3中的伪类和伪元素

CSS3中新增了许多新的伪类伪元素，许多都是不太熟的。在这里**测试一下顺便混个眼熟**😂。

![2](/images/frontend/css/css-selector-02-02.png)

施工中🚧...