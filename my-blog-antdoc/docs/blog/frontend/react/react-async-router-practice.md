---
title: React路由组件按需异步加载实践
date: 2020/11/11 00:00:00
tags: ["React.js", "Router"]
---

# React路由组件按需异步加载实践

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> *版本信息：当前使用`React`版本`16.13.1`。*

## 一、路由的配置

一般来说，我们在`React`中写路由的时候都是这样：👇

``` jsx {7}
// 多余代码省略...
import MainPage from "./pages/mainPage";

...
<Switch>
  ...
  <Route strict exact path="/mianpage" component={MainPage} />
  ...
</Switch>
...
```

但实际上这种写法**只适合简单且没几个页面的场景**。对于大型项目或者一款产品，**路由写死/固定**肯定不行（这样维护比较麻烦），它们的**路由肯定是动态的、可配置的**。

## 二、尝试配置动态路由

### 1.使用`() => import(componentPath)`

用过`Vue`的同学都知道，在`Vue-Router`中可以使用`component: () => import("./pages/mainPage")`来给路由添加组件。那么`React`中也是这样❓

``` jsx
// 多余代码省略...
<Switch>
  ...
  <Route
    strict
    exact
    path="/mianpage"
    component={() => import("./pages/mainPage")}
  />
  ...
</Switch>
```

### 2.结果报了一堆错误，尝试失败

![async-router-01](/images/frontend/react/async-router-01.png)

`Uncaught Error: Objects are not valid as a React child (found: [object Promise])...`

> 错误翻译过来就是返回的是`promise`对象。。

## 三、使用中间件异步加载组件

前一节中的错误是因为使用`import`返回的是一个`promise`对象，显然不能作为组件使用。

此时**需要一个中间件对其进行处理并返回一个组件**。

::: details 展开查看代码

``` jsx
// AsyncComponent.jsx
import React from "react";

// 将普通组件转换为动态组件
const AsyncComponent = (loadComponent, _props) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        Component: null
      };
    }

    componentDidMount() {
      if (this.state.Component !== null) return;

      loadComponent()
        .then(module => module.default)
        .then((component) => {
          this.setState({Component: component});
        })
        .catch((err) => {
          throw err;
        });
    }

    render() {
      const { Component } = this.state;
      return (Component) ? <Component {...this.props} {..._props} /> : null;
    }
  };
};

export default AsyncComponent;
```

:::

### 使用示例

``` jsx
// router 多余代码省略...
import { AsyncComponent } from "./utils/AsyncComponent";

<Switch>
  ...
  <Route
    strict
    exact
    path="/mianpage"
    component={AsyncComponent(() => import("./pages/mainPage"), {somePropsData})}
  />
  ...
</Switch>
```

## 四、参考资料

* [React 高级组件 import() 按需异步加载 asyncComponent](https://blog.csdn.net/weixin_41111068/article/details/86350299)

