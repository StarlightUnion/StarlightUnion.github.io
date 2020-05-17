---
title: JS的浮点运算精度问题
date: 2020/05/06 00:00:00
tags: Javascript
---

# JS的浮点运算精度问题

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

>  ![float-operation-01](/images/frontend/js/js-float-operation-01.jpg)
>
> 如上图所示，在JS中**浮点数的运算会出现精度问题**。究其原因，**我们是以十进制输入的数字，但是计算机是以二进制运行的**。程序中计算两个十进制的数，计算机需要将其转换为二进制，运算结束后再转为十进制返回，转换是不完美的。。
>
> 虽然JS中一般**不涉及比较复杂的浮点数运算**，但也不是绝对的用不到，还是要处理一下的。

施工中🚧...

