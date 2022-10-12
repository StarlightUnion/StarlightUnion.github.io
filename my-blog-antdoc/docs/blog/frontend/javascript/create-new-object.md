---
title: 【JavaScript进阶】创建对象的方法
date: 2021/02/26 21:10:00
tags: ["JavaScript进阶", "Object"]
---

# 【JavaScript进阶】创建对象的方法

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 对象是`JavaScript`的基本类型之一，本文记录创建对象的多种方法。

## 一、字面量标记

最简单的莫过于下面这种写法，使用**字面量标记**（或者说初始化标记）初始化对象，**初始化对象**由花括号/大括号 (`{}`) 包含的**一个由零个或多个对象属性名和其关联值组成的一个逗号分隔的列表**构成。

```js
let o = {};

o.name = "object";
o.log = function() {
  console.log(o.name);
}

// 或者
const o = {
  name: "object",
  log: function() {
    console.log(this.name);
  }
}
```

![create-new-object-02](/images/frontend/js/create-new-object-02.png)

这种方法纯属一次性使用，但是它的优点在于使用`键：值`对这种形式快速创建对象。

## 二、`new Object()`

这是使用`new`关键字新建一个对象。

```js
const o = new Object();

o.name = "object";
o.log = function() {
  console.log(o.name);
}

// 或者
const o = new Object({
  name: "object",
  log: function() {
    console.log(this.name);
  }
})
```

该方法与第一种并无本质上的区别，其实也是一次性使用。

## 三、工厂函数

可以使用**工厂函数**生成一个对象。

```js
function CreateObject(name, value) {
  this.name = name;
  this.value = value;
  this.log = function() {
    console.log(this.name);
  }
}

let o = new CreateObject("object", 1);
```

![create-new-object-01](/images/frontend/js/create-new-object-01.png)

与上文的使用**字面量标记**相比可以发现，使用工厂函数生成的对象的原型中多了一层`CreateObject`，最后的原型指向是相同的，毕竟在JS中，**几乎所有的对象都会从`Object.prototype`继承属性和方法**。

这种方式的好处是只要在`CreateObject`中传入不同的参数，就可以得到包含传入参数的拥有两个属性和一个方法的对象。

## 四、`Object.create()`

> 语法：`Object.create(proto, [propertiesObject])`。

```js
const o = {
  name: "object",
  value: 0,
  log: function() {
    console.log(this.name);
  }
}

const _o = Object.create(o); // {}
_o.name = "";// {name: ""} 不会修改__proto__里面的name值
_o.log();// "" this指向{name: ""}
```

* 使用`Object.create(o)`将会创建一个空对象，传入的第一个参数将作为新对象的`__proto__`。

  ![create-new-object-04](/images/frontend/js/create-new-object-04.png)

  ![create-new-object-05](/images/frontend/js/create-new-object-05.png)

* 如果我们使用`Object.create(null)`，**那么会得到一个没有原型（即`__proto__`）的对象**！！！

  ![create-new-object-03](/images/frontend/js/create-new-object-03.png)

* 可以传入第二个参数，该参数将被添加到新创建的对象中，作为**新对象本身的属性**。

  ![create-new-object-06](/images/frontend/js/create-new-object-06.png)

## 五、参考资料

* *1.[Object.create() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)*

