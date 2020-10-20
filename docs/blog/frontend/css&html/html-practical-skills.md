---
title: HTML实用技巧集合
date: 2020/01/11 00:00:00
tags: ["HTML", "技巧"]
---

# HTML实用技巧集合

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 1.页面加载完成后执行脚本-`defer`属性

```html
<script type="text/javascript" src="./demo.js" defer="defer"></script>
```

之前的话想要页面加载完后执行的脚本引用都是**直接放在页面最下面**，这样的坏处是要翻一整页代码，但有了`defer`之后，就可以和其它脚本引用一样都放在`head`里面了。

## 2.设置浏览器tab页的图标

```html
<link rel="icon" href="/logo.ico">
```

其实这个不这么写，在根目录下放一个`favicon.ico`也是可以的，但名字必须是`favicon.ico`。

## 3.输入框限制数字输入

`oninput`事件在`value`改变时触发，但**如果通过`js`改变将不会触发**。

**支持浮点数，不支持正负**

```html
<input
   oninput="value=value.replace(/[^\d|^\.]/g,'')"
   placeholder="请输入数字"
>
```

**仅支持数字，不支持正负**

```html
<input
   oninput="value=value.replace(/[^\d]/g,'')"
   placeholder="请输入数字"
>
```

## 4.使用`<colgroup>`和`<col>`格式化表格

参考此文：[HTML `<colgroup>` 标签](https://www.w3school.com.cn/tags/tag_colgroup.asp)

## 5.利用`<iframe>`属性

利用`<iframe>`属性解决

```html
<iframe src="https://www.baidu.com"></iframe>
<iframe src="https://www.baidu.com" frameborder="0" scrolling="no"></iframe>
```

![html-practical-skills-01](/images/frontend/css/html-practical-skills-01.png)

参考此文：[HTML `<iframe>` 标签](https://www.w3school.com.cn/tags/tag_iframe.asp)

****

🍗 不断更新...

