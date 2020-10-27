---
title: 【题库练习】25 K 个一组翻转链表
date: 2019/12/12 00:00:00
tags: ["LeetCode", "Exercise", "题库练习"]
difficulty: 困难
---

# 【题库练习】25 K 个一组翻转链表

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址：[25. K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

> **题意：**
>
> 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
>
> k 是一个正整数，它的值小于或等于链表的长度。
>
> 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
>
> **示例1：**
>
> 给你这个链表：`1->2->3->4->5`
>
> 当 k = 2 时，应当返回: `2->1->4->3->5`
>
> 当 k = 3 时，应当返回: `3->2->1->4->5`
>
> **说明:**
>
> - 你的算法只能使用常数的额外空间。
> - **你不能只是单纯的改变节点内部的值**，而是需要实际进行节点交换。

## 一、来自24题的暴力解法

直接将链表转换为数组，处理后再转换为链表。。。

**实际上，这个解并不符合题目要求，因为题意要求实际进行节点交换。。**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let arr = [], _arr = [];
    let res = new ListNode(null);

    function transform(l, arr) {
        while(l) {
            arr.push(l.val);
            l = l.next;
        }
    }

    transform(head, arr);
    for (let i = 0; i < arr.length; i += k) {
        let temp = arr.slice(i, i + k);
        temp = temp.length === k ? temp.reverse() : temp;
        _arr = _arr.concat(temp);
    }

    for (let i = _arr.length - 1; i >= 0; i--) {
        let temp = new ListNode(null);
        res.val = _arr[i];
        temp.next = res;
        res = temp;
    }

    return res.next;
};
```

**测试用例：**

```js
const ln = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}};
console.log(reverseKGroup(ln, 3));
```

**提交结果：**

不出所料两个双双落后平均水平。。🤣

| Time         | Cache        |
| ------------ | ------------ |
| 100ms 29.70% | 37.8MB 12.5% |

## 二、建议直接看题解

来自题解[LeetCode@lucifer](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/zui-nan-lian-biao-ti-liao-jie-yi-xia-javapythonjav/)

