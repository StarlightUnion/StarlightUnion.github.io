---
title: "ReferenceError: window is not defined"
date: 2021/01/16 20:27:00
tags: ["杂记", "VuePress", "VueSSR", "Blog"]
---

# ReferenceError: window is not defined

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 接前文[web表格x-data-spreadsheet实践](/blog/frontend/vue/x-data-spreadsheet-practice.html)，完成**web表格**的开发后，开始打包，但就在打包时出了问题。。。

## 一、打包出错

![window-is-not-defined-04](/images/other/aboutblog/window-is-not-defined-04.png)

![window-is-not-defined-02](/images/other/aboutblog/window-is-not-defined-02.png)

由上面两张截图可以找到**打包抛出的错误**：

* 1.`ReferenceError: window is not defined`，
* 2.`Error: render function or template not defined in component: anonymous`。

第一个错误定位到了一个包，这也没办法确定是谁引用了它，无解，第二个错误也看不出个所以然。。🤣

**算了，来百度吧。**

## 二、百度大法

### 1.岔路

> 由于先搜索的第二个错误，找到了[参考资料[1]](#四、参考资料)，走了一趟岔路。。。

按**原文**的描述，是因为作者使用了一个判断浏览器的方法，方法调用了`navigator`，也就是调用了`window`，然后在打包时出了问题。作者使用的是`Nuxt`，一个`Vue`的`SSR`渲染框架。

**无独有偶**，`VuePress`也是一个`SSR`的框架，**更巧的是**，**我在一天前也给它加了一个方法用于判断当前浏览器环境是移动端还是PC端**。

****

<font color="red">我据此判断错误与原文相同！</font>于是照着修改了一下。

![window-is-not-defined-01](/images/other/aboutblog/window-is-not-defined-01.png)

但是还是报了个错`process is not defined`。。。🤣

### 2.分析

虽然此路不通，但是我了解到了**两个信息**：

::: tip

* 1.错误是出自`SSR`插件。这可以由报错的信息一连串的红色`vue-server-render`报错可以看出。

* 2.错误原因是**浏览器环境和服务器环境不一致**，**服务器环境（即`node`环境）没有`window`等全局变量**，服务端预渲染的话就会产生错误。这点可以在`VuePress`所用的`VueSSR`文档[参考资料[2]](#四、参考资料)或者下图发现。

  ![window-is-not-defined-05](/images/other/aboutblog/window-is-not-defined-05.png)

:::

### 3.明路！

据错误一`window is not defined`找到了[参考资料[3]](#四、参考资料)，才发现解决办法都在**VuePress的文档**（[参考资料[4]](#四、参考资料)）里写着，哈哈哈😂

联想到刚使用了`x-data-spreadsheet`，插件内部可能使用了浏览器环境的某些变量。

## 三、解决办法

```vue
<template>
  <div class="tool-page">
    <component v-if="dynamicComponent" :is="dynamicComponent"></component>
  </div>
</template>

<script>
export default {
  name: "Tool",
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted() {
    const toolType = this.$page.frontmatter.toolType;

    if (toolType === "excel-online") {
      import("../my-pages/ExcelOnline").then(moudle => {
        this.dynamicComponent = moudle.default;
      })
    }
  }
}
</script>
```

**最后静态页面渲染成功！**

![window-is-not-defined-03](/images/other/aboutblog/window-is-not-defined-03.png)

## 四、参考资料

* 1.[Nuxt 报错：render function or template not defined in component: anonymous](https://blog.csdn.net/dandelion_drq/article/details/89912968)
* 2.[编写通用代码 | Vue SSR 指南 - 访问特定平台(Platform-Specific) API](https://ssr.vuejs.org/zh/guide/universal.html#%E8%AE%BF%E9%97%AE%E7%89%B9%E5%AE%9A%E5%B9%B3%E5%8F%B0-platform-specific-api)
* 3.[VuePress window document is not defined](https://segmentfault.com/a/1190000022727986)
* 4.[在 Markdown 中 使用 Vue | VuePress -  浏览器的 API 访问限制](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6)

