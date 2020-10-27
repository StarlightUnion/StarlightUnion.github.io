---
title: setInterval()和setTimeout()方法
date: 2020/07/28 22:51:00
tags: ["Window"]
---

# setInterval()和setTimeout()方法

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 本文记录`setInterval()`和`setTimeout()`的异同与用法心得。。

首先要注意的就是，无论是`setInterval`、`setTimeout`亦或是`clearInterval`、`clearTimeout`，它们都是`window`里面的方法，**属于浏览器的API**。

****

二者基本区别：

* `setInterval`：设置一个时间间隔，隔一段时间执行一次。`interval`就是**时间间隔的意思**。

  ::: danger ⚠️注意

  需要注意的是，`setInterval`方法是**只要时间到了，就会执行，不管是打了断点还是其他什么。**

  :::

* `setTimeout`：设置一个时间，这个时间后执行，并且只执行一次，也就是所谓的**延迟/延后执行**。

****

### 应用技巧

#### 延后执行

有如下代码：

```js {3,5}
function demo() {
  setTimeout(function () {
    console.log(1);// 1
  }, 0);
  console.log(2);// 2
}

demo();// 2 1
```

> 执行结果是**先**`2`**后**`1`。虽然延时的时间是`0`，但是它也不会立即执行。

`setTimeout`的作用是把**延后任务**提出到任务队列的最后一个，并在指定时间后执行该**延后任务**。

即使指定的时间是`0`，那么，该事件将在任务队列所有任务执行完成后执行。

**`setTimeout(function, 0)`适用于想要调整事件的执行顺序的情形**。

### 用法参考

[参考资料【3】](#参考资料)

### 参考资料

* 1.[window.setInterval - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)
* 2.[window.setTimeout - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout)
* 3.[setTimeout和setInterval从入门到精通](https://www.cnblogs.com/pelli/p/6225858.html)
* 4.[关于setTimeout()你所不知道的地方,详解setTimeout()](http://caibaojian.com/about-settimeout.html)

