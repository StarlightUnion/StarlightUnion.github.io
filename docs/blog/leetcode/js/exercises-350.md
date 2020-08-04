---
title: 【每日一题】350 两个数组的交集 II
date: 2020/07/13 20:50:00
tags: ["LeetCode", "Exercise", "每日一题"]
difficulty: 简单
---

# 【每日一题】350 两个数组的交集 II

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址：[350. 两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

> **题意：**
>
> 给定两个数组，编写一个函数来计算它们的交集。
>
> **示例1：**
>
> ```
> 输入：nums1 = [1,2,2,1], nums2 = [2,2]
> 输出：[2,2]
> ```
>
> **示例2：**
>
> ```
> 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
> 输出：[4,9]
> ```
>
> **说明:**
>
> - 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
> - 我们可以不考虑输出结果的顺序。
>
> **进阶:**
>
> * 如果给定的数组已经排好序呢？你将如何优化你的算法？
> * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
> * 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

## 一、`indexOf()`

思路很简单，遍历`nums1`，检查`nums2`中有没有当前元素，有的话就放到**新数组里**，之后从`nums2`删掉这个元素。遍历继续。

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let res = [];

  nums1.map(item => {
    let index = nums2.indexOf(item);

    if (index >= 0) {
      res.push(item);
      nums2.splice(index, 1);
    }
  });

  return res;
};
```

**测试用例：**

```js
const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

console.log(intersect(nums1, nums2));
```

**提交结果：**

| Time         | Cache        |
| ------------ | ------------ |
| 100ms 29.70% | 37.8MB 12.5% |

## 二、哈希表与双指针（来自题解）

> 两种解法都来自大佬[LeetCode@hyj8](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/solution/350-liang-ge-shu-zu-de-jiao-ji-ii-javascript-by-hy/)

### 1.哈希表

**核心思路：**创建一个`map`对象，遍历`nums1`，**利用对象键值对键名的唯一性**，保存`nums1`中每个元素的出现的次数。遍历`nums2`，检查`map`中有无存在`nums2`当前遍历的元素且该元素的次数**大于0**，**每检查一次次数减一**。

```js
const intersect = (nums1, nums2) => {
  const map = {};
  const res = [];
  for (const num1 of nums1) { // 存下nums1数字的出现次数
    if (map[num1]) {
      map[num1]++;
    } else {
      map[num1] = 1;
    }
  }
  for (const num2 of nums2) { // 遍历nums2看看有没有数字在nums1出现过
    const val = map[num2];
    if (val > 0) {            // 出现过
      res.push(num2);         // 推入res数组
      map[num2]--;            // 匹配掉一个，就少了一个
    }
  }
  return res;
};
```

### 2.双指针

>  这个应该对应进阶中的第一问。

非常巧妙的**双指针**，很简单的逻辑。。❗️

```js
const intersect = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b); // 先排序，使得重复的元素相邻出现
  const res = [];
  let p1 = 0;                  // 两个指针
  let p2 = 0;
  while (p1 < nums1.length && p2 < nums2.length) { // 用&& 因为有一个越界了就不能找交集
    if (nums1[p1] > nums2[p2]) {        // p1指向的数大，移动p2，期待遇到一样大的
      p2++;
    } else if (nums1[p1] < nums2[p2]) { // 类似
      p1++;
    } else {                   // 遇到相同的，推入res数组，两个指针同时移动考察下一个
      res.push(nums1[p1]);
      p1++;
      p2++;
    }
  }
  return res;
};
```



