---
title: 在React中引入antd的两种方法
date: 2020/08/22 00:00:00
tags: ["React.js", "antd"]
---

# 在React中引入antd的两种方法

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> `antd`不推荐使用已构建的文件引入，这样做不利于底层依赖模块bug的快速修复。--`antd`文档

## 一、直接引入

有区别与**按需引入**，直接引入`antd`需要在入口的js文件，如`index.js/index.jsx`等，

入口的js文件就是挂载到根节点的那个：

```jsx {3,4}
// index.js

import 'antd/dist/antd.css'
// or 'antd/dist/antd.less'
import App from "./app"

...

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

这样做的好处是，后面挂载到根节点上的组件都可以直接写引入某个UI组件，如：

```jsx
// App.jsx
import React from 'react';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}

export default App;
```

## 二、按需引入

直接引入相当于把`antd`所有的组件包括样式文件引入了，打包时的依赖包体积也会大上不少，会影响加载速度。

按需引入可以**只引入用到的UI组件和对应的样式文件**，这样可以**减少打包后的项目的依赖包的大小**，从而**优化首屏加载速度**，**提升用户体验**。

### 1.手动按需引入

```jsx
import Button from "antd/es/button";
import "antd/es/button/style/css";
```

需要**手动引入UI组件和对应的组件的样式文件**。

那么能不能引入UI组件的时候自动引入样式呢？这样还能少写一行？🤔 请看下一节。。

### 2.自动按需引入（需要插件）

#### 首先安装`babel-plugin-import`插件

```shell
npm install babel-plugin-import --save -D #安装
```

#### 然后修改`package.json`配置

`package.json`中添加如下高亮部分的配置内容。

```json{6,7,8,9,10,11,12,13,14,15}
...
"babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css"
      }
    ]
  ]
},
"devDependencies": {
  "babel-plugin-import": "^1.13.0"
}
...
```

#### 最后重新`npm start`

此时，组件中只要引入UI组件即可实现自动引入样式。

`import { button } from "antd"`即可。