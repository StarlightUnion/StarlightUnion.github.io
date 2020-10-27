---
title: 【每日一题】105 从前序与中序遍历序列构造二叉树
date: 2020/05/22 00:00:00
tags: ["LeetCode", "Exercise", "每日一题"]
difficulty: 中等 
---

# 【每日一题】105 从前序与中序遍历序列构造二叉树

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址：[105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

> **题意：**
>
> 根据一棵树的前序遍历与中序遍历构造二叉树。
>
> **注意:**
>
> 你可以假设树中没有重复的元素。
>
> 例如，给出
>
> ```
> 前序遍历 preorder = [3,9,20,15,7]
> 中序遍历 inorder = [9,3,15,20,7]
> ```
>
> 返回如下的二叉树：
>
> ```
>     3
>    / \
>   9  20
>     /  \
>    15   7
> ```

### 思路

> 思路来自题解[LeetCode@alexer-660](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/105-cong-qian-xu-yu-zhong-xu-bian-li-xu-lie-gou--6/)。
>
> `前序遍历`是指**二叉树的根节点（子树则是子树的根节点）首先遍历**，而`中序遍历`则是指**先遍历二叉树的左边叶子节点，再遍历根节点，接着才是左边叶子节点**。

****

👉 **分析题意**：

由定义可知，`前序遍历`序列的第一个值即为**二叉树的根节点的值**。求其在**在`中序遍历`序列中的索引**，就可以得到其**左子树和右子树**的`中序遍历`序列。

* `前序遍历`：`[3, 9, 20, 15, 7]` -> **根节点的值**为`3`
* `中序遍历`：`[9, 3, 15, 20, 7]` -> 在`中序遍历`序列中的索引为`index = 1`

根节点的值`3`在`中序遍历`中的索引`index`为`1`，其将序列分成两部分，`[9]`即为**二叉树的左子树的`中序遍历`序列**，而`[15, 20, 7]`则是**二叉树的右子树的`中序遍历`序列**。

👉 **那么左右子树的`前序遍历`序列呢？**

**根节点的值**在`中序遍历`序列中的索引为`index = 1`，可以得到**二叉树的左子树的节点个数为`1`**，而**二叉树的右子树的节点个数自然是`3`了**。

由于`前序遍历`先根节点，在左子树，接着右子树，那么根据**左右子树的节点个数**，自然可以从`前序遍历`序列中获取到左右子树的`前序遍历`序列。👇

`前序遍历`：`[3] 根 / [9] 左 / [20, 15, 7] 右` 。

### 递归解法（来自题解）

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
	if (!preorder.length) return null;
  const root = new TreeNode(preorder[0]);// 根节点应为前序遍历第一个节点
  const index = inorder.indexOf(preorder[0]);// 索引

  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));// 左子树
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));// 右子树

  return root;
};
```

