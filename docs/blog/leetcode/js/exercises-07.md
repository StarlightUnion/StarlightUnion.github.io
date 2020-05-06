---
title: 【题库练习】07 整数反转
date: 2019/11/25 19:53:24
tags: LeetCode, Exercise
difficulty: 简单
---

# 【题库练习】07 整数反转

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址@[LeetCode-reverse-integer](https://leetcode-cn.com/problems/reverse-integer/)

> **题意：**
>
> 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
>
> **示例1：**
>
> ```
> 输入: 123
> 输出: 321
> ```
>
> **示例2：**
>
> ```
> 输入: -123
> 输出: -321
> ```
>
> **示例3：**
>
> ```
> 输入: 120
> 输出: 21
> ```
>
> **注意：**
> 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。
> 请根据这个假设，如果反转后整数溢出那么就返回 0。

这里最主要的就是如何处理**符号**和**溢出**。

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  	// 处理溢出
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31)) return 0;

  	// 判断符号
    let flag;
    if (x < 0) {
        flag = true;
        x = -x;
    } else {
        flag = false;
    }

  	// 将 x 转为 字符串 再转为 数组 进行反转后再将其转为字符串
    let _x = (x + "").split("").reverse().join("");
  	// 符号处理
    _x = flag ? "-" + _x : _x;
  	// 判断是否溢出
    if (parseInt(_x) < Math.pow(-2, 31) || parseInt(_x) > Math.pow(2, 31)) return 0;

    return parseInt(_x);
};
```

**测试用例：**

```js
reverse(123)
// 321
reverse(-123)
// -321
```

**提交结果：**

| Time | Memory |
| ---- | ------ |
| 92ms | 36MB   |