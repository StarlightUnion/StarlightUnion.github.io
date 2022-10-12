(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{773:function(t,s,n){"use strict";n.r(s);var a=n(39),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"【每日一题】105-从前序与中序遍历序列构造二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【每日一题】105-从前序与中序遍历序列构造二叉树"}},[t._v("#")]),t._v(" 【每日一题】105 从前序与中序遍历序列构造二叉树")]),t._v(" "),s("ClientOnly",[s("display-bar",{attrs:{displayData:t.$frontmatter}})],1),t._v(" "),s("blockquote",[s("p",[t._v("题目地址："),s("a",{attrs:{href:"https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",target:"_blank",rel:"noopener noreferrer"}},[t._v("105. 从前序与中序遍历序列构造二叉树"),s("OutboundLink")],1)])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("题意：")])]),t._v(" "),s("p",[t._v("根据一棵树的前序遍历与中序遍历构造二叉树。")]),t._v(" "),s("p",[s("strong",[t._v("注意:")])]),t._v(" "),s("p",[t._v("你可以假设树中没有重复的元素。")]),t._v(" "),s("p",[t._v("例如，给出")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("前序遍历 preorder = [3,9,20,15,7]\n中序遍历 inorder = [9,3,15,20,7]\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("返回如下的二叉树：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    3\n   / \\\n  9  20\n    /  \\\n   15   7\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])]),t._v(" "),s("h3",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("blockquote",[s("p",[t._v("思路来自题解"),s("a",{attrs:{href:"https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/105-cong-qian-xu-yu-zhong-xu-bian-li-xu-lie-gou--6/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode@alexer-660"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("前序遍历")]),t._v("是指"),s("strong",[t._v("二叉树的根节点（子树则是子树的根节点）首先遍历")]),t._v("，而"),s("code",[t._v("中序遍历")]),t._v("则是指"),s("strong",[t._v("先遍历二叉树的左边叶子节点，再遍历根节点，接着才是左边叶子节点")]),t._v("。")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("👉 "),s("strong",[t._v("分析题意")]),t._v("：")]),t._v(" "),s("p",[t._v("由定义可知，"),s("code",[t._v("前序遍历")]),t._v("序列的第一个值即为"),s("strong",[t._v("二叉树的根节点的值")]),t._v("。求其在"),s("strong",[t._v("在"),s("code",[t._v("中序遍历")]),t._v("序列中的索引")]),t._v("，就可以得到其"),s("strong",[t._v("左子树和右子树")]),t._v("的"),s("code",[t._v("中序遍历")]),t._v("序列。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("前序遍历")]),t._v("："),s("code",[t._v("[3, 9, 20, 15, 7]")]),t._v(" -> "),s("strong",[t._v("根节点的值")]),t._v("为"),s("code",[t._v("3")])]),t._v(" "),s("li",[s("code",[t._v("中序遍历")]),t._v("："),s("code",[t._v("[9, 3, 15, 20, 7]")]),t._v(" -> 在"),s("code",[t._v("中序遍历")]),t._v("序列中的索引为"),s("code",[t._v("index = 1")])])]),t._v(" "),s("p",[t._v("根节点的值"),s("code",[t._v("3")]),t._v("在"),s("code",[t._v("中序遍历")]),t._v("中的索引"),s("code",[t._v("index")]),t._v("为"),s("code",[t._v("1")]),t._v("，其将序列分成两部分，"),s("code",[t._v("[9]")]),t._v("即为"),s("strong",[t._v("二叉树的左子树的"),s("code",[t._v("中序遍历")]),t._v("序列")]),t._v("，而"),s("code",[t._v("[15, 20, 7]")]),t._v("则是"),s("strong",[t._v("二叉树的右子树的"),s("code",[t._v("中序遍历")]),t._v("序列")]),t._v("。")]),t._v(" "),s("p",[t._v("👉 "),s("strong",[t._v("那么左右子树的"),s("code",[t._v("前序遍历")]),t._v("序列呢？")])]),t._v(" "),s("p",[s("strong",[t._v("根节点的值")]),t._v("在"),s("code",[t._v("中序遍历")]),t._v("序列中的索引为"),s("code",[t._v("index = 1")]),t._v("，可以得到"),s("strong",[t._v("二叉树的左子树的节点个数为"),s("code",[t._v("1")])]),t._v("，而"),s("strong",[t._v("二叉树的右子树的节点个数自然是"),s("code",[t._v("3")]),t._v("了")]),t._v("。")]),t._v(" "),s("p",[t._v("由于"),s("code",[t._v("前序遍历")]),t._v("先根节点，在左子树，接着右子树，那么根据"),s("strong",[t._v("左右子树的节点个数")]),t._v("，自然可以从"),s("code",[t._v("前序遍历")]),t._v("序列中获取到左右子树的"),s("code",[t._v("前序遍历")]),t._v("序列。👇")]),t._v(" "),s("p",[s("code",[t._v("前序遍历")]),t._v("："),s("code",[t._v("[3] 根 / [9] 左 / [20, 15, 7] 右")]),t._v(" 。")]),t._v(" "),s("h3",{attrs:{id:"递归解法-来自题解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归解法-来自题解"}},[t._v("#")]),t._v(" 递归解法（来自题解）")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} preorder\n * @param {number[]} inorder\n * @return {TreeNode}\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("buildTree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("preorder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inorder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("preorder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preorder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根节点应为前序遍历第一个节点")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" inorder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preorder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 索引")]),t._v("\n\n  root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildTree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preorder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inorder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 左子树")]),t._v("\n  root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildTree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preorder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inorder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 右子树")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);