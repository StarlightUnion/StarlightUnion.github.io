---
title: 【每日一题】33 搜索旋转排序数组
date: 2020/04/27 00:00:00
tags: LeetCode, Exercise, 每日一题
difficulty: 中等
---

# 【每日一题】33 搜索旋转排序数组

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址@[LeetCode-search-in-rotated-sorted-array](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)

> **题意：**
>
> 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
>
> ( 例如，数组`[0,1,2,4,5,6,7]`可能变为`[4,5,6,7,0,1,2]`)。
>
> 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回`-1`。
>
> 你可以假设数组中不存在重复的元素。
>
> 你的算法时间复杂度必须是 O(log n) 级别。
>
> **示例1：**
>
> ```
> 输入: nums = [4,5,6,7,0,1,2], target = 0
> 输出: 4
> ```
>
> **示例2：**
>
> ```
> 输入: nums = [4,5,6,7,0,1,2], target = 3
> 输出: -1
> ```
>

### 解（来自题解）

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = start + ((end - start) >> 1);// 取中间点
    if (nums[mid] === target) return mid;

    if (nums[mid] >= nums[start]) {
      // 在mid左边
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
```

施工中🚧...