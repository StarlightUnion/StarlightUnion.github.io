---
title: 【每日一题】560 和为K的子数组
date: 2020/05/15 00:00:00
tags: ["LeetCode", "Exercise", "每日一题"]
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

## 二、前缀和（来自题解）

> 来自题解[LeetCode@hyj8](https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y/)
>
> **分析题意：**（看懂官方题解有感）
>
> 设`prefixSum[i]`为`nums`数组中第`0`个到第`i`个的和，那么可得出：
>
> * *prefixSum[i] = nums[0] + nums[1] + ... + nums[i]*（1）
>
> * *prefixSum[i] = prefixSum[i - 1] + nums[i]*（2）
>
> 接下来，题意为**如果存在一个连续的数组**，其和为`k`，则这个数组就是其中一个解。假设这个数组为第`i`到第`j`个数之和，那么根据（2）式可得👇
>
> * *prefixSum[j] - prefixSum[i - 1] = k*（3）
>
> * *prefixSum[i - 1] = prefixSum[j] - k*（4）

```js
var subarraySum = (nums, k) => {
  if (nums.length === 0) return 0
  let map = { 0: 1 }// 预设已经出现 1 次为 0 的前缀和
  let prefixSum = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]
    if (map[prefixSum - k]) {// prefixSum - k 即为目标值，这个prefixSum在分析中是prefixSum[i]
      count += map[prefixSum - k];
    }
    if (map[prefixSum]) {
      map[prefixSum]++
    } else {
      map[prefixSum] = 1
    }
  }
  return count
}
```
