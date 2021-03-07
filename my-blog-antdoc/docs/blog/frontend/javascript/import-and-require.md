---
title: 【JavaScript进阶】从import和require到JS模块化
date: 2020/10/19 20:10:02
tags: ["import", "require", "CommonJS", "ES6"]
---

# 【JavaScript进阶】从import和require到JS模块化

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 一、JavaScript模块标准

在JavaScript中，存在两种模块化标准。第一种是ES6模块化标准（以下简称`ESM`），另一种则是`CommonJS`规范（以下简称`CJS`）。

<font color="red">⚠️二者互不兼容。</font>

其中`CJS`最早出现。在此之前，前端没有模块化概念，在各种插件中的变量命名**容易污染全局作用域**，简直就是灾难。

****

`import/export`和`require/exports`分属于`ESM`和`CJS`标准，它们有很大的区别。

### 1.`CJS`

`CJS`先于`ESM`被提出，`CJS`诞生之初是为了在**浏览器环境之外**的地方使用模块化的JavaScript。

> 在`CJS`中，**每一个文件就是一个模块，拥有自己独立的作用域，变量，以及方法等，对其他的模块都不可见。`CommonJS`规范规定，每个模块内部，`module`变量代表当前模块。这个变量是一个对象，它的`exports`属性（即`module.exports`）是对外的接口。加载某个模块，其实是加载该模块的`module.exports`属性。`require`方法用于加载模块。** *—— 阮一峰*

Node采用`CJS`规范，所以我们会发现`CJS`模块通常需要Node环境的支持，换句话说，它需要服务器环境的支持。

### 2.`ESM`

`ESM`是ECMAScript标准的模块化标准，在**ES6**中被正式提出。在此之前的`CJS`标准应用场景是服务端环境，`ESM`则是用于**浏览器环境**。

### 3.二者区别

**如何简单区分二者**：👇

* `CJS`：`require/exports`

* `ESM`：`import/export`。

****

**在加载时**，`CJS`属于**运行时加载，理论上可以放在代码的任何地方**，`CJS`在加载时会加载模块内的所有的东西，使用其中的一种或几种。而`ESM`属于**编译时加载（静态加载），必须放在代码开头**，它可以在编译时就完成模块加载，速度比较快。

## 二、`import/export`和`require/exports`的使用

### 1.`import/export`

```js
// module
export default func;
export const func;
export function func;
export { func1, func2 };
export * from "other_module_path";

// main
import func from "module";
import { newFunc as func } from "module";
import * as funcModule from "module";
import { func } from "module";
import module, { func } from "module";
```

### 2.`require/exports`

```js
// module
module.exports = {
  func: function() {}
}

// main
const funcModule = require("module");// 全部引入
funcModule.func()
```





## 参考资料

* 1.[JS中的「import」和「require」](https://www.jianshu.com/p/f1e54dde30c8)
* 2.[前端科普系列-CommonJS：不是前端却革命了前端](https://zhuanlan.zhihu.com/p/113009496)
* 3.[Node.js 如何处理 ES6 模块 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html)
* 4.[浏览器加载 CommonJS 模块的原理与实现 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2015/05/commonjs-in-browser.html)

