---
title: 【题库练习】01 两数之和
date: 2020-04-11 00:00:00
tags: LeetCode, Exercise
---

# 【题库练习】01 两数之和
<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

LeetCode第一题开始，准备小试水果刀。。😮~~挑出以前做的的一些题做(chong)个(shi)笔(bo)记(ke)。。~~

> 题目地址@[LeetCode-two-sum](https://leetcode-cn.com/problems/two-sum/)
>
> **题意：**
>
> 给定一个整数数组`nums`和一个目标值`target`，请你在该数组中找出和为目标值的那**两个**整数，并返回他们的数组下标。
>
> 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
>
> **示例：**
>
> 给定`nums = [2, 7, 11, 15], target = 9`
>
> 因为 `nums[0] + nums[1] = 2 + 7 = 9`
>
> 所以返回 `[0, 1]`

## 一、暴力破解

首先尝试**暴力破解**，遍历谁不会写，两个`for`循环搞定。。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length) {
      for(var i = 0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++) {
          if(nums[i] + nums[j] === target) {
            return [i, j];
          }
        }
      }
    }
};
```

**测试用例：**

```js
var nums = [2, 7, 11, 15];
twoSum(nums, 9)// [0, 1]
```

**提交结果：**

| Time  | Memory |
| ----- | ------ |
| 172ms | 34.5MB |

## 二、使用ES6 map来处理

ES6中的`map`有一个特性：**任何对象都可以作为一个键或者是一个值**，

通过`get(key)`（key为键值）方法可以拿到`map`结构中该**键名**对应的**键值**，

通过`set(key, value)`方法可以为`map`结构设置**键值对**，它返回的是整个**map结构**。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if(nums.length) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
      let flag = map.get(target - nums[i]);
      if(flag != undefined && flag != i) {
        return [flag, i];
      }
      map.set(nums[i], i);
    }
  }
}
```

**测试用例同上**

**提交结果：**

| Time | Memory |
| ---- | ------ |
| 72ms | 34.9MB |

这一比还是有很大区别，话说少一次遍历性能**能提升一倍还多啊**！