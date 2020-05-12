---
title: 【每日一题】50 Pow(x, n)
date: 2020/05/12 00:00:00
tags: LeetCode, Exercise, 每日一题
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

注意上面的说明，有符号整数。。并且已经给出了范围。

> 可知`n`的**正负**以及**奇偶**对计算结果有直接影响。
>
> * n < 0：`1 / x^n`
> * n = 0：`x`
> * n > 0：`x^n`

n > 0时奇偶的影响：

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
  if (n % 2) return x * myPow(x, n - 1);
  return myPow(x * x, n / 2);
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
    if (n < 0) {
      x = 1 / x;
      n = -n;
    }

    let res = 1;
    while(n) {
      if (n % 2) res *= x;
      x *= x;
      n = parseInt(n / 2);
    }

    return res;
  };
```

**提交结果：**

| Time        | Cache         |
| ----------- | ------------- |
| 76ms 33.75% | 33.9MB 92.59% |

施工中🚧...