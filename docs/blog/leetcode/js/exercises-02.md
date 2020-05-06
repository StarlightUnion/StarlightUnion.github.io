---
title: 【题库练习】02 两数相加
date: 2019/11/05 22:07:18
tags: LeetCode, Exercise
difficulty: 中等
---

# 【题库练习】02 两数相加
<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址@[LeetCode-add-two-numbers](https://leetcode-cn.com/problems/add-two-numbers/)

> **题意：**
>
> 给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 **逆序** 的方式存储的，并且它们的每个节点只能存储 **一位** 数字。
>
> 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
>
> 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
>
> **示例：**
>
> 输入：`(2 -> 4 -> 3) + (5 -> 6 -> 4)`
> 输出：`7 -> 0 -> 8`
> 原因：`342 + 465 = 807`

## 一、准备

做这题之前首先得搞清楚**链表**是什么。👇

> *链表由一系列结点构成，每一个结点包括两部分：一个是存储数据的**数据域**，另一个是存储下一个结点地址的**指针域**。——精简自百度百科*

一般来说在JS中是**没有链表这种结构的**，所以使用JS写的话已经内置了**单链表**的**构造函数**👇，调用它即可生成单链表结构。

```js
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
```

比如题目中的测试用例`2 -> 4 -> 3`，使用上面的构造函数将会得到：

```js
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

// {val: 2, next: {val: 4, next: {val: 3, next: null}}} // 结果 ↓图示结构更直观
```

![listnode](/images/leetcode/js/exercises-02-01.png)

## 二、解

原本懵逼不解，仔细琢磨 + 参阅大佬解法后顿悟。。

```js
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const res = new ListNode(null);// 总
    const nres = res;
    let carry = 0, val = 0;// 进位 和 值
    let v1 = 0, v2 = 0;// 每个链表的值

    while(l1 || l2) {
        v1 = l1 ? l1.val : 0;
        v2 = l2 ? l2.val : 0;

        val = (v1 + v2 + carry) % 10;// 取余数
        carry = Math.floor((v1 + v2 + carry) / 10);// 取进位

        nres.next = new ListNode(val);// 指向计算之和构成的链表
        nres = nres.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if(carry) {
        nres.next = new ListNode(carry);
    }

    return res.next;
};
```

**测试用例：**

```js
const l1 = {val: 2, next: {val: 4, next: {val: 3, next: null}}};
const l2 = {val: 5, next: {val: 6, next: {val: 4, next: null}}};

addTwoNumbers(l1, l2);// {val: 7, next: {val: 0, next: {val: 8, next: null}}}
```

**提交结果：**

| Time  | Memory |
| ----- | ------ |
| 140ms | 38.2MB |

