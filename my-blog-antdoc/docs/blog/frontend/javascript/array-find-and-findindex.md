---
title: Array.find()和findIndex()方法
date: 2020/03/19 19:34:00
tags: ["Javascript", "Method"]
---

# Array.find()和findIndex()方法

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> JavaScript的方法“**遍历**”从数组开始！先从简单的开始。。😂

`Array.find()`和`Array.findIndex()`的**区别有两点：**

* 前者是**找值**，后者是**找索引**；
* 前者找到则返回**项**，找不到返回`undefined`，后者找到返回**项的索引**，找不到则返回`-1`。

它们的**共同点**：**找到第一个符合条件的项就停止寻找**。并且二者都<font color="#FF0000">不会改变原数组</font>。

## 一、`Array.find()`

*寻找第一个大于4的数*

```js
const array = [1, 2, 3, 4, 5, 6, 7];
let res = array.find(item => item > 4);
console.log(res);// 5
```

*寻找第一个年龄大于25的成员*

```js
const allMembers = [
  {name: '张三', age: 21},
  {name: '李思', age: 19},
  {name: '王武', age: 27},
  {name: '赵柳', age: 32},
  {name: '韩起', age: 20}
];

let res = allMembers.find(item => {
  return item.age > 25;
});
console.log(res);// {name: "王武", age: 27}
```

## 二、`Array.findIndex()`

*寻找第一个大于4的项的索引*

```js
const array = [1, 2, 3, 4, 5, 6, 7];
let res = array.findIndex(item => item > 4);
console.log(res);// 4
```

*寻找第一个年龄大于25的成员的索引*

```js
const allMembers = [
  {name: '张三', age: 21},
  {name: '李思', age: 19},
  {name: '王武', age: 27},
  {name: '赵柳', age: 32},
  {name: '韩起', age: 20}
];

let res = allMembers.findIndex(item => {
  return item.age > 25;
});
console.log(res);// 2
```

## 三、参考资料

* [Array.prototype.find() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* [Array.prototype.findIndex() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)