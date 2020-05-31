---
title: 【每日一题】33 搜索旋转排序数组
date: 2020/04/27 00:00:00
tags: ["LeetCode", "Exercise", "每日一题"]
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

> 偷瞄的题解的思路。。
>
> 该题解来自于[LeetCode@lucifer](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/pythonjs-er-fen-fa-33-sou-suo-xuan-zhuan-pai-xu-sh/)

由**算法时间复杂度必须为O(log n)**可知查找算法需为**折半查找**。题意是**升序数组**在某一个点上发生了旋转，那么必有一个 *分界点* ，它左右两侧的数都是有序的，但是连在一起是无序的。

查找时先将 *中间数`nums[mid]`* 与第一个数进行比较确定*中间数`nums[mid]`* 的位置是在**左边的有序部分还是右边的有序部分**，之后再用`target`与边界进行比较以确定`target`的位置：

1.`nums[mid] > nums[start]`：

此时可以确定`nums[mid]`在**左边有序部分**，接下来比较边界确定`target`位置，

* `nums[start] <= target && target <= nums[mid]`：此时将**右边界**移至`mid - 1`;
* 与上面相反的话说明`target`在右侧有序部分，将**左边界**移至`mid + 1`。

2.`nums[mid] > nums[start]`：

此时`nums[mid]`在右边有序部分，

* `nums[mid] <= target && target <= nums[end]`：将**左边界**移至`mid + 1`;
* 与上面相反则将**右边界**移至`mid - 1`。

```js {16,23}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = start + ((end - start) >> 1);// 取中间点 移位
    if (nums[mid] === target) return mid;

    if (nums[mid] >= nums[start]) {
      // 左边有序部分
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // 右边有序部分
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