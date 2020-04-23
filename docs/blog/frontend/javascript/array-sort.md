---
title: Array.sort()用法总结
date: 2020/04/20 00:00:00
tags: Javascript, Methods
---

# Array.sort()用法总结

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

数组的`sort`方法的作用是对**数组元素进行排序**，并返回排序后的数组，⚠️**该方法将改变原数组**。

语法：`Array.sort(compareFunction)`，`compareFunction`为自己指定的排序算法，**若不指定排序算法则会进行默认排序**。

该方法的**默认排序算法**是先将元素转换为`字符串`，再将其转换为`UTF-16`代码，根据元素的`UTF-16`代码的顺序排序。

## 一、默认排序

### 1.字符串数组排序

```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();// [ 'Dec', 'Feb', 'Jan', 'March' ]

onst txts = ['ability', 'absent', 'April', 'divide', 'center', 'context', 'container'];
txts.sort();// ['April', 'ability', 'absent', 'center', 'container', 'context', 'divide']
```

可以发现**默认情况**下，对字符串数组的排序是**逐个比较字母的`UTF-16`编码顺序**。

### 2.数字数组排序

```js
const array = [1, 30, 4, 21, 10000, 81, 111, 999];
array.sort();// [1, 10000, 111, 21, 30, 4, 81, 999]
```

🤣似乎哪里不对。。。

由于没有指定排序算法，还是默认的，所以这里它**把数组转成字符串再进行了逐个排序**，和上面的字符串数组排序一样。

## 二、指定排序算法

这里要用到语法：`Array.sort(compareFunction)`了，`compareFunction`接受两个值，假设为`a`和`b`，`compareFunction(a, b)`的返回值有三种情况：

* `compareFunction(a, b)` < 0，`a`将会被排到`b`的前面。
* `compareFunction(a, b)` = 0，二者相对位置不发生改变。
* `compareFunction(a, b)` > 0，`a`将会被排到`b`的后面。

先看一个能把数字数组进行**升序**排列的算法：

```js
const array = [1, 30, 4, 21, 10000, 81, 111, 999];
console.log(array.sort((a, b) => {
  return a - b;// 降序 b - a
}));// [1, 4, 21, 30, 81, 111, 999, 10000]
```

**这么理解**：

假设`b`为数组中当前遍历元素，`a`为与之相邻的前一次遍历的元素，规则为`a - b`，`a - b > 0`则表示`a > b`，那么`a`将会被排到`b`的后面，反之就在`b`的前面。

这个也可以对字符串数组进行排序：

```js
const txts = ['ability', 'absent', 'April', 'divide', 'center', 'context', 'container'];
console.log(txts.sort((a, b) => {
  return a - b;
}));
// ['April', 'ability', 'absent', 'center', 'container', 'context', 'divide']
```

## 三、对象数组的排序

有如下数组：

```js
const members = [
  { name: 'Dave', age: 32 },
  { name: 'Jeff', age: 58 },
  { name: 'Mona', age: 15 },
  { name: 'Ma', age: 45 },
  { name: 'Lord', age: 79 }
]
```
若想要按数组里每个元素的`age`属性进行升序排序，可以：
```js
console.log(members.sort((a, b) => {
  return a.age - b.age;
}));
// [
//   { name: 'Mona', age: 15 },
//   { name: 'Dave', age: 32 },
//   { name: 'Ma', age: 45 },
//   { name: 'Jeff', age: 58 },
//   { name: 'Lord', age: 79 }
// ]
```

若想要按`name`属性进行排序，则可以：

```js
console.log(members.sort((a, b) => {
  const a_name = a.name.toUpperCase();
  const b_name = b.name.toUpperCase();

  if (a_name > b_name) {
    return 1;
  } else if (a_name < b_name) {
    return -1;
  } else {
    return 0;
  }
}));
// [
// 	{ name: 'Dave', age: 32 },
//  { name: 'Jeff', age: 58 },
//  { name: 'Lord', age: 79 },
//  { name: 'Ma', age: 45 },
//  { name: 'Mona', age: 15 }
// ]
```

## 四、汉字数组以及混合数组排序

对于纯汉字或者混合的数组，测试如下：

```js
const chnArray = ['你', '我', '汉', '字', '数', '组', '对', '比'];
const mixArray = ['你', 'me', '汉', '字', 'num', 'array', '对', '比'];
const mixArray2 = ['你', 'me', 100, '汉', 1, '字', 'num', 'array', '对', '比', 29];
```

直接使用sort()将会得到如下结果：
![sort-1](/images/frontend/js/js-sort-1.png)

> 汉字的对比排序不知道是按啥排的，应该也是UniCode吧。。

**非英语字符串的对比**

汉字也属于其中的一种，这类字符串的对比可以采用`String.localeCompare(compareString)`。

⚠️需要注意的是该方法只适用于**字符串**。

```js
console.log(chnArray.sort((a, b) => {
  return a.localeCompare(b);
}));
// [ '你', '字', '对', '我', '数', '比', '汉', '组' ]
```