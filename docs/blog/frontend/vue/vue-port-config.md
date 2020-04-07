---
title: 开发环境中修改端口号
date: 2019-08-15 00:00:00
tags: Vue.js
---

# 开发环境中修改端口号
![描述](/images/frontend/vue/vue-port-01.png)
>如上图所示，在开发环境中，**8080**便是端口号，这也是使用Vue脚手架创建的项目运行时的默认的端口。

## 1.Vue 2.x
> **config文件夹**中有一个``index.js``其中部分内容如下，``port``即为端口号，在这里更改即可。

```js
module.exports = {
    dev: {
        env: require('./dev.env'),
        port: 8080,    // 端口号
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false,
      }
};
```

## 2.Vue 3.x
> Vue 3.x中修改端口号则需要在项目根目录下创建一个``vue.config.js``，内容如下。

```js
module.exports = {
    devServer: {
        port: 8080,     // 端口号
    }
};
```
## 3.起因
![描述](/images/frontend/vue/vue-port-02.png)
```
Access to XMLHttpRequest at 'http://localhost:8080/sockjs-node/info?t=1565711501046' from origin 'http://192.168.0.104:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

localhost:8080/sockjs-node/info?t=1565711501046:1 Failed to load resource: net::ERR_FAILED
```

> 今天我调试练手的项目时发现报了这么个错误，当时百度了好久不得解决要领，后来想起来自己开了两个项目，一个是**Vue2.x**，另一个是**Vue3.x**，看来一下两个的端口号都是8080，冲突了。**至于为什么同一个端口号能运行两个项目，是因为Vue3.0运行时会产生两个项目地址（如下图），我点了后一个......**
![描述](/images/frontend/vue/vue-port-03.png)