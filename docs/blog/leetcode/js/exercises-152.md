---
title: 【每日一题】152 乘积最大子数组
date: 2020/05/18 00:00:00
tags: ["LeetCode", "Exercise", "每日一题"]
difficulty: 中等
---

# 【每日一题】152 乘积最大子数组

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址：[152. 乘积最大子数组](https://leetcode-cn.com/problems/maximum-product-subarray/)

> **题意：**
>
> 给你一个整数数组 `nums` ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
>
> **示例1：**
>
> ```
> 输入: [2,3,-2,4]
> 输出: 6
> 解释: 子数组 [2,3] 有最大乘积 6。
> ```
>
> **示例2：**
>
> ```
> 输入: [-2,0,-1]
> 输出: 0
> 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
> ```

## 一、暴力破解

首先来**例行办法**，两个for循环来试一试。。。

::: warning
*⚠️注意*：此解未处理`-0`的情况，原因：`-1 * 0 = -0`，但是神奇的是能通过。。
:::

```js {17}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let n;

  for (let i = 0; i < nums.length; i++) {
    let _n = nums[i];
    if (n !== undefined) {
      n = _n > n ? _n : n;
    } else {
      n = _n;
    }

    for (let j = i + 1; j < nums.length; j++) {
      _n *= nums[j];
      n = _n > n ? _n : n;
    }
  }

  return n;
};
```

**提交结果：**

| Time        | Cache         |
| ----------- | ------------- |
| 264ms 5.47% | 35.3MB 66.67% |

施工中🚧...

