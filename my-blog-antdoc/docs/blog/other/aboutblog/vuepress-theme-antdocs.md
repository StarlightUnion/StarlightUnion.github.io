---
title: 使用和改造vuepress-theme-antdocs主题
date: 2020/11/08 19:43:00
tags: ["杂记", "VuePress", "Blog", "antd"]
---

# 使用和改造vuepress-theme-antdocs主题

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 之前一直想要在`VuePress`里引入`Ant Design Vue`，使用它的UI组件来自己搭建一个`antd`风格的博客主题。奈何多次尝试都失败了，遇到了一堆错误，后面有其它的事就抛之脑后。
>
> 后面偶然间发现已经有老哥搞出了一套，那就不用造轮子了，直接用就好了。😁
>
> **当然这套轮子并不完全满足需要，本文还包括了如何改造它**。
>
> *主题相关文档传送门在[参考资料[1]](#三、参考资料)。*

::: danger 注意

* 建议从头开始搭建一个新的`vuepress`项目安装该主题，我这边在**使用默认主题的老项目基础上**尝试多次都没有成功。

* 另外该主题需要`core-js`依赖版本为`2.6.11`，高于此版本会出现错误。

  命令：`cnpm i core-js@2.6.11 --save`

:::

## 一、安装并使用主题

**安装**

```shell
yarn add vuepress-theme-antdocs
# OR npm i vuepress-theme-antdocs
```

**使用**

在`.vuepress/config.js`中配置：

```js
module.exports = {
  ...
  theme: "antdocs",
  ...
}
```

## 二、改造主题

> 安装成功后，如果想要修改主题怎么办？毕竟自己有动手能力肯定不会满足于仅仅使用轮子，还想改造轮子。

`vuepress-theme-antdocs`的作者在文档中**并没有写明想要修改主题该怎么做**。

但是`vuepress`在[文档[2]和[3]](#三、参考资料)中给出了开发主题的方法。

**只需要进行如下操作👇**

* 1.进入安装的依赖文件夹`node_modules`，找到`vuepress-theme-antdocs`；
* 2.将下图**红圈中的文件**拷贝到`.vuepress/theme/`；

* 3.去掉上面的`.vuepress/config.js`配置中的`theme: "antdocs"`；
* 4.重新运行项目。

![theme-antdocs-02](/images/other/aboutblog/theme-antdocs-02.png) => ![theme-antdocs-01](/images/other/aboutblog/theme-antdocs-01.png)

这样就有了该主题的全部源码，可以根据自己的需要来改造。

<ClientOnly>
  <a-alert message="这个方法也适用其它VuePress主题。" type="info" show-icon />
</ClientOnly>

## 三、参考资料

* 1.[一款 Ant Design 设计风格的 VuePress 主题](https://antdocs.seeyoz.cn/)
* 2.[开发主题 | VuePress 中文文档](https://www.vuepress.cn/theme/writing-a-theme.html)
* 3.[主题的继承 | VuePress 中文文档](https://www.vuepress.cn/theme/inheritance.html)

