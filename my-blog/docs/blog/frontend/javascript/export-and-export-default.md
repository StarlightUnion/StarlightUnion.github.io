---
title: export、export default和import
date: 2020/08/07 00:00:00
tags: ["ES6", "export", "import"]
---

# export、export default和import

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

**问题起源**：同事给项目加新的模块的时候，`React`报了这个错👇，然后模块没有加载成功。。

`...Lazy element type must resolve to a class or function...`

最后搞了半天发现是`export`的问题，**模块导出写错了**不符合规范，导致`React`的懒加载失败了。我发现我还是太菜鸡了😐

本文研究一下`export`的问题，还有与之对应的`import`。

## 一、ES6最重要特性之一

`export`还有`import`是**ES6最重要的特性之二**。

`export`的作用是将一个`JavaScript`模块中的**值、方法、对象等**导入到另一个模块中，另一个模块通过`import`语句来使用。

在**导入的模块中只能读取，不能修改**。想要修改的话只能去到**导出的模块中修改**，并且**修改的值会实时更新**。

## 二、使用方法

### 语法

有两种`exports`导出方式：

* 命名导出（**每个模块包含任意数量**）
* 默认导出（**每个模块包含一个**）

### 用法

**export**

```js {7,10,11,16}
// export
const datas = [];
function print (str) {
  console.log(str);
}

export { datas, print };

// 直接导出 上下等效
export const datas = [];
export function print (str) {
  console.log(str)
}

// import
import { datas, print } from "export"
```

**export default**

顾名思义，默认导出**只能导出一个**，并且可以**在导入模块中为其定义任何符合规范的名称**。

并且一个模块中只能有一个`export default`。

```js {6,9,10}
// export-default
function print (str) {
  console.log(str);
}

export default print;

// import
import print from "export-default"
import print1 from "export-default"
```

## 三、区别

* 1.`export`可以在一个模块中使用多次，而`export default`**只能使用一次**。

* 2.使用`export`和`export default`时，`import`要与之对应：

  * `export { datas, func1 }` => `import { datas, func1 } from "xxx"`
  * `export default func1` => `import func2 from "xxx"`

* 3.`export `导出的**变量、方法等**在**导入模块中的变量名必须与导出模块相同**；

  `export default`导出的**变量、方法等**在**导入模块中可以使用任何符合命名规范的变量名**。

## 四、参考资料

* [export - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export)

