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

### 筛选年龄大于`20`的信息

根据对象的**某一属性值**作为条件。

```js
const allMembers = [
  {name: '张三', age: 21},
  {name: '李思', age: 19},
  {name: '王武', age: 27},
  {name: '赵柳', age: 32},
  {name: '韩起', age: 20}
];

const member = allMembers.filter(item => {
  return item.age >= 20;
})
```

### 结合其他方法进行链式调用

***结合`map`处理过滤后数组***

```js
// 结合map处理过滤后数组
const member = allMembers.filter(item => {
  return item.age >= 20;
}).map(item => {
  return item.name;
})

console.log(member);// ["张三", "王武", "赵柳", "韩起"]
```

***结合`sort`对过滤后数组进行排序***

```js
// 结合sort对过滤后数组进行排序
const member = allMembers.filter(item => {
  return item.age >= 20;
}).sort((a, b) => {
  return a.age - b.age;
})

console.log(member);
// [{name: "韩起", age: 20},
// {name: "张三", age: 21},
// {name: "王武", age: 27},
// {name: "赵柳", age: 32}]
```

### 获取过滤后剩下的/通不过测试的

```js
// 获取过滤后剩下的/通不过测试的
let _member = [];
const member = allMembers.filter(item => {
  if (item.age >= 20) {
    return true;
  } else {
    _member.push(item);
    return false;
  }
})

console.log(member);
// [{name: "韩起", age: 20},
// {name: "张三", age: 21},
// {name: "王武", age: 27},
// {name: "赵柳", age: 32}]
console.log(_member);
// [{name: "李思", age: 19}]
```

### 数组去重

```js
// 数组去重
const _allMembers = [1, 10, 12, 9, 3, 2, 1, 10, null, undefined, null, [], [1], []];
const _res = _allMembers.filter((item, index, array) => {
  return array.indexOf(item) === index;
})

console.log(_res);// [ 1, 10, 12, 9, 3, 2, null, undefined, [], [1], [] ]
```

上面的去重方法只是个简单的方法，只适合5种数据类型`Number、String、Boolean、undefined、Null`。