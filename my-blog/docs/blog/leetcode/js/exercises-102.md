---
title: 【每日一题】102 二叉树的层序遍历
date: 2020/05/13 00:00:00
tags: ["LeetCode", "Exercise", "每日一题"]
difficulty: 中等
---

# 【每日一题】102 二叉树的层序遍历

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址@[LeetCode-binary-tree-level-order-traversal](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

> **题意：**
>
> 给你一个二叉树，请你返回其按 **层序遍历** 得到的节点值。 （即逐层地，从左到右访问所有节点）。
>
> **示例：**
>
> 二叉树：`[3,9,20,null,null,15,7]`,
>
> ```
>     3
>    / \
>   9  20
>     /  \
>    15   7
> ```
>
> 返回其层次遍历结果：
>
> ```
> [
>   [3],
>   [9,20],
>   [15,7]
> ]
> ```

## 一、迭代-广度优先遍历

> 写的有点乱，不过**具体思路**就是将每一层的*节点*保存在一个数组中，遍历这个数组取出*节点的值*。。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let res = [[root.val]],
    rootArr = [root];

  while (rootArr.length) {
    let _res = [],
      _rootArr = [];

    rootArr.map(item => {// 遍历保存下来的一层的每个节点
      if (item.left) {
        _rootArr.push(item.left);
        _res.push(item.left.val);
      }

      if (item.right) {
        _rootArr.push(item.right);
        _res.push(item.right.val);
      }
    });
    rootArr =  _rootArr;
    if (_res.length) res.push(_res);
  }

  return res;
};
```

**测试用例：**

```js
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

levelOrder(root);
```

**提交结果：**

| Time        | Cache         |
| ----------- | ------------- |
| 72ms 51.58% | 33.8MB 96.30% |

## 二、递归-广度优先遍历（来自题解）

> 来自题解[LeetCode@lrjets](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/yi-tao-quan-fa-shua-diao-nge-bian-li-shu-de-wen-8/)
>
> 将层级`depth`（也是数组`res`的索引）传入下一次的递归调用，可以将节点值存入正确的位置。

```js
var levelOrder = function(root) {
  if (!root) return [];
  let res = [];

  function traversal (root, depth) {
    if (root !== null) {
      if (!res[depth]) {
        res[depth] = []
      }
      traversal(root.left, depth + 1)
      res[depth].push(root.val)
      traversal(root.right, depth + 1)
    }
  }

  traversal(root, 0);
  return res;
};
```

