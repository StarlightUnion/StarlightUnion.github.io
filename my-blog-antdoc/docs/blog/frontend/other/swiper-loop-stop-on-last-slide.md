---
title: Swiper设置环路轮播到最后一个停止的问题
date: 2021/01/06 00:00:00
tags: ["Swiper"]
---

# Swiper设置环路轮播到最后一个停止的问题

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

最近在使用`Swiper`做自动滚动的时候发生了问题，花了不少时间来解决，所以有必要记一下。

## 一、需求与问题

### 1.需求如下

实现一个列表的**每一行每隔3s的自动向下滚动**，滚动到最后一行后**继续向下滚动**，此时继续滚动的是第一行。

### 2.配置

引入插件后实例化`Swiper`，配置以下配置参数：👇

```js
function InitSwiper() {
  new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: true,
    observer: true,
    observeParents: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    slidesPerView: 2,
    spaceBetween: 10
  });
}
```

### 3.问题

一顿操作猛如虎，结果发现滚动到最后一行死活不往下滚了。。。🙄

## 二、解决问题

仔细研究`Swiper`的API文档，发现设置为`loop`模式时，`Swiper`会在`slides`前后各复制若干个`swiper-slide`用于滚动切换。

但是打开控制台就能发现我这里没有复制，一共3个`swiper-slide`，还是3个。

****

开始以为是配置的问题，但是多次尝试无果，最后只好祭出百度大法，发现是**初始化方法写错地方了**。应该在拿到数据之后初始化。。🤣

```js
getSwiperInfo("../api/example").then(res => {
  this.data = res;

  new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: true,
    observer: true,
    observeParents: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    slidesPerView: 2,
    spaceBetween: 10
  });
})
```



## 三、参考资料

* 1.[中文api - Swiper中文网](https://www.swiper.com.cn/api/index.html)
* 2.[关于swiper动态加载数据失败滑动失效等问题](https://blog.csdn.net/qq_29954811/article/details/89924219)

