---
title: 每日一练-某群交流实录
date: 2020/08/10 23:12:00
tags: ["记录", "交流实录"]
---

# 每日一练-某群交流实录

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 本文记录**某群**的每日一练内容。
>
> 好好学习，天天向上！😁

## 2020-08-07（3）

### 1.`push()`

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

### 2.作用域和`this`

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

### 3.运算类型转换

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

## 2020-08-10

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

🍗 不断更新...

