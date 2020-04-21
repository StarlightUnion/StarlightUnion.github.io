---
title: 【题库练习】03 无重复字符的最长子串
date: 2019/11/01 19:14:05
tags: LeetCode, Exercise
---

# 【题库练习】03 无重复字符的最长子串

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址@[LeetCode-longest-substring-without-repeating-characters](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

> **题意：**
>
> 给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。
>
> **示例1：**
>
> ```
> 输入: "abcabcbb"
> 输出: 3
> 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
> ```
>
> **示例2：**
>
> ```
> 输入: "bbbbb"
> 输出: 1
> 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
> ```
>
> **示例3：**
>
> ```
> 输入: "pwwkew"
> 输出: 3
> 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
>      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
> ```

## 一、遍历检查

这是一个**笨办法**，思路是：将**每次遍历的字符与之前遍历的字符比较**，如果有重复字符则截取不重复的这一部分与之拼接，不重复则直接拼接上去，每次遍历时将保存的不重复字符串的长度进行比较，取最大的一个。

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = 0;
    let str = "";

    for(let i = 0; i < s.length; i++) {
        if(str.indexOf(s[i]) < 0) {
            str += s[i];
            len = str.length > len ? str.length : len;// 比较字符串长度
        } else {
            str += s[i];
            str = str.slice(str.indexOf(s[i]) + 1);// 截取
        }
    }
    return len;
};
```

**测试用例：**

```js
lengthOfLongestSubstring("abcbacbb") // "abc" "cba" "bac" "acb" -> 都是3
```

**提交结果：**

| Time  | Memory |
| ----- | ------ |
| 160ms | 40.3MB |

## 二、滑动窗口（来自于题解）

这一解灵感来源于题解。

这里的**滑动窗口**就是`left`和`right`构成的**区间/窗口**，`left`为窗口左边界，`right`为窗口右边界，窗口内字符串都是不重复的。

开始时**右边界向右扩张**，每次扩张边界+1，**检查扩张的字符是否与窗口内字符重复**，重复则将**左边界移到窗口内重复的字符**这里，记录窗口字符串的最长长度。

```js
var lengthOfLongestSubstring = function(s) {
    if(s.length < 1) {
        return 0;
    }

    let len = 0, left = 0, right = 1;
    while(right < s.length) {
        let str = s.slice(left, right);
        let flag = str.indexOf(s[right]);
        if(flag >= 0) {
            left += flag + 1;
        } else {
            len = right - left + 1 > len ? right - left + 1 : len;
        }

        right++;
    }
    return len;
}
```

**测试用例同上**

**提交结果：**

| Time | Memory |
| ---- | ------ |
| 80ms | 37.3MB |

与第一个相比，速度提升了一倍。。。遍历不太行。。。