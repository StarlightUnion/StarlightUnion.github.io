---
title: VuePress之修改默认主题
date: 2020/06/06 15:57:00
tags: ["VuePress", "Blog", "Vue"]
---
# VuePress之修改默认主题

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 博客使用的是`VuePress`的默认主题，作为**稍微有点动手能力**前端初级切图仔，这个默认主题有点太大众化了，准备一点点的加些自己的东西上去。
>
> 前文[VuePress之开发自己的插件](/blog/others/aboutblog/vuepress-make-vue-plugin.html)只是开发插件，使用的时候还需要写在`.md`文件中。。。

`VuePress`提供了[主题的继承](https://www.vuepress.cn/theme/inheritance.html)，这使得我们可以在**本地修改默认主题中的某些组件**，来满足一些自定的需求。

## 一、获取`VuePress`源码

```shell {2}
cd my-blog
vuepress eject # 将vuepress源码拷贝至my-blog
```

源码会保存在`my-blog`**根目录下的`.vuepress`里**。

``` {2}
. my-blog
├── .vuepress # vuepress源码，不是下面那个
├── docs
│   └── .vuepress 
└── package.json
```

源码的目录结构如下：👇

::: details 展开源码查看目录结构

可以尝试阅读一下源码，多读一些别人的代码没啥坏处。。

顾名思义，源码中的许多组件可以**通过名字明白其作用**，比如`Navbar.vue`就是**页面上方的导航条组件**。

``` {25}
. .vuepress
└── theme
    ├── LICENSE
    ├── components
    │   ├── AlgoliaSearchBox.vue
    │   ├── DropdownLink.vue
    │   ├── DropdownTransition.vue
    │   ├── Home.vue
    │   ├── NavLink.vue
    │   ├── NavLinks.vue
    │   ├── Navbar.vue
    │   ├── Page.vue
    │   ├── PageEdit.vue
    │   ├── PageNav.vue
    │   ├── Sidebar.vue
    │   ├── SidebarButton.vue
    │   ├── SidebarGroup.vue
    │   ├── SidebarLink.vue
    │   └── SidebarLinks.vue
    ├── global-components
    │   └── Badge.vue
    ├── index.js
    ├── layouts
    │   ├── 404.vue
    │   └── Layout.vue # 入口
    ├── noopModule.js
    ├── styles
    │   ├── arrow.styl
    │   ├── code.styl
    │   ├── config.styl
    │   ├── custom-blocks.styl
    │   ├── index.styl
    │   ├── mobile.styl
    │   ├── toc.styl
    │   └── wrapper.styl
    └── util
        └── index.js
```

:::

## 二、主题的继承

### 目录结构

``` {5,6,7,8,9,10}
. my-blog
├── .vuepress # vuepress源码
├── docs
│   └── .vuepress
│       └── theme
│           ├── components
│           ├── layouts
│           ├── styles
│           ├── ...
│           └── index.js
└── package.json
```

上面的**博客项目目录结构中**，高亮的几行都是本次要增加的内容。

* 首先在`docs/.vuepress`下新建`theme`目录，**里面的目录结构要和源码的目录结构保持一致**。

* 接着在`docs/.vuepress/theme`目录下新建`index.js`，键入：👇

  ```js
  module.exports = {
    extend: '@vuepress/theme-default'
  }
  ```

**官方文档中有关目录结构的表述**👇

![modify-vuepress-theme-01](/images/other/aboutblog/modify-vuepress-theme-01.png)

### 组件的覆盖

将源码中的`Home.vue`拷贝至刚刚新建的目录下（注意，目录要保持一致）。可以尝试修改其中的代码，比如**增加一些文字内容，如：`This is homepage.`**。之后需要停止运行项目，手动重启`dev server`查看修改结果。

::: danger 注意事项

* **路径要与源码的目录路径保持一致！**
* 每一次修改某一组件代码需**先拷贝该组件源码**，**再将其相关的样式文件、子组件、工具方法等一起拷贝**。
* 可以通过`@theme`来访问主题根目录，不管是**自己写的组件还是原有的组件**，例如：`@theme/components/Home.vue`。`docs/.vuepress/theme`下的组件优先级较高，**如果有同名的组件会直接覆盖原有组件**。

:::

