---
title: 【CSS进阶】选择器进阶笔记（2）伪类
date: 2020/03/30 00:00:00
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
  /* 选择前面是span元素的p元素 */
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

### 2.`:first-of-type`/`:last-of-type`/`:only-of-type`

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
  /* 这样写表述还是不够清楚，还是看实例1和2吧。。 */
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

### 3.`:only-child`/`:nth-child(n)`/`:nth-last-child(n)`

```html
<style>
  /* 父元素下有且只有一个p元素的 */
  p:only-child {
    color: red;
  }
</style>

<div>JavaScript0</div>
<div>
  <p>JavaScript1</p>
  <!-- 如果下面的span不注释，那么它的兄弟p元素中的文字将不会是红色 -->
  <!-- <span>JavaScript1</span> -->
</div>
<div>
  <p>JavaScript2</p>
  <p>JavaScript2</p>
</div>
```

**图示：**

![7](/images/frontend/css/css-selector-02-07.png)

```html
<style>
  /* 父元素下第2个元素为p元素的 */
  p:nth-child(2) {
    font-weight: 200;
  }
</style>

<div>JavaScript0</div>
<div>
  <span>JavaScript1</span>
  <p>JavaScript1</p>
  <p>JavaScript1</p>
</div>
<div>
  <p>JavaScript2</p>
  <p>JavaScript2</p>
</div>
```

**图示：**

![8](/images/frontend/css/css-selector-02-08.png)

```html
<style>
    /* 选择倒数第二个p元素，只有倒数第二个元素为p元素时 */
    p:nth-last-child(2) {
      color: blue;
    }
</style>

<div>
  <div>JavaScript0</div>
  <div>
    <p>JavaScript1</p>
    <p>JavaScript1</p>
    <span>JavaScript1</span>
  </div>
  <div>
    <p>JavaScript2</p>
    <span>JavaScript2</span>
    <p>JavaScript2</p>
  </div>
</div>
```

**图示：**

![9](/images/frontend/css/css-selector-02-09.png)

### 4.`:nth-of-type(n)`/`:nth-last-of-type()`/`:last-child`

以下几个伪类的测试HTML结构如下：

```html
<div>
  <div>JavaScript0</div>
  <div>
    <p>JavaScript1</p>
    <p>JavaScript1</p>
    <span>JavaScript1</span>
  </div>
  <div>
    <p>JavaScript2</p>
    <span>JavaScript2</span>
    <p>JavaScript2</p>
  </div>
</div>
```

```css
/* 选择第二个p元素 */
p:nth-of-type(2) {
	color: red;
}
```

**图示：**

![10](/images/frontend/css/css-selector-02-10.png)

```css
/* 自下而上，选择倒数第二个p元素 */
p:nth-last-of-type(2) {
  color: red;
}
```

**图示：**

![11](/images/frontend/css/css-selector-02-11.png)

```css
/* 选择最后一个p元素，只有最后一个元素为p元素时 */
p:last-child {
  color: red;
}
```

**图示：**

![12](/images/frontend/css/css-selector-02-12.png)

### 5.`:root`/`:empty`/`:target`/`:enabled`/`:disabled`/`:checked`

这几个其实都可以**根据字面意思来理解**。。

* `:root`：选择根元素，**特定用法**，只能这么写，没有其他的像`p:root`这种什么的。。`:root`这样写将选择文档根元素，就是`<html>`。
* `:empty`：选择**没有子元素的每个父元素** ，例如`div:empty`，就是选择每个下面没有子元素的`div`。
* `:target`：选择**当前活动的HTML锚**，DEMO详见[CSS3 :target 选择器](https://www.w3school.com.cn/tiy/t.asp?f=css_sel_target)。
* `:enabled`：选择**启用**的元素。
* `:disabled`：选择**禁用**的元素。
* `:checked`：选择**被选中**的元素，应用于`checkbox`。

### 6.`:not(selector)`/`::selection`

* `:not()`是比较常用的，可以用来**选择一堆兄弟元素中特殊的一个或多个**。
* `::selection`没用过，不过可以试一下这个DEMO[CSS3 ::selection 选择器](https://www.w3school.com.cn/tiy/t.asp?f=css_sel_selection)，**需要注意的是，这个选中是指鼠标右键按住拖移的选中。**