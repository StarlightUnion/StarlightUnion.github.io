---
title: 【题库练习】05 最长回文子串
date: 2019/12/02 23:07:34
tags: ["LeetCode", "Exercise"]
difficulty: 中等
---

# 【题库练习】05 最长回文子串

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址@[LeetCode-longest-palindromic-substring](https://leetcode-cn.com/problems/longest-palindromic-substring/)

> **题意：**
>
> 给定一个字符串 `s`，找到 `s` 中最长的回文子串。你可以假设 `s` 的最大长度为 1000。
>
> **示例1：**
>
> ```
> 输入: "babad"
> 输出: "bab"
> 注意: "aba" 也是一个有效答案。
> ```
>
> **示例2：**
>
> ```
> 输入: "cbbd"
> 输出: "bb"
> ```

根据题意，**回文**字符串有两种形式，分别为`aba`还有`abba`。

## 一、滑动窗口

使用前文中使用过的**滑动窗口**遍历。。针对**两种形式的回文字符串**分别设计处理方法。

* 对于`aba`形式的回文字符串，遍历每一个字符串中的每一个字符，**初始左右边界各为1，总长为3**，开始扩张左右边界，每次左边界`-1`，右边界`+1`，比较两边扩张的字符是否相同，不同的话就记录该字符串，相同则继续扩张左右边界。
* 对于`baab`形式初始**左右边界分别为0和1**，总长为2，每次扩张边界左边界`-1`，右边界`+1`，后面操作和`aba`相同。

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    let res = '', _res = '';

    // 1.aba模式
    for (let i = 1; i < s.length - 1; i++) {
        let flag = true;
        let left = i - 1, right = i + 1;// 左右边界

        while(flag) {
            if (left >= 0 && right <= s.length - 1) {
                if (s[left] === s[right]) {
                    let str = s.slice(left, right + 1);

                    res = str.length >= res.length ? str : res;
                    left--;
                    right++;
                } else {
                    flag = false;
                }
            } else {
                flag = false;
            }
        }
    }

    // 2.baab模式
    for (let i = 0; i < s.length; i++) {
        let _flag = true;
        let _left = i, _right = i + 1;// 左右边界

        while(_flag) {
            if (_left >= 0 && _right <= s.length - 1) {
                if (s[_left] === s[_right]) {
                    let _str = s.slice(_left, _right + 1);

                    _res = _str.length >= _res.length ? _str : _res;
                    _left--;
                    _right++;
                } else {
                    _flag = false;
                }
            } else {
                _flag = false;
            }
        }
    }

    if (!_res.length) _res = s[0];
    return res.length > _res.length ? res : _res;
};
```

**提交结果：**

| Time  | Cache  |
| ----- | ------ |
| 192ms | 37.4MB |

## 二、动态规划（来自题解）

> 该解来自于题解[LeetCode@DeepWang](https://leetcode-cn.com/problems/longest-palindromic-substring/solution/hua-jie-suan-fa-5-zui-chang-hui-wen-zi-chuan-by-de/)

大佬解法。。😐通过获取**最长公共子串**来获得**最长回文字符串**，其实看的不是很懂，但是原理看懂了。。