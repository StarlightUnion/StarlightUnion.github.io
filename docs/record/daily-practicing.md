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

### 1.push()

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

### 2.作用域

```js
  var myObject = {
    foo: "bar",
    func: function () {
      var self = this;
      console.log("outer func: this.foo = " + this.foo);
      console.log("outer func: self.foo = " + self.foo);

      (function () {
        console.log("inner func: this.foo = " + this.foo);
        console.log("inner func: self.foo = " + self.foo);
      }());
    }
  };

  myObject.func();
```



🍗 不断更新...

