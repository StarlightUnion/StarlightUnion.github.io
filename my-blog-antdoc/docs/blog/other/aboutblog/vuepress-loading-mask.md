---
title: VuePress添加loading页
date: 2021/01/16 20:27:00
tags: ["杂记", "VuePress", "Vue", "Vuex", "Blog"]
---

# VuePress添加loading页

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 由于博客页面在**加载的时候页面会有较长时间的白屏**，感觉<font color="red">有碍观瞻</font>，太丑了，就想着加一个loading页，样式的话就直接拿`antd`的来。

## 一、原理

* 根据VuePress文档[参考资料[1]](#)（即下图）中的全局UI组件相关内容，可以实现一个loading组件，将其注册为`globalUIComponents`，剩下的就是如何控制它的显示与隐藏了。

  ![loading-mask-02](/images/other/aboutblog/loading-mask-02.png)

* 查看`VuePress`的源码可以发现`layouts/Layout.vue`是`VuePress`的根级组件，我们只需要在`Layout.vue`**挂载上去之前显示loading**，**挂载之后隐藏loading就可以了**。

  结合`Vue`的「生命周期钩子」，可以：👇

  * `beforeCreated`：显示。
  * `mounted`：隐藏。

## 二、注册全局UI组件

### 1.构建组件

::: details 展开查看loading组件代码

```vue
<template>
  <div id="loading-mask" v-show="show">
    <div class="loading-wrapper">
      <span class="loading-dot loading-dot-spin">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Loading',
  computed: mapState({
    show: state => state.show
  }),
}
</script>

<style lang="less">
  @import "../styles/palette.less";

  #loading-mask {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    user-select: none;
    z-index: 9999;
    overflow: hidden
  }

  .loading-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%)
  }

  .loading-dot {
    animation: antRotate 1.2s infinite linear;
    transform: rotate(45deg);
    position: relative;
    display: inline-block;
    font-size: 64px;
    width: 37px;
    height: 37px;
    box-sizing: border-box
  }

  .loading-dot i {
    width: 15px;
    height: 15px;
    position: absolute;
    display: block;
    background-color: @accentColor;
    border-radius: 100%;
    transform: scale(.75);
    transform-origin: 50% 50%;
    opacity: .3;
    animation: antSpinMove 1s infinite linear alternate
  }

  .loading-dot i:nth-child(1) {
    top: 0;
    left: 0
  }

  .loading-dot i:nth-child(2) {
    top: 0;
    right: 0;
    -webkit-animation-delay: .4s;
    animation-delay: .4s
  }

  .loading-dot i:nth-child(3) {
    right: 0;
    bottom: 0;
    -webkit-animation-delay: .8s;
    animation-delay: .8s
  }

  .loading-dot i:nth-child(4) {
    bottom: 0;
    left: 0;
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s
  }

  @keyframes antRotate {
    to {
      -webkit-transform: rotate(405deg);
      transform: rotate(405deg)
    }
  }

  @-webkit-keyframes antRotate {
    to {
      -webkit-transform: rotate(405deg);
      transform: rotate(405deg)
    }
  }

  @keyframes antSpinMove {
    to {
      opacity: 1
    }
  }

  @-webkit-keyframes antSpinMove {
    to {
      opacity: 1
    }
  }
</style>
```

:::

### 2.注册全局组件

在`.vuepress/enhanceApp.js`中添加以下代码将loading注册为**全局组件**：

```js {1,9}
import Loading from './my-pages/Loading';

export default ({
  Vue,
  options,
  router,
  siteData,
}) => {
  Vue.component('Loading', Loading);
}
```

### 3.注册为`globalUIComponents`

在`.vuepress/config.js`中添加以下代码将loading注册为**全局UI组件**：

```js
module.exports = {
  ...
  globalUIComponents: ["Loading"],
  ...
}
```

![loading-mask-03](/images/other/aboutblog/loading-mask-03.png)

![loading-mask-01](/images/other/aboutblog/loading-mask-01.png)

## 三、使用`Vuex`控制显示

🚧 施工中...

## 四、参考资料

* 1.[Option API | Plugin - globalUIComponents](https://vuepress.vuejs.org/zh/plugin/option-api.html#globaluicomponents)

