---
title: 【CSS进阶】选择器进阶笔记（1）
date: 2020/03/29 00:00:00
tags: ["CSS", "Selector", "CSS进阶"]
---

# 【CSS进阶】选择器进阶笔记（1）
<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> CSS作为**web前端基础三剑客**之一，值得好好学习。那从选择器开始进阶！😮

## 一、后代、子元素和相邻兄弟选择器

### 1.后代选择器

后代选择器除了最常见的``div span``/``.class .class``这种可以**选择层次间隔理论上是无限**的用法外，还有**特定选择**~~（我自己想的名字。。。）~~

```html
<style>
   	/* 特定选择 在这里等同于.class.select */
  	/* 选择类名为select的p元素 */
    p.select {
      color: red;
    }

  	/* 选择类名为select的类名为class的元素/标签 */
  	/* 下面的优先级要高于上面的 */
    .class.select {
      color: red;
      font-weight: 700;
    }
</style>

<p class="class">今天是周一。Today is Monday.</p>
<p class="class select">今天是周一。Today is Monday.</p>
<a href="#">今天是周一。Today is Monday.</a>
```

图示：

![1](/images/frontend/css/css-selector-01-01.png)

### 2.子元素选择器和相邻兄弟选择器

>  子元素也是很常用的其实，倒是相邻兄弟不常用。

```html
<style>
   	.class > .first {
      color: red;
    }

    /* 选择类名为class的父元素下的类名为second的兄弟元素，在这里应该是第三个p元素 */
    .class > .second + p {
      font-weight: 700;
    }
</style>

<div class="class">
  <p class="first">今天是周一。Today is Monday.</p>
  <p class="second">今天是周一。Today is Monday.</p>
  <p>今天是周一。Today is Monday.</p>
  <p>今天是周一。Today is Monday.</p>
</div>
```

图示：

![2](/images/frontend/css/css-selector-01-02.png)

```css
...
.class > p + p {
  	font-weight: 700;
}
...
```

上面的样式是选择每个``p``元素的相邻``p``元素，其实就是每个``p``元素的后一个``p``元素，在这里应该是**选择除第一个``p``元素外的所有``p``元素。**

图示：

![3](/images/frontend/css/css-selector-01-03.png)

## 二、属性选择器

本篇的大头来了。每一个**元素/标签**都有属性，比如``a``标签有``href``、``target``等，许多元素还有其特有的属性。通过属性值可以**选择某一个或者多个元素对象**。具体用法如下图所示：↓

![4x](/images/frontend/css/css-selector-01-04.png)

结合实例：

```html
<style>
    /* 属性选择 */
    /* p[title] {
      color: red;
    } */

    /* 选择title="monday"的元素 */
    p[title="monday"] {
      font-size: 18px;
    }

    /* 选择title中包含 mon 的元素 适用于多个属性值*/
    p[title~="mon"] {
      font-weight: 700;
    }

    /* 选择title中以 mon 为第一个属性值的元素 适用于多个属性值*/
    p[title|="mon"] {
      font-family: 'Courier New', Courier, monospace;
    }

    /* 选择包含以 da 为开头的title属性的元素 适用于多个属性值**/
    p[title^="da"] {
      font-family: Georgia, 'Times New Roman', Times, serif;
    }

    /* 选择包含以 ay1 为结尾的title属性的元素 适用于多个属性值**/
    p[title$="ay1"] {
      opacity: 0.2;
    }

    /* 选择所有title属性值中包含有 day 的元素 */
    p[title*="day"] {
      color: red;
    }
</style>

<p title="monday">今天是周一。Today is Monday.</p>
<p title="monday mon">今天是周一。Today is Monday.</p>
<p title="mon1">今天是周一。Today is Monday.</p>
<p title="mon">今天是周一。Today is Monday.</p>
<p title="day">今天是周一。Today is Monday.</p>
<p title="day1">今天是周一。Today is Monday.</p>
<p title="">今天是周一。Today is Monday.</p>
```

图示：

![5](/images/frontend/css/css-selector-01-05.png)





接下篇。。。





