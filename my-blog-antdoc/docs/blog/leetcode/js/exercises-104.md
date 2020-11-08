---
title: 【每日一题】104 二叉树的最大深度
date: 2020/07/28 00:00:00
tags: ["LeetCode", "Exercise", "每日一题"]
difficulty: 简单
---

# 【每日一题】104 二叉树的最大深度

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址：[104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

> **题意：**
>
> 给定一个二叉树，找出其最大深度。
>
> 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
>
> **说明:** 叶子节点是指没有子节点的节点。
>
> **示例：**
>
> 给定二叉树 `[3,9,20,null,null,15,7]`，
>
> ```
>     3
>    / \
>   9  20
>     /  \
>    15   7
> ```
>
> 返回它的最大深度 3 。

## 一、递归

**深度优先（DFS）**。

**思路：**递归遍历左右子树，每次取左右子树深度最大的那个。终止条件是**当前节点为空**。

**时间复杂度：** *O(n)*

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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let leftDepth = 0, rightDepth = 0;


  leftDepth = maxDepth(root.left);
  rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;// 加上根节点
};
```

**测试用例：**

```js
onst root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root));// 3
```

**提交结果：**

| Time       | Cache        |
| ---------- | ------------ |
| 92ms 27.1% | 41.4MB 8.33% |

## 二、广度优先（来自题解）

> 来自题解[LeetCode@hyj8](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/liang-chong-jie-fa-di-gui-dfs-bfs-by-hyj8/)

来自大佬的**非常奇妙的解法**。

这个解法的**核心思路**是把每一层的节点包括及子树保存到`queue`数组中，每到一层`depth++`。终止条件是**当前节点没有左右子树且`queue`数组中没有其它节点**。

还是直接看题解吧，我这就是二道贩子。。🤣

```js
var maxDepth = (root) => {
  if (root == null) return 0;
  const queue = [root];
  let depth = 1;
  while (queue.length) {
    const levelNum = queue.length;          // 当前层的节点个数
    for (let i = 0; i < levelNum; i++) {    // 逐个让当前层的节点出列
      const cur = queue.shift();            // 当前出列的节点
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right); // 左右子节点入列
    }
    // 当前层所有节点出列，如果有下一层节点，则队列非空
    if (queue.length) depth++;
  }
  return depth;
};
```

