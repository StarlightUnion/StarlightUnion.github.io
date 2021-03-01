---
title: import和require和JS模块化
date: 2020/10/19 20:10:02
tags: ["ES6", "import", "require", "CommonJS"]
---

# import和require和JS模块化

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 一、`import`和`require`

&emsp;&emsp;二者都属于JS的模块化标准。`import`是ES6规范（以下简称**ESM**），而`require`则是`CommonJS`规范（以下简称**CJS**）。

&emsp;&emsp;如何区分二者：ESM：`import/export`，CJS：`require/exports`。

&emsp;&emsp;在**ES6**之前的`JavaScript`没有模块化概念，在各种插件中的变量命名**容易污染全局作用域**，简直就是灾难。

## 二、`CJS`

&emsp;&emsp;CJS先于ESM被提出，CJS诞生之初是为了在**浏览器环境之外的地方使用模块化的JavaScript**，在CJS中，**每一个文件就是一个模块，拥有自己独立的作用域，变量，以及方法等，对其他的模块都不可见。CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。require方法用于加载模块。**

&emsp;&emsp;Node采用CJS规范，所以我们会发现CJS模块通常需要Node环境的支持，换句话说，它需要服务器环境。



🚧 施工中...

## 参考资料

* 1.[JS中的「import」和「require 」](https://www.jianshu.com/p/f1e54dde30c8)
* 2.[CommonJS规范](https://www.jianshu.com/p/dd08f4095a49)
* 3.[前端科普系列-CommonJS：不是前端却革命了前端](https://zhuanlan.zhihu.com/p/113009496)

