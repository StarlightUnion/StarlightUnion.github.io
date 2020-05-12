---
title: 【题库练习】06 Z字形变换
date: 2019/11/21 18:01:33
tags: LeetCode, Exercise
difficulty: 中等
---

# 【题库练习】06 Z字形变换

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址@[LeetCode-zigzag-conversion](https://leetcode-cn.com/problems/zigzag-conversion/)

> **题意：**
>
> 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
>
> 比如输入字符串为 `"LEETCODEISHIRING"` 行数为 3 时，排列如下：
>
> ```
> L   C   I   R
> E T O E S I I G
> E   D   H   N
> ```
>
> 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"LCIRETOESIIGEDHN"`。
>
> 请你实现这个将字符串进行指定行数变换的函数：
>
> ```
> string convert(string s, int numRows);
> ```
>
> **示例1：**
>
> ```
> 输入: s = "LEETCODEISHIRING", numRows = 3
> 输出: "LCIRETOESIIGEDHN"
> ```
>
> **示例2：**
>
> ```
> 输入: s = "LEETCODEISHIRING", numRows = 4
> 输出: "LDREOEIIECIHNTSG"
> 解释:
> L     D     R
> E   O E   I I
> E C   I H   N
> T     S     G
> ```

## 一、准备

题意是指定行数，那么只要将字符串分割成一个一个，放入每一行即可。

放入哪一行还不是随便的，**从上到下依次放满后顺序就要从下到上放**，`↓↑↓↑...`如此反复，直到所有字符放入。

## 二、解

不知道算什么方法的解

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let strArray = [];// 字符数组
    let index = 0;// 当前行
    let flag = true;// 方向标识

    if (numRows === 1) {
        return s;
    }

    for (let i = 0; i < numRows; i++) {
        strArray.push("");//创建有numRows行的数组，每行都是空字符串
    }

    for (let j = 0; j <s.length; j++) {
        if (index === 0) {
          	// 如果当前行为第一行，flag = true，接下来摆放的顺序将是从上到下
            flag = true;
        } else if (index === (numRows - 1)) {
          	// 如果当前行为最后一行，接下来的顺序将是从下到上
            flag = false;
        }

        strArray[index] = strArray[index] + s[j];// 字符拼接
        index = flag ? index + 1 : index - 1;// 下一行
    }
    return strArray.join("");
};
```

**测试用例：**

```js
convert("LEETCODEISHIRING", 3)
// "LDREOEIIECIHNTSG"
convert("JAVASCRIPTISAPROGRAMMINGLANGUAGE", 4)
// "JRAALGACISPRMGAAEVSPIRGMNNUATOIG"
```

**提交结果：**

| Time  | Cache  |
| ----- | ------ |
| 148ms | 37.8MB |

