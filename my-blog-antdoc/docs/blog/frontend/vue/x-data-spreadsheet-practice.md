---
title: web表格x-data-spreadsheet实践
date: 2021/01/14 21:14:00
tags: ["Vue", "x-data-spreadsheet"]
---

# web表格x-data-spreadsheet实践

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> *当前`x-data-spreadsheet`版本`1.1.8`*。

[x-data-spreadsheet](https://github.com/myliang/x-spreadsheet)是一个基于canvas的web表格插件。实现效果与**excel**和**腾讯文档的表格**类似。

****

先给完工后的页面传送门`=>`[在线表格](/tools/excel-online.html)。

🤣 为了这个我还花了一个晚上爬了个坑，详见[ReferenceError: window is not defined](/blog/other/aboutblog/window-is-not-defined.html)。

## 一、按文档上手

代码详见👇

::: details 展开查看源码

```vue
<template>
  <div class="sheet-container">
    <div id="sheet-online-container"></div>
  </div>
</template>

<script>
import Spreadsheet from "x-data-spreadsheet";
import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn';

export default {
  name: "ExcelOnline",
  data() {
    return {
      sheet: null,
      options: {
        mode: "edit",
        showToolbar: true,
        showGrid: true,
        showContextmenu: true,
        view: {
          height: () => document.documentElement.clientHeight,
          width: () => document.documentElement.clientWidth
        },
        row: {
          len: 100,
          height: 25,
        },
        col: {
          len: 26,
          width: 100,
          indexWidth: 60,
          minWidth: 60,
        },
        style: {
          bgcolor: "#ffffff",
          align: "left",
          valign: "middle",
          textwrap: false,
          strike: false,
          underline: false,
          color: "#0a0a0a",
          font: {
            name: "Helvetica",
            size: 10,
            bold: false,
            italic: false,
          },
        }
      }
    }
  },
  methods: {
    InitSheet() {
      Spreadsheet.locale("zh-cn", zhCN);
      this.sheet = new Spreadsheet(document.getElementById("sheet-online-container"), this.options);
    }
  },
  mounted() {
    // 初始化表格
    this.InitSheet();
  }
}
</script>
```

:::

简直傻瓜式操作，实例化成功了。

## 二、坑

**但是**，来转折了，虽然实例化成功，问题随之而来。。

### 1.语言还是英文

按文档来:

```js
// 引入中文包
import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn';

// 实例化
Spreadsheet.locale("zh-cn", zhCN);
```

😮 最后百度大法发现，引这个包成功不了，需要用下面这个路径。。。

```js
import zhCN from 'x-data-spreadsheet/src/locale/zh-cn'
```

### 2.表格默认为全屏

![x-data-spreadsheet-01](/images/frontend/vue/x-data-spreadsheet-01.png)

直接拿文档的配置来的话，**表格的宽度和高度默认是浏览器窗口的宽度和高度**。

问题出在这👇

![x-data-spreadsheet-02](/images/frontend/vue/x-data-spreadsheet-02.png)

稍作修改：👇

```vue
<template>
	...
	<div id="sheet-online-container" ref="sheetContainer"></div>
	...
</template>

<script>
  ...
	view: {
    height: () => this.$refs.sheetContainer.offsetHeight,
    width: () => this.$refs.sheetContainer.offsetWidth
  }
  ...
</script>

```

