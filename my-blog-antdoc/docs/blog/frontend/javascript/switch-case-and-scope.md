---
title: 【JavaScript进阶】Switch/Case和块级作用域
date: 2021/03/30 22:31:00
tags: ["JavaScript进阶", "作用域"]
---

# 【JavaScript进阶】Switch/Case和块级作用域

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 一、先看一段代码

* ![switch-case-01](/images/frontend/js/switch-case-01.png)

  执行这段代码的话就会报错：

  `Uncaught SyntaxError: Identifier 'b' has already been declared`

  意为`b`已经被声明过了，无法重复声明。

* **解决问题的话也简单**，使用`var`代替`const`就好了。

  ![switch-case-03](/images/frontend/js/switch-case-03.png)

* 但是如果不想用`var`呢？可以这样：👇

  ![switch-case-02](/images/frontend/js/switch-case-02.png)



🚧 施工中...

