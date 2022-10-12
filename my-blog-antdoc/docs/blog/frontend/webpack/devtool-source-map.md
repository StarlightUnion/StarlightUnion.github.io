---
title: 【Webpack入门】devtool配置项和source map
date: 2020/12/24 20:18:00
tags: ["Webpack入门", "Webpack"]
---

# 【Webpack入门】devtool配置项和source map

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 一、原理

### 1.`devtool`

`webpack.config.js`中通常有一个选项`devtool`，该选项和`source map`相关，**控制是否生成，以及如何生成`source map`**。

### 2.什么是`source map`

`source map`是一种**代码映射技术**。我们在项目中使用的各种框架以及插件**大部分都是处理过的**，目的是：👇

* 1.减小代码体积，降低网页加载时请求文件的时间开销；
* 2.合并小文件，减小请求次数；
* 3.将其它语言（如TS）编译成JS，使其能在浏览器上使用。

**处理**之后的代码不便于DEBUG和调试，因为它们的位置已经改变了，如果是**编译过的话连结构也会发生变化**。`source map`保存了源码在处理前后的相互对应的位置信息。**有错误的时候，浏览器可以根据`source map`快速找到对应的源码上的位置**。

### 3.`source map`的主要结构：

* `version`： `source map`的版本，目前为3；
* `file`： 转换后的文件名；
* `sourceRoot`： 转换前的文件所在的目录。如果与转换前的文件在同一目录，该项为空；
* `sources`： 转换前的文件。该项是一个数组，表示可能存在多个文件合并；
* `names`：转换前的所有变量名和属性名；
* `mappings`：记录位置信息的字符串。

想要了解更多`source map`可以前往[参考资料[2]](#三、参考资料)。

### 4.`source map`位置

`source map`可以是单独的`.map`文件（例如**下文实例**中的`built.js.map`），也可以放在代码最后一行的base64字符串，例如下面这种。👇

```js
/* built.js */
example code
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uI...
```

### 5.`source map`实例

`devtool: "source-map"`时的代码打包之前：

```js
// src/js/index.js 源文件地址
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
```

`Webpack`处理之后：

::: details 展开查看处理后代码以及它的source map

* `built.js`：

  ```js
  /******/ (function() { // webpackBootstrap
  /******/ 	var __webpack_modules__ = ({

  /***/ "./src/js/index.js":
  /*!*************************!*\
    !*** ./src/js/index.js ***!
    \*************************/
  /***/ (function() {

  function add(a, b) {
    return a + b;
  }

  console.log(add(1, 2));

  /***/ })

  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		if(__webpack_module_cache__[moduleId]) {
  /******/ 			return __webpack_module_cache__[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /************************************************************************/
  /******/ 	// startup
  /******/ 	// Load entry module
  /******/ 	__webpack_require__("./src/js/index.js");
  /******/ })()
  ;
  //# sourceMappingURL=built.js.map
  ```

* `built.js.map`：

  ```json
  {
     "version":3,
     "sources":[
  ​    "webpack:///./src/js/index.js",
  ​    "webpack:///webpack/bootstrap",
  ​    "webpack:///webpack/startup"
     ],
     "names":[],
     "mappings":";;;;;;;;;;AACA;AACA;AACA;;AAEA,uB;;;;;;;;;;ACLA;AACA;AACA;AACA,sB;;;;;;UCHA;UACA;;UAEA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;;UAEA;UACA;;UAEA;UACA;UACA;;;UCrBA;UACA;UACA;UACA;UACA",
     "file":"js/built.js",
     "sourcesContent":[
  ​     "\r\nfunction add(a, b) {\r\n return a + b;\r\n}\r\n\r\nconsole.log(add(1, 2));",
  ​     "// The module cache\nvar __webpack_module_cache__ = {};\n\n// The require function\nfunction __webpack_require__(moduleId) {\n\t// Check if module is in cache\n\tif(__webpack_module_cache__[moduleId]) {\n\t\treturn __webpack_module_cache__[moduleId].exports;\n\t}\n\t// Create a new module (and put it into the cache)\n\tvar module = __webpack_module_cache__[moduleId] = {\n\t\t// no module.id needed\n\t\t// no module.loaded needed\n\t\texports: {}\n\t};\n\n\t// Execute the module function\n\t__webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n\n\t// Return the exports of the module\n\treturn module.exports;\n}\n\n",
  ​     "// startup\n// Load entry module\n__webpack_require__(\"./src/js/index.js\");\n// This entry module is referenced by other modules so it can't be inlined\n__webpack_require__(\"./src/index.html\");\n"
     ],
     "sourceRoot":""
   }
  ```


:::

## 二、配置要点



🚧 施工中...

## 三、参考资料

* *1.[Devtool | webpack](https://webpack.docschina.org/configuration/devtool/)*
* *2.[JavaScript Source Map 详解 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)*

