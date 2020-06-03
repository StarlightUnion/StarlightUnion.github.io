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
> 搞一个个性化，也不能千篇一律。。

需求有了，接下来就是研究可行性。

## 一、可行性

* **VuePress由Vue、Vue Router和webpack**驱动。

  可以在[Markdown中使用Vue语法](https://www.vuepress.cn/guide/using-vue.html)一文中找到相关资料，可以使用Vue开发自定组件。

* 数据来源👇

  ![vuepress-make-plugin-01](/images/other/aboutblog/vuepress-make-plugin-01.png)

  可以使用`vue-devtools`查看到，在`<Page>`组件中有一个`$frontmatter`，这个对象内部存放有写在每一篇博文开头的标注内容(下图👇)，如`title`等，可以自定`key`和`value`，往里面加入此篇博文的数据。

  ![vuepress-make-plugin-02](/images/other/aboutblog/vuepress-make-plugin-02.png)

#### 尝试打印标注的数据



施工中🚧...

