---
title: 【题库练习】24 两两交换链表中的节点
date: 2019/12/06 00:00:00
tags: ["LeetCode", "Exercise", "题库练习"]
difficulty: 中等
---

# 【题库练习】24 两两交换链表中的节点

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址：[24. 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

> **题意：**
>
> 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
>
> **你不能只是单纯的改变节点内部的值**，而是需要实际的进行节点交换。
>
> **示例1：**
>
> ```
> 给定 1->2->3->4, 你应该返回 2->1->4->3.
> ```

## 一、暴力解法

🤣 本法直接将链表转换为数组，两两调换位置后再转换为链表。。。

**实际上，这个解并不符合题目要求，因为题意要求实际进行节点交换。。**

```js
var swapPairs = function(head) {
    let arr = [], _arr = [];
    let res = new ListNode(null);

    function transform(l, arr) {
        while(l) {
            arr.push(l.val);
            l = l.next;
        }
    }

    transform(head, arr);// 转换为数组
    if (arr.length <= 1) return head;
  
  	// 两两互换
    for (let i = 0; i < arr.length; i += 2) {
        arr[i + 1] !== undefined ? _arr.push(arr[i + 1], arr[i]) : _arr.push(arr[i]);
    }

    // 数组转换为链表
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
const ln = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: null}}}};
console.log(swapPairs(ln));
```

**提交结果：**

| Time        | Cache         |
| ----------- | ------------- |
| 60ms 90.47% | 33.9MB 11.69% |

## 二、递归（来自题解）

> 该题解来自于[LeetCode@Nodreame](https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/jsliang-chong-jie-fa-die-dai-zi-di-gui-by-nodreame/)
>
> 果然还是大佬牛逼。。🐂🍺

### 递归解法一

令人眼花缭乱的操作。。

```js
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let next = head.next;// 获得第二个节点
    // 第一个节点指向第三个节点, 传入第三个节点开始递归，获得已排序的链表
    head.next = swapPairs(next.next);
    next.next = head;// 第二个节点指向第一个节点
    return next;// 返回第二个节点
};
```

### 递归解法二

解法一优化版。

```js
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let [fst, snd] = [head, head.next];
    [fst.next, snd.next] = [swapPairs(snd.next), fst];
    return snd;
};
```

