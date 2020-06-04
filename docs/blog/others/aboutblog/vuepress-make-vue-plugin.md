---
title: VuePress之开发自己的插件
date: 2020/04/12 00:00:00
tags: ["VuePress", "Blog", "Vue"]
---
# VuePress之开发自己的插件

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> VuePress默认主题自带有一个**last-updated**插件，可以**获取提交的时间戳并将其展示在页面底部**。但是这个时间戳展示的是**最后更新的时间**，**≠**该博文创建的时间。除此之外，我还想展示此篇博文**标注的标签内容**。
>
> 搞个性化，也不能千篇一律。。

需求有了，接下来就是研究可行性。

## 一、可行性

* **VuePress由Vue、Vue Router和webpack**驱动。

  可以在[Markdown中使用Vue语法](https://www.vuepress.cn/guide/using-vue.html)一文中找到相关资料，可以使用Vue开发自定组件。

* 数据来源👇

  ![vuepress-make-plugin-01](/images/other/aboutblog/vuepress-make-plugin-01.png)

  可以使用`vue-devtools`查看到，在`<Page>`组件中有一个`$frontmatter`，这个对象内部存放有写在每一篇博文开头的标注内容(下图👇)，如`title`等，可以自定`key`和`value`，往里面加入此篇博文的数据。

  ![vuepress-make-plugin-02](/images/other/aboutblog/vuepress-make-plugin-02.png)

## 二、尝试打印标注里的数据

> 在`.vuepress`目录下，新建一个`components`文件夹，自己写的组件放入其中。通过文档可知，在`.vuepress/components`中的`.vue`文件会**被注册为全局组件**，而且可以**直接在Markdown中使用**。
>
> ![vuepress-make-plugin-03](/images/other/aboutblog/vuepress-make-plugin-03.png)

**首先**在`components`目录中新建一个`DisplayBar.vue`，写入：👇

```vue
<!-- DisplayBar.vue -->
<template>
  <div class="display-bar"></div>
</template>

<script>
export default {
  name: 'DisplayBar',
  props: {
    displayData: { type: Object }
  },
  data () {
    return {}
  },
  mounted () {
    if (this.displayData) {
    	console.log(this.displayData);
    }
  }
}
</script>
```

在一个`.md`文件中写入：👇

```markdown
<!-- .md -->
---
title: VuePress之开发自己的插件
date: 2020/04/12 00:00:00
tags: ["VuePress", "Blog", "Vue"]
---

# VuePress之开发自己的插件

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>
```

随后重启`VuePress`，在命令行中按`Ctrl + c`退出当前进程（**必须手动重启，热更新可能会出错**），命令行中键入`npm run dev`后重新回到此页，从控制台可以看到**成功打印出写入到标注内的数据**！！

![vuepress-make-plugin-04](/images/other/aboutblog/vuepress-make-plugin-04.png)

## 三、完善`DisplayBar.vue`

从阿里图标库选择合适的图标下载，将`.css`拷贝至博客项目文件夹，在`config.js`中引入：

```js {9}
// config.js

module.exports = {
  ...
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/iconfont.css' }],
  ],
  ...
}
```

源码在下面：👇

```vue {56}
<!-- DisplayBar.vue -->
<template>
  <div class="display-bar">
    <div class="bar-item" v-show="createTime.length">
      <span class="iconfont icon-time"></span>
      <span>{{createTime}}</span>
    </div>
    <div class="bar-item" v-show="tags.length">
      <span class="iconfont icon-tag"></span>
      <span v-for="(item, key) in tags" :key="key">{{item.trim()}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayBar',
  props: {
    displayData: { type: Object }
  },
  data () {
    return {
      tags: '',
      createTime: ''
    }
  },
  mounted () {
    if (this.displayData) {
      // 标签
      this.tags = this.displayData.tags.length ? this.displayData.tags : [];

      // 时间
      this.createTime = this.displayData.date;
    } else {
      this.tags = [];
      this.createTime = '';
    }

    // console.log(this.displayData);
  }
}
</script>

<style lang="stylus">
  .display-bar
    display flex
    color rgba(0,0,0,.54)
    font-size 0.8rem
    font-weight 400

    span:not(.iconfont)
      cursor pointer
      font-style italic

    span:not(.iconfont):hover
      color $accentColor

    .iconfont
      font-size 0.8rem
      font-weight 600

    .bar-item
      margin-right 1.25rem

    .icon-time + span
      margin-left 0.125rem

    .icon-tag ~ span
      margin: 0 0.125rem
</style>
```

上面使用了CSS预处理器`stylus`，这样可以继承在`palette.styl`中设置的主题色`$accentColor`（行中已高亮）。

具体效果看本篇博文大标题下的那一行就行了。。

