---
title: 【每日一题】560 和为K的子数组
date: 2020/05/15 00:00:00
tags: LeetCode, Exercise, 每日一题
difficulty: 中等
---

# 【每日一题】560 和为K的子数组

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址@[LeetCode-subarray-sum-equals-k](https://leetcode-cn.com/problems/subarray-sum-equals-k/)

> **题意：**
>
> 给定一个整数数组和一个整数 **k**，你需要找到该数组中和为 **k** 的连续的子数组的个数。
>
> **示例1：**
>
> ```
> 输入:nums = [1,1,1], k = 2
> 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
> ```
>
> **说明：**
>
> - 数组的长度为 [1, 20,000]。
> - 数组中元素的范围是 [-1000, 1000] ，且整数 **k** 的范围是 [-1e7, 1e7]。

## 一、暴力破解

> 使用两个for循环遍历。。。不过这个使用内存怎么回事❓

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let n = 0;

  for (let i = 0; i < nums.length; i++) {
    let res = nums[i];
    n = res === k ? n + 1 : n;
    for (let j = i + 1; j < nums.length; j++) {
      res += nums[j];
      n = res === k ? n + 1 : n;
    }
  }

  return n;
};
```

**提交结果：**

| Time         | Cache       |
| ------------ | ----------- |
| 548ms 11.65% | 36.1MB 100% |

施工中🚧...