---
title: Element.requestFullscreen实现元素全屏
date: 2020/12/18 00:00:00
tags: ["Web APIs"]
---

# Element.requestFullscreen实现元素全屏

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 一、元素全屏

浏览器中按`F11`可以进入全屏，这大家应该都知道。

但是如果**某个元素想要单独进行全屏**？这需要用到标题的这个API了。

`Element.requestFullscreen`是一个浏览器提供的API，使用它可以让某个元素单独进入全屏模式。该API返回一个`Promise`对象，成功进入时会`resolve`，失败则会`rejected`。

**使用**：

`var Promise = Element.requestFullscreen(options);`。

## 二、兼容性

既然是浏览器提供的API，由于众所周知的**各家浏览器的差异**，就有令人头疼的兼容性问题。

以下是兼容表（来自[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)）：

![element-request-full-screen-03](/images/frontend/web-apis/element-request-full-screen-03.png)

**兼容各家浏览器的全屏代码：**

::: details 展开查看代码

```js
//各浏览器元素显示全屏
function enterFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();// firefox
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();// webkit
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();// IE
    } else {
        alert("当前浏览器不支持部分全屏！");
    }
}

// 退出全屏
function exitFullscreen() {
    let element = document;
    if (element.exitFullscreen) {
        element.exitFullscreen();
    } else if (element.mozCancelFullScreen) {
        element.mozCancelFullScreen();
    } else if (element.webkitCancelFullScreen) {
        element.webkitCancelFullScreen();
    } else if (element.msExitFullscreen) {
        element.msExitFullscreen();
    } else {
        alert("当前浏览器不支持退出全屏！");
    }
}

//  检查当前是否全屏状态
function checkFull() {
    let isFull = window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;

    if (isFull === undefined) isFull = false;

    return isFull;
}
```

:::

## 三、使用测试

这是对某代码托管平台的炫酷猫的全屏测试，好像。。。

![element-request-full-screen-01](/images/frontend/web-apis/element-request-full-screen-01.png)

![element-request-full-screen-02](/images/frontend/web-apis/element-request-full-screen-02.png)

## 四、参考资料

* 1.[Element.requestFullscreen() - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen)
* 2.[浏览器全屏之requestFullScreen全屏与F11全屏](https://www.cnblogs.com/netgrace/archive/2018/03/10/js-fullscreen.html)

