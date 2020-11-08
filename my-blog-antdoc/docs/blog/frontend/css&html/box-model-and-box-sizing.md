---
title: 【CSS进阶】盒子模型与box-sizing属性
date: 2020/02/05 00:00:00
tags: ["CSS", "CSS进阶", "盒子模型"]

---

# 【CSS进阶】盒子模型与box-sizing属性

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 一、CSS盒子模型

### 概念

**盒子模型**（Box Model）是用来表示HTML元素的一种标准模型。所有的HTML元素都是一个**盒子**。

一个**标准的盒子模型**由4部分构成，由里到外包括*内容（Content）、内边距（Padding）、边框（Border）、外边距（Margin）*。

标准盒子模型示意图如下所示。👇（图片来自**MDN web docs**，[参考资料[1]](#三、参考资料)，版权归原创者所有）

![box-model-03](/images/frontend/css/box-model-03.png)

* 内容`Content`：**黑色实线**矩形区域；
* 内边距`Padding`：**黑色实线区域**到**蓝色边框**中间的这部分**白色区域**；
* 边框`Border`：**蓝色边框区域**；
* 外边距`Margin`：**格子边框区域**。

### 实例

> 下面分别是代码和与之对应的浏览器的解析内容。

::: warning 注意

👉 定义`BlockWidth`为样式表中`.block`设置的宽度，`ViewWidth`为**可视区域部分的宽度**。

👉 `margin`是**不计入可视区域部分的**。

:::

```html
<!-- html -->
<div class="block"></div>

<!-- css -->
<style>
  .block {
    width: 200px;
    height: 100px;
    padding: 10px;
    border: 10px solid #000;
    background-color: #ccc;
  }
</style>
```

![box-model-01](/images/frontend/css/box-model-01.png)

此时`.block`的宽度的内容部分区域宽度就是`200px`。

* *ContentWidth = BlockWidth*
* *ViewWidth = ContentWidth(BlockWidth) + 2 * PaddingWidth + 2 * BorderWidth*

## 二、`box-sizing`属性

`box-sizing`属性告诉浏览器**如何解析盒子模型**。

`box-sizing`有两个属性值，分别为`content-box`和`border-box`。

* `content-box`：**默认值**，使用**前文的方法解析盒子模型**，即`ContentWidth = BlockWidth`；
* `border-box`：**CSS设置的宽度包括内边距和边框**。即：
  * *BlockWidth = ContentWidth + 2 * PaddingWidth + 2 * BorderWidth*
  * *ViewWidth = BlockWidth*

::: warning 注意

👉 不指明是`border-box`的话，**默认就是`content-box`**。

👉 `border-box`不包括`margin`。

:::

### 实例

>  给前文的实例增加一个`box-sizing: border-box;`样式。

```html{12}
<!-- html -->
<div class="block"></div>

<!-- css -->
<style>
  .block {
    width: 200px;
    height: 100px;
    padding: 10px;
    border: 10px solid #000;
    background-color: #ccc;
    box-sizing: border-box;
  }
</style>
```

![box-model-02](/images/frontend/css/box-model-02.png)

## 三、`content-box`与`border-box`

`box-sizing: border-box`常用于**响应式布局**。

为了使页面布局可以随浏览器窗口变化而变化，一般将元素的宽度/高度设为`100%`，即`width: 100%; height: 100%;`，即**继承**父元素的宽度和高度。

如果是**默认布局`box-sizing: content-box;`**，这时会遇到一些问题，如果设置了`padding`和`border`，**会发生错位现象**。

如下实例👇。

```html
<!-- html -->
<div class="block">
	<div class="sub-block"></div>
</div>

<!-- css -->
<style>
  .block {
      width: 200px;
      height: 100px;
      padding: 10px;
      border: 10px solid #000;
      background-color: #ccc;
    }

    .sub-block {
      width: 100%;
      height: 100%;
      padding: 10px;
      border: 10px solid #c1dfff;
      background-color: #fff;
    }
</style>
```

![box-model-04](/images/frontend/css/box-model-04.png)

****

> 加一行`box-sizing: border-box`。

![box-model-05](/images/frontend/css/box-model-05.png)

## 四、参考资料

* [CSS 基础框盒模型介绍 - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
* [box-sizing - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)

