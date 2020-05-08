---
title: 【题库练习】09 回文数
date: 2019/11/25 19:53:24
tags: LeetCode, Exercise
difficulty: 简单
---

# 【题库练习】09 回文数

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址@[LeetCode-palindrome-number](https://leetcode-cn.com/problems/palindrome-number/)

> **题意：**
>
> 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
>
> **示例1：**
>
> ```
> 输入: 121
> 输出: true
> ```
>
> **示例2：**
>
> ```
> 输入: -121
> 输出: false
> 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
> ```
>
> **示例3：**
>
> ```
> 输入: 10
> 输出: false
> 解释: 从右向左读, 为 01 。因此它不是一个回文数。
> ```
>

来两个算是**投机取巧**的法子。。

## 一、转换为字符串比较

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  	// 121 -> "121" -> [1, 2, 1] -> [1, 2, 1] -> "121"
    let _x = (x + "").split("").reverse().join("");
    return _x === x + "";
};
```

**提交结果：**

| Time  | Memory |
| ----- | ------ |
| 256ms | 45.8MB |

## 二、求余数（来自题解）

> 该解来自于[LeetCode@Able](https://leetcode-cn.com/problems/palindrome-number/solution/hui-wen-shu-by-able-4/)

这个比较巧妙的是利用**余数**从后往前重新累加成了一个新数字，**只有回文数**的取余累加后的新数字等于原数字。。

```js
var isPalindrome = function(x) {
    let s = 0, y = 0;
    s = x;

    while(s >= 1) {
        y = y * 10 + s % 10;
        s = Math.floor(s / 10);
    }

    return y === x;
}
```
