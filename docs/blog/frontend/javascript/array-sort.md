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

该方法的**默认排序算法**是先将元素转换为`字符串`，再将其转换为`UTF-16`代码，根据元素的`UTF-16`代码的顺序排序。

语法：`Array.sort(compareFunction)`，`compareFunction`为自己指定的排序算法。

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

施工中🚧...