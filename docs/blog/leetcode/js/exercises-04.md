---
title: 【题库练习】04 寻找两个有序数组的中位数
date: 2019/11/05 21:40:22
tags: LeetCode, Exercise
difficulty: 困难
---

# 【题库练习】04 寻找两个有序数组的中位数

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址@[LeetCode-median-of-two-sorted-arrays](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)

> **题意：**
>
> 给定两个大小为 m 和 n 的有序数组`nums1`和`nums2`。
>
> 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
>
> 你可以假设`nums1`和`nums2`不会同时为空。
>
> **示例1：**
>
> ```
> nums1 = [1, 3]
> nums2 = [2]
>
> 则中位数是 2.0
> ```
>
> **示例2：**
>
> ```
> nums1 = [1, 2]
> nums2 = [3, 4]
>
> 则中位数是 (2 + 3)/2 = 2.5
> ```

## 一、准备

题目已经给出**有序数组**和算法的**时间复杂度必须为 O(log(m + n))**。

### 时间复杂度

O(1)即为**一次查找**即能获取想要的结果，O(n)为要**遍历所有元素**才能获取想要的结果。

O(log n)则常出现在**二分查找（也叫折半查找）中**，因为每次查找都是一半长度一半长度的查找，比如查找一个长度为**16**的数组中某一元素，需要`4`次，`(1 / 2) ^ 4 = 1 / 16`，`n = 16`，那么查找次数就是**以2为底，n的对数**->`log n`。

那么O(log(m + n))中，`m + n`即为两个有序数组的长度之和，该时间复杂度就意味着需使用**二分/折半**查找。

## 二、解

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b);// 将两个数组合并 并 排序
    let length = arr.length;
  	// 如果数组长度为 奇数 取中间的哪一个，为 偶数 则取中间两个求平均
    return length % 2 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
};
```

**提交结果：**

| Time  | Cache  |
| ----- | ------ |
| 144ms | 39.8MB |



