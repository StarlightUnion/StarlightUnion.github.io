---
title: Array.prototype.filter()进阶笔记
date: 2020/07/05 21:01:00
tags: ["Javascript", "Method"]
---

# Array.prototype.filter()进阶笔记

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> `Arrar.filter()`方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。--MDN
>
> 该方法**不会改变原数组**。

**语法：**`var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])`。

`callback`为回调函数，它定义的三个参数`element`、`index`和`array`分别是**当前测试元素**、**当前测试元素索引**和**测试的数组本身**。

****

之前使用`filter`都是如下使用：👇

```js
arr.filter(item => {
return item.name !== 'xxx';
// return item.name.indexOf("xxx") !== 1;
})
```

实际使用过程中，这种写法**越来越难以满足业务需求**，迫切需要`Arrar.filter()`的进阶用法。

## 一、简单用法

```js
// 简单使用
const res = [1, 2, 3, 4, 5].filter(item => {
  return item <= 3;
});

console.log(res);// [1, 2, 3]
```

## 二、进阶使用



施工中🚧...

