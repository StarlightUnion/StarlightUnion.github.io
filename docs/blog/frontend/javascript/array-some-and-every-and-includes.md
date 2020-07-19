---
title: Array.some()、every()、includes()方法
date: 2020/04/10 00:00:00
tags: ["Javascript", "Method"]
---

# Array.some()、every()、includes()方法

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

<font color="#FF0000">三者都不会改变原数组。</font>

****

* `Array.some()`方法测试数组中是不是**至少有1个元素通过了被提供的函数测试**。它返回的是一个布尔值。

  即<font color="#FF0000">一真即真，全假为假。</font>

* `Array.every()`方法测试一个数组内的**所有元素是否都能通过某个指定函数的测试**。它返回一个布尔值。

  即<font color="#FF0000">全真为真，一假即假。</font>

* `Array.includes()`方法用来**判断一个数组是否包含一个指定的值**，根据情况，如果包含则返回`true`，否则返回`false`。

## 一、`Array.some()`

### 简单使用

*判断数组的一个是否符合测试条件*

```js
const array = [1, 2, 3, 4, 5, 6];
let res = array.some(item => item > 3);
console.log(res);// true 至少有一个大于3

let _res = array.some(item => item > 10);
console.log(_res);// false
```

*判断数组中是否存在某个值*

```js
const array = [1, 2, 3, 4, 5, 6];
let res = array.some(item => item === 10);
console.log(res);// false
```

### 多个嵌套使用

*判断两个数组中是否有相同的数字*

```js
const array = [1, 2, 3, 4, 5, 6],
_array = [11, 9, 20, 2];

let res = array.some(item => {
  return _array.some(_item => {
    return item === _item;
  })
})

console.log(res);// true
```

*从两个数组中寻找第一个相同的数字*

> 把上面的稍微改一下。。
>
> 🤣感觉还是用`find()`比较好。👉 [Array.find()和findIndex()方法](/blog/frontend/javascript/array-find-and-findindex.html)

```js
const array = [1, 2, 3, 4, 5, 6],
_array = [11, 9, 20, 2];
let res;

array.some(item => {
  return _array.some(_item => {
    if (item === _item) {
      res = item;
      return true;
    }
  })
})

console.log(res);// 2
```

### 其它用途

> 在使用`find()`前，我经常将`some()`用来执行查找。特别是**数组中每个项都有一个唯一的ID的，查找要根据ID去找的那种**。
>
> 根据ID去找意味着在找到后就可以停止循环，不用再继续执行循环，这样有助于节约资源，提高性能。而用`forEach()`、`map()`等**不容易中止循环**。

```js
const allMembers = [
  {id: "1ac2", name: "张三", age: 21},
  {id: "vwrb", name: "李思", age: 19},
  {id: "34gc", name: "王武", age: 27},
  {id: "g245", name: "赵柳", age: 32},
  {id: "6ewq", name: "韩起", age: 20}
];

let res1;
allMembers.some(item => {
  if (item.id === "vwrb") {
    res1 = item;
    return true;
  }
})

console.log(res1);// { id: 'vwrb', name: '李思', age: 19 }
```

## 二、`Array.every()`

*判断数组中的**每一个**是否符合条件*

```js
let array = [1, 2, 3, 4, 5, 6];
let res = array.every(item => item > 3);
console.log(res);// false

let _res = array.every(item => item >= 1);
console.log(_res);// true
```

*判断数组是否都满足某一条件*

```js
const allMembers = [
  {id: "1ac2", name: "张三", age: 21},
  {id: "vwrb", name: "李思", age: 19},
  {id: "34gc", name: "王武", age: 27},
  {id: "g245", name: "赵柳", age: 32},
  {id: "6ewq", name: "韩起", age: 20}
];

let res = allMembers.every(item => {
  return item.age > 21;
});
console.log(res);// false
```

## 三、`Array.includes()`

### 简单使用

*检查数组中是否包含某个值*

```js
const array = [1, 2, 3, 4, 5, 6];
console.log(array.includes(2));// true
console.log(array.includes(10));// false
```

### 进阶使用

*从某个索引开始检查是否包含某个值*

```js
const array = [1, 2, 3, 4, 5, 6];

// 从index=1开始检查
console.log(array.includes(4, 1));// true
// 从index=4开始检查，当然找不到
console.log(array.includes(4, 4));// false
// 从index=10检查，数组长度为6，10 > 6，直接返回false，数组不会被搜索
console.log(array.includes(4, 10));// false
```

当索引小于0时，**会将数组长度与索引相加，计算出的索引作为开始查找的索引**。

* `array.includes(4, -10)` = `array.includes(4, array.length + (-10))` = `array.includes(4, -4)`；
* `array.includes(4, -3)` = `array.includes(4, array.length + (-3))` = `array.includes(4, 3)`；
* `array.includes(4, -2)` = `array.includes(4, array.length + (-2))` = `array.includes(4, 4)`；

```js
console.log(array.includes(4, -10));// true
console.log(array.includes(4, -3));// true
console.log(array.includes(4, -2));// false
```

****

::: warning 注意

类数组对象也可以使用`includes()`检查。

⚠️直接调用会报错，需要用`call()`来调用。

:::

```js
function test () {
  console.log(arguments);// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

  // 直接写会报错 Uncaught TypeError: arguments.includes is not a function
  // arguments.includes(1);

  console.log([].includes.call(arguments, 1));// true
  console.log([].includes.call(arguments, 4));// false
}
test(1, 2, 3);

// 立即执行函数
(function () {
  console.log([].includes.call(arguments, 1));// true
  console.log([].includes.call(arguments, 4));// false
})(1, 2, 3);
```

## 四、参考资料

* [Array.prototype.some() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
* [Array.prototype.every() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
* [Array.prototype.includes() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
