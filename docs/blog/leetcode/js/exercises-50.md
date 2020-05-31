---
title: 【每日一题】50 Pow(x, n)
date: 2020/05/12 00:00:00
tags: ["LeetCode", "Exercise", "每日一题"]
difficulty: 中等
---

# 【每日一题】50 Pow(x, n)

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址@[LeetCode-powx-n](https://leetcode-cn.com/problems/powx-n/)

> **题意：**
>
> 实现 pow(*x*, *n*)，即计算 x 的 n 次幂函数。
>
> **示例1：**
>
> ```
> 输入: 2.00000, 10
> 输出: 1024.00000
> ```
>
> **示例2：**
>
> ```
> 输入: 2.10000, 3
> 输出: 9.26100
> ```
>
> **示例3：**
>
> ```
> 输入: 2.00000, -2
> 输出: 0.25000
> 解释: 2-2 = 1/22 = 1/4 = 0.25
> ```
>
> **说明：**
>
> - -100.0 < *x* < 100.0
> - *n* 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。

### 理解

注意上面的说明，有符号整数。。并且已经给出了范围。

`n`的**正负**对计算结果的影响：

 * n < 0：`1 / x^n`
 * n = 0：`x`
 * n > 0：`x^n`

另外对于**奇次幂**需要将其转为**偶次幂**进行降幂处理，比如👇

```
迭代顺序如下：
	n = 5: 5 -> 2 -> 1
	n = 4: 4 -> 2 -> 1
```

所以为**奇次幂时**要先乘一次自己。

**递归**与**迭代**的区别是：**递归**是不断的调用自己，并返回每次调用后的新的参数，**迭代**则是保存每次循环的参数，作为下一次迭代的初始值。

## 一、递归

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2) return x * myPow(x, n - 1);// n为奇数时将n转换为偶数，乘一次自己
  return myPow(x * x, n / 2);// 偶次幂
};
```

**提交结果：**

| Time        | Cache         |
| ----------- | ------------- |
| 72ms 51.58% | 33.8MB 96.30% |

## 二、迭代

```js
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) {// n为负数
      x = 1 / x;
      n = -n;
    }

    let res = 1;
    while(n) {
      if (n % 2) res *= x;// 为奇次幂时乘一次自己
      x *= x;
      n = parseInt(n / 2);// n >>> 1
    }

    return res;
  };
```

**提交结果：**

| Time        | Cache         |
| ----------- | ------------- |
| 76ms 33.75% | 33.9MB 92.59% |
