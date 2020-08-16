---
title: ResizeObserver监听元素的resize事件
date: 2020/08/10 00:00:00
tags: ["ResizeObserver"]
---

# ResizeObserver监听元素的resize事件

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 最近在写业务中有遇到需要监听**一个元素**的`resize`事件的需求（为了实现**自适应布局**）。
>
> 虽然存在`window.onresize`这个API，但是它却是用来监听**浏览器窗口**的`resize`事件，那我在业务中总不能让用户去**拖拽浏览器窗口吧**，这听着就不是一个好主意。
>
> ****
>
> 几经查找（~~百度~~），发现了`ResizeObserver`，虽然**该API目前还处在实验中**，但是浏览器兼容性非常不错：👇
>
> ![resize-observer-01](/images/frontend/js/resize-observer-01.png)
>
> **有鉴于我司产品只应用于PC端浏览器，不用考虑兼容移动端，而且貌似也没有其它的解决办法，所以姑且用它把。。**

`ResizeObserver`的API：👇

| 方法 | 介绍  |
| ---- | ------ |
| `ResizeObserver.disconnct()` | 取消和结束目标对象上所有对`Element`或`SVGElement`观察。 |
| `ResizeObserver.observe()` | 开始观察指定的`Element`或`SVGElement`。 |
| `ResizeObserver.unobserve()` | 结束观察指定的`Element`或`SVGElement`。 |

## 一、使用

### 创建一个`ResizeObserver`

```js
const ro = new ResizeObserver(res => {
  console.log(res);// 看一下返回的东西
})

ro.observe(document.getElementById("xxx"));
```

![resize-observer-02](/images/frontend/js/resize-observer-02.png)

返回的是一个**数组**，它里面最重要的就两个属性：`contentRect`和`target`，`target`就不说了，就是**当前监听的DOM节点**。`contentRect`则包含了这个DOM节点的参数,包括`width、height、bottom、left、right、top、x和y`，这些应该足够使用了。

### 取消/暂时结束观察

```js
ro.disconnct();
```

一般写在监听DOM节点被隐藏时（可以结合业务判断），主要目的是为了在**隐藏/不再显示**这段时间内**暂时**取消监听，节省开销。

那么在重新打开/进入模块时还需要重新监听：

```js
if (ro) ro.observe();
```

### 终止观察

```js
ro.unobserve();
```

模块销毁时彻底结束观察。

## 二、需要注意的

[参考资料[1]](#三、参考资料)中说了：

> ...在使用ResizeObserver API的时候，在每次触发元素的大小变化时，会在1s内触发回调蛮多次的。如果想进一步优化性能，可以加上throttle节流函数处理...

这里节流的话，在业务中实际使用会发现**效果并不会流畅，就是会是一顿一顿的**。

因为**节流实际上把多个事件只取一个进行处理（并不是合并，也不会合并）**，比如监听返回了`30`个事件，但却回调只执行了`6`次。

虽然是节省了开销，防止连续触发回调事件，但是如果回调的方法是执行动画效果的话，就不会很连贯，这样的话可能还需要配合`transition`这个CSS样式才行。

## 三、参考资料

* 1.[ResizeObserver API - 知乎](https://zhuanlan.zhihu.com/p/41418813)
* 2.[ResizeObserver - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)

