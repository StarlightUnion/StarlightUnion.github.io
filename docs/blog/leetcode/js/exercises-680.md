---
title: 【每日一题】680 验证回文字符串 Ⅱ
date: 2020/05/19 00:00:00
tags: ["LeetCode", "Exercise", "每日一题"]
difficulty: 简单
---

# 【每日一题】680 验证回文字符串 Ⅱ

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址：[680.验证回文字符串 Ⅱ](https://leetcode-cn.com/problems/valid-palindrome-ii/)

> **题意：**
>
> 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
>
>**示例1：**
>
> ```
> 输入: "aba"
> 输出: True
>```
>
>**示例2：**
>
>```
> 输入: "abca"
> 输出: True
> ```
>
>**注意:**
>
>字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

## 一、尝试暴力破解

> 照例尝试暴力~~循环~~解法。。在失败了好几次后，~~偷窥了一眼题解~~，集各家所长，终于调出来了🤣 🎉。
>
> **思路：**
>
> 这个应该算是**边界 + 遍历**吧。每次遍历时左边界`left++`，右边界`right--`。当`s[left] !== s[right]`即**两边边界字符不相等的时候**，分别截取`s`**中左边界到右边界部分（除去右边界）**、截取`s`**中左边界到右边界部分（除去左边界）**。
>
> 将两个字符串分别转换成数组`arr`和`_arr`，分别使用`Array.reverse()`反转：👇
>
> * `arr` -> `arr.reverse()`
> * `_arr` -> `_arr.reverse()`
>
> 再转换为字符串后比较**本体**与**反转后是否相等**来判断剩余部分**是不是回文字符串**。
>
> * `arr.join('')` -> `arr.reverse().join('')`
> * `_arr.join('')` -> `_arr.reverse().join('')`

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    if (s[left] !== s[right]) {
      let arr = s.slice(left, right).split('');// 截取 s 中左边界到右边界部分（除去右边界）
      let _arr = s.slice(left + 1, right + 1).split('');// 截取 s 中左边界到右边界部分（除去左边界）

      return arr.join('') === arr.reverse().join('')
        || _arr.join('') === _arr.reverse().join('');// 比较本体与反转后是否相等
    }
  }

  return true;
}
```

**提交结果：**

| Time        | Cache       |
| ----------- | ----------- |
| 204ms 9.22% | 56.9MB 100% |

## 二、4行递归 + 边界（来自题解）

> 来自题解[LeetCode@jsyt](https://leetcode-cn.com/problems/valid-palindrome-ii/solution/js-4-xing-dai-ma-jian-dan-yi-dong-by-jsyt/)
>
> **分析题意：**（看懂官方题解有感）
>
> 使用`flag`来标记一次递归调用，如果是`flag == true`就代表可以执行递归（题意是**最多删除一个字符**，只能执行一次递归）。

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, flag = true) {
  let l = 0, r = s.length - 1;
  while (l < r && s[l] === s[r]) l++, r--;// 相等直接跳过
  if (r <= l) return true;// 左>=右边界时返回true
  if (flag == true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false)// flag == true 执行一次判断，并且只执行一次
  return false;// 上面条件都不满足则返回false
};
```