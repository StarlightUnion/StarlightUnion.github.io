---
title: 【JavaScript进阶】Switch/Case和块级作用域
date: 2021/03/30 22:31:00
tags: ["JavaScript进阶", "作用域"]
---

# 【JavaScript进阶】Switch/Case和块级作用域

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 一、先看代码

* 1.![switch-case-01](/images/frontend/js/switch-case-01.png)

  执行这段代码的话就会报错：

  `Uncaught SyntaxError: Identifier 'b' has already been declared`

  意为`b`已经被声明过了，无法重复声明。

* 2.**解决问题的话也简单**，使用`var`代替`const`就好了。

  ![switch-case-03](/images/frontend/js/switch-case-03.png)

* 3.但是如果不想用`var`呢？可以这样：👇

  ![switch-case-02](/images/frontend/js/switch-case-02.png)

可以看出，`const`关键字只在代码块`{}`内部有效，这个代码块就是一个**块级作用域**，而`var`关键字声明的变量在这里由于**变量提升**，它在这里定义的**其实是一个全局变量**，代码等同于：

```js {1,6,12}
var b;
let a = 1;

switch (a) {
  case 1:
    b = a;
    console.log(b);

    break;

  case 2:
    b = a;
    console.log(b);

    break;
}
```

## 二、块级作用域

在ES6之前，JavaScript中只有**全局作用域**和**函数作用域**。ES6的新特性中引入了`let`和`const`关键字，以及**块级作用域**。

先看`let`和`const`：👇

* 使用`let`和`const`声明的变量**不会成为全局变量**；

* 它们声明的变量**在同一作用域中不能被二次声明**；

  ```js
  {
    let a = 1;
    const b = "b";

    let a = 2;// 错误，不能重复声明
    const b = "c";// 错误，不能重复声明和赋值
  }
  ```

* 它们声明的变量**只能在当前块级作用域中访问**，不能**跨块访问**；

  ```js
  {
    let a = 1;
  }
  console.log(a);// undefined
  ```

* 使用`const`声明的变量**不能被修改**，即**常量**，并且**声明时必须赋值**。

  （*其实对象内部的属性值还有数组内部的值是可以修改的，但对象不能增删属性*）

接着看**块级作用域**：

* 一个`{}`就是一个块级作用域；

* `if`语句和`for`语句中的`{}`也属于块级作用域；

* 块级作用域可以一直嵌套；

* 块级作用域**没有返回值**；

* **外部作用域无法获取/操作内部作用域的变量**；

  ```js
  {
    {
      let a = 1;
    }
    console.log(a);// undefined
  }
  ```

* **内部作用域可以获取/操作外部作用域的变量**；

  ```js
  {
    let a = 1;
    {
      a = 2;
      console.log(a);// 2
    }
  }
  ```

* **内部作用域可以定义外部作用域同名变量**；

  ```js
  {
    let a = 1;
    {
      let a = 2;
    }
  }
  ```

* 块级作用域内部可以声明函数，但在严格模式下，必须要有`{}`存在；

  ```js
  // 错误
  'use strict';
  if (true) function fn(){}
  // Uncaught SyntaxError: In strict mode code, functions can only be declared at top level or inside a block.

  // 正确
  'use strict';
  if (true) {
    function fn() {}
  }
  ```



