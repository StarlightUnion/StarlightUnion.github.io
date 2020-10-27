---
title: 【每日一题】1371 每个元音包含偶数次的最长子字符串
date: 2020/05/20 00:00:00
tags: ["LeetCode", "Exercise", "每日一题"]
difficulty: 中等
---

# 【每日一题】1371 每个元音包含偶数次的最长子字符串

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 题目地址：[1371.每个元音包含偶数次的最长子字符串](https://leetcode-cn.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/)

> **题意：**
>
> 给你一个字符串 `s` ，请你返回满足以下条件的最长子字符串的长度：每个元音字母，即 'a'，'e'，'i'，'o'，'u' ，在子字符串中都恰好出现了偶数次。
>
> **示例1：**
>
> ```
> 输入：s = "eleetminicoworoep"
> 输出：13
> 解释：最长子字符串是 "leetminicowor" ，它包含 e，i，o 各 2 个，以及 0 个 a，u 。
> ```
>
> **示例2：**
>
> ```
> 输入：s = "leetcodeisgreat"
> 输出：5
> 解释：最长子字符串是 "leetc" ，其中包含 2 个 e 。
> ```
>
> **示例3:**
>
> ```
> 输入：s = "bcbcbc"
> 输出：6
> 解释：这个示例中，字符串 "bcbcbc" 本身就是最长的，因为所有的元音 a，e，i，o，u 都出现了 0 次。
> ```
>
> **注意:**
>
> * `1 <= s.length <= 5 x 10^5`
> * `s` 只包含小写英文字母。

## 一、前缀和（来自题解）

这题看题目就了解了🤣 ，肯定不会做，直奔题解而去。

> 官方题解：[LeetCode@LeetCode-Solution](https://leetcode-cn.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solution/mei-ge-yuan-yin-bao-han-ou-shu-ci-de-zui-chang-z-2/)
>
> 前缀和解法，看懂废了好大的力气🤣 。

```js
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
  const n = s.length;
  const pos = new Array(1 << 5).fill(-1);
  let ans = 0, status = 0;
  pos[0] = 0;

  for (let i = 0; i < n; ++i) {
    const ch = s.charAt(i);

    if (ch === 'a') {
      status ^= 1 << 0;
    } else if (ch === 'e') {
      status ^= 1 << 1;
    } else if (ch === 'i') {
      status ^= 1 << 2;
    } else if (ch === 'o') {
      status ^= 1 << 3;
    } else if (ch === 'u') {
      status ^= 1 << 4;
    }

    if (~pos[status]) {
      ans = Math.max(ans, i + 1 - pos[status]);
    } else {
      pos[status] = i + 1;
    }
  }
  return ans;
};
```

施工中🚧...

