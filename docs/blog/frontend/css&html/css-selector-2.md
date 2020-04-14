---
title: 【CSS进阶】选择器进阶笔记（2）伪类
date: 2020-03-30 24:11:11
tags: CSS, Selector, CSS进阶
---

# 【CSS进阶】选择器进阶笔记（2）伪类
<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

接上一个[选择器进阶笔记（1）](https://starlightunion.github.io/blog/frontend/css-selector-1.html)，CSS选择器还有**伪类**这一重要的组成部分。

## 一、CSS3之前的伪类

**CSS3之前的伪类**主要如下图所示👇

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

**图示：**

![3](/images/frontend/css/css-selector-02-03.png)

::: danger

需要注意的是第一个`p`标签中是有一个`<br>`的，**强制换行可以控制第一行要显示的内容**。

:::

## 二、CSS3中的伪类

![2](/images/frontend/css/css-selector-02-02.png)

CSS3中新的伪类基本都在这儿了，但是光看**例子描述**基本没啥用，还是一个一个来**试试**，顺便混个眼熟。。

### 1.`~`

```html
<style>
  span ~ p {
    color: red;
  }
</style>

<div>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.</div>
<p>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.</p>
<span>mark</span>
<p>JavaScript</p>
```

**图示：**

![4](/images/frontend/css/css-selector-02-04.png)

### 2.`first-of-type`/`last-of-type`/`only-of-type`

```html
<style>
  /* first-of-type/last-of-type/only-of-type */
  /* 同一个父元素下第一个p元素 */
  p:first-of-type {
    color: red;
  }

  /* 同一个父元素下最后一个p元素 */
  p:last-of-type {
    font-weight: 100;
  }

  /* 选择同一个父元素下只有一个<span>元素的元素 */
  /* 这样写表述还是不够清楚，还是看实例吧。。 */
  span:only-of-type {
    color: green;
  }
</style>

<!-- 实例1 -->
<div>
  <div>JavaScript</div>
  <p>JavaScript</p>
  <span>mark</span>
  <p>JavaScript</p>
  <span id="type">
    mark2
    <span>???</span>
    <p>+++</p>
    +++
    <!-- <span>---</span> -->
  </span>
</div>

<!-- 实例2 -->
<div>
  <div>JavaScript</div>
  <p>JavaScript</p>
  <span>mark</span>
  <p>JavaScript</p>
  <span id="type">
    mark2
    <span>???</span>
    <p>+++</p>
    +++
   <span>---</span>
  </span>
</div>
```

**图示：**

![实例1](/images/frontend/css/css-selector-02-05.png)

> -----------------------（👆实例1 👇实例2）-----------------------

![实例2](/images/frontend/css/css-selector-02-06.png)

::: warning

可以发现`only-of-type`在**仅适用于相同父元素下只有一个`span`元素**，我多加了一个`span`元素，**样式立马失效了。。**

:::

施工中🚧...