---
title: 每日一练-某群交流实录
date: 2020/08/10 23:12:00
tags: ["记录", "交流实录"]
---

# 每日一练-某群交流实录

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 本文记录**某群**的每日一练内容，内容以日期分类。
>
> 好好学习，天天向上！😁

## 2020-08-07（3）

#### 1.`push()`

```js
  // 下面代码的执行结果是什么？
  function addTolist(item, list) {
    return list.push(item);
  }

  var result = addTolist("apple", ["banana"]);
  console.log(result);

  // A ["apple", "banana"]
  // B 2
  // C true
  // D undefined
```

答案为`D`，因为`push()`方法是**返回操作后数组的长度**。🤣

> 解题秘籍 => **放到浏览器运行**🤣
>
> ![daily-practicing-01](/images/record/daily-practicing-01.png)

#### 2.作用域和`this`

```js
  var myObject = {
    foo: "bar",
    func: function () {
      var self = this;
      console.log("outer func: this.foo = " + this.foo);// 1
      console.log("outer func: self.foo = " + self.foo);// 2

      (function () {
        console.log("inner func: this.foo = " + this.foo);// 3
        console.log("inner func: self.foo = " + self.foo);// 4
      }());
    }
  };

  myObject.func();
```
答案：👇

```js
outer func: this.foo = bar
outer func: self.foo = bar
inner func: this.foo = undefined
inner func: self.foo = bar
```

> ![daily-practicing-02](/images/record/daily-practicing-02.png)
>
> 以**谁调用谁就是**`this`原则，`myObject.func()`中`myObject`调用了`func()`，那么`func()`中的`this`就是`myObject`，而`self = this`，所以`this.foo = self.foo = "bar"`。
>
> 下面的**匿名函数**创建了一个新的作用域，它的`this`指向`window`，所以`this.foo = "undefined"`。而`self`在外面一层定义，所以`self.foo = "bar"`。

#### 3.运算类型转换

```js
"b" + "a" + + "a" // "baNaN"
// + "a" 不是一个数，即"NaN"

[] + true + [] + false // "truefalse"
```

> `+`运算时把两边字符串化后再相加，相当于拼接了。
>
> ![daily-practicing-04](/images/record/daily-practicing-04.png)
>
> **参考资料**：[JS加法运算全解析](https://www.jianshu.com/p/f4f2a57b0cfd)

## 2020-08-10（1）

```js
var value = !function (a, b) {
  return !!a && !!b;
}(1, 2);

console.log(value);// false
```

> 浏览器大法永远滴神😂
>
> 总结一下就是转为**布尔类型**运算了。`a = 1, b = 2`，二者都不为`0`，所以是`true`，加`!!`还是`true`，`true && true = true`，最后反一下为`false`。
>
> ![daily-practicing-03](/images/record/daily-practicing-03.png)

## 2020-08-19（1）

```js
var arr = [1, 2, 3, 4];
arr.length = 1;
console.log(arr);// [1]
```

> 这。。。就相当于截取了吧。。

## 2020-08-21（1）

```js
// 下列代码的执行结果是什么？
var list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);

// A ['1+2', '1*2', '1/2']
// B ['12', 2, 0.5]
// C [3, 2, 0.5]
// D [1, 1, 1]
```

答案为`C`。

## 2020-08-24（4）

```js
// 1.下列代码输出的结果是什么？
console.log(123.toString());
// 答案是：123
// 这里应该是把 123. 当成 123.0 进行字符串化了

// 2.
false + 1 + "1" + null = ?

// 3.
null + "1" + false + 1 = ?
// 上面两题的答案分别是："11null" 和 "null1false1"
// 隐式转换：false + 1 = 0 + 1 = 1，这里加号是运算符，后面加了一个字符串，就变成字符串连接符了，
// 字符串连接符会把其它类型的值转换为字符串后再拼接。
```

第4题独占一个代码块，在这里浏览器大法不好使了😂 。。。

这个是`node.js`，我来学习一下。。

```js
// 4.
console.log("1");

setTimeOut(function () {
    console.log("2");
    process.nextTick(function () {
        console.log("3");
    })
    
    new Promise(function (resolve) {
        console.log("4");
        resolve();
    }).then(function () {
        console.log("5");
    })
})

process.nextTick(function () {
    console.log("6");
})

new Promise(function (resolve) {
    console.log("7");
    resolve();
}).then(function () {
    console.log("8");
})

setTimeout(function () {
    console.log("9");
    process.nextTick(function () {
        console.log("10");
    })
    
    new Promise(function (resolve) {
        console.log("11");
        resolve();
    }).then(function () {
        console.log("12");
    })
})
```

## 2020-08-25（1）

```js
// 下列代码输出的结果是什么？
var num = 3;
console.log(num.toString(2));
console.log(num.toFixed(2));
// 答案是："11" 和 3.00
// toString(2)是将其转换为二进制，toFixed(2)是保留两位小数
```

::: danger 注意

`toString(2)`转换后的产物是**字符串**。

:::

🍗 不断更新...

