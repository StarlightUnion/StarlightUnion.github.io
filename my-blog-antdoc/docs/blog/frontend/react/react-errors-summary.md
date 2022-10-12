---
title: React开发过程中遇到的错误和问题集合
date: 2020/07/13 00:00:00
tags: ["React"]
---

# React开发过程中遇到的错误和问题集合

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

## 1.`findDOMNode is deprecated in StrictMode`

引入`antd`组件报错：`findDOMNode is deprecated in StrictMode...`

研究~~百度~~一番发现是`<React.StrictMode>`的问题，去掉就好了。。

![react-errors-01](/images/frontend/react/react-errors-01.png)

![react-errors-02](/images/frontend/react/react-errors-02.png)

## 2.`Error: Cannot find module 'resolve'`

错误 ❌ 具体信息：

```
internal/modules/cjs/loader.js:985
	throw err;
	^

Error: Cannot find module 'resolve'
....
```

![react-errors-03](/images/frontend/react/react-errors-03.png)

这个需要删除`node_modules`重新安装，原因似乎是我安装依赖时一部分使用了`npm`安装，还有一部分用了`cnpm`？

## 3.获取项目配置信息`npm run eject`

> `React`的配置是隐藏的，想要更改配置，需要使用`npm run eject`来获取配置，然后修改。

::: danger 注意

⚠️ 需要注意的是该命令执行时可能会出错，那是因为原文件内容已经被修改，想要解决错误需要清除文件的`git`修改状态。可以`git add .` -> `git commit -m "commit"` -> `npm run eject`，如果关联到`git`的话可以直接提交后再执行。

:::

![react-errors-04](/images/frontend/react/react-errors-04.png)

![react-errors-05](/images/frontend/react/react-errors-05.png)

红圈内就是获取的项目配置文件。

> 详细请出门右转[npm run eject获取React配置](/blog/frontend/react/npm-run-eject.html)

## 4.引用`src`外的静态资源

默认状态下不支持引用`src`以外的静态资源，比如我引用了一张存放在与`src`同级的`assets`目录下的图片，报了以下错误：

```
Cannot find module '../../assets/logo128.png'

...

Module not found: You attempted to import ../../assets/logo128.png which falls outside of the project src/ directory.Relatives imports outside of src/ are not supported.
```

要修改的话需要在`consig/webpack.config.js`里面找到`ModuleScopePlugin`。

注释掉之后重新启动`dev server`。

![react-errors-07](/images/frontend/react/react-errors-07.png)

![react-errors-08](/images/frontend/react/react-errors-08.png)

## 5.解决在`componentDidMount`中无法正确获取DOM

最初是因为在实例化一个`echart`图表中发现的问题。

在搭页面的过程中，还没做交互的时候，发现**图表往往不能占满整个父元素的空间**，`resize`图表之后恢复正常。

```jsx {10}
// demo.jsx
class Demo extends React.Component {
    constructor(props) {
        super(props);
        // dom实例
        this.demo_dom = React.createRef();
    }

    componentDidMount() {
        console.log(this.demo_dom.current.offsetHeight);

        //setTimeout(() => {
        //    console.log(this.demo_dom.current.offsetHeight);
        //}, 0);
    }

    render() {
        return (
            <div className="demo-container" ref={this.demo_dom}>
                {"Demo"}
            </div>
        )
    }
}
```

**解决办法**：在`componentDidMount`中写一个延时方法，把实例化的内容写在延时方法中延后执行。这里我使用`setTimeout`延后执行。👇

```jsx {3,6}
...
componentDidMount() {
    console.log(this.demo_dom.current.offsetHeight);

    setTimeout(() => {
        console.log(this.demo_dom.current.offsetHeight);
    }, 0);
}
...
```

**出现问题的原因**：项目用了`less`作为CSS的预处理器。大型的项目中，`less`要通过`less-loader`转换为CSS，才能在浏览器中运行，处理需要时间，会导致样式加载延后。

不只有`less`，`sass`、`stylus`等也会这样。

## 6.`React Hooks`中使用定时器

在函数组件中使用定时器需要借助`useRef`实现。

```js
function Example() {
  const timer = useRef(); // 创建实例对象

  const setTimer = useCallback(() => {// 设置定时器
    timer.current = setInterval(() => {
      // do something
    }, 6000);
  }, []);

  useEffect(() => {
    setTimer();

    return () => {// 组件卸载时清除定时器
      clearInterval(timer.current);
    };
  }, [setTimer]);
}
```

## 7.开发环境下图片地址不能正确访问

给`<img>`标签的`src`属性添加的地址并不能正确访问到。

![react-errors-10](/images/frontend/react/react-errors-10.png)

![react-errors-11](/images/frontend/react/react-errors-11.png)

需要使用`require`对图片地址进行处理。

![react-errors-09](/images/frontend/react/react-errors-09.png)

## 8.`onClick`事件在页面渲染时就执行

使用：

`onClick={ () => handleSomething() }`

代替：

`onClick={ handleSomething }`

<br/>

<br/>

****

🍗 有待补充...

