---
title: 并不存在的outline-radius
date: 2020/08/28 00:00:00
tags: ["随想", "发现"]
---

# 并不存在的outline-radius

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 又是折腾

> 新版的UI规范出来了，老项目可完犊子了。。
>
> 因为是**老项目**，各种组件都得手动改。。😐

比如下面的按钮，点击聚焦时（也就是`:focus`或者`:focus-within`）时周围要有一圈**外发光**。类似于下面的左边这种效果。

![outline-radius-01](/images/thoughts/outline-radius-01.png)

## `outline`和并不存在的`outline-radius`

说到一圈**外发光**，肯定想到`outline`，先用它试一下。

给按钮加上一个样式：

```css
button:focus-within {
  outline: 4px solid rgba(22,118,254,0.13);
}
```

点击发现实际效果是上图右边那种样式：**外发光并没有和按钮一样变成圆角，而是矩形形状**。

此时我灵机一动~~瞎搞~~，既然有`border-radius`，会不会有`outline-radius`呢？

****

🤣 但实际测试后**并没有**。。。（**我测试的是谷歌浏览器**）

之所以强调是谷歌浏览器，是因为**在火狐浏览器中它是存在的**，不过要加个`-moz-`，叫`-moz-outline-radius`。

## `box-shadown`

那`outline-radius`还是算了，还是用`box-shadown`来实现吧。。

```css
button:focus-within {
  box-shadow: 0 0 0 4px rgba(22,118,254,0.13);
}
```

## 实例

::: warning ⚠️注意

手机端效果可能**不明显**。

:::

<ClientOnly>
  <outline-radius></outline-radius>
</ClientOnly>

