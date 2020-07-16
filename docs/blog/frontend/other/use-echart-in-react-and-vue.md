---
title: 在React和Vue中使用ECharts
date: 2020/07/13 00:00:00
tags: ["数据可视化", "ECharts", "React", "Vue"]
---

# 在React和Vue中使用ECharts

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 本文记录在`React`和`Vue`中使用`ECharts`的配置要点。

## 一、在`React`中使用`ECharts`

### 要点

* `React.createRef()`：使用此方法创建`ref`，并赋值给一个**变量**，作为属性放到`Render()`里面的一个节点中。

  可以通过这个**变量的`current`属性可以获取到这个节点的`DOM`实例**。

  ```js{9,16}
  // 伪代码 完整版在下面
  this.staticChart_dom = React.createRef();

  ...

  render() {
    return (
      <div className="chart-view">
        <div className="my-style" ref={this.staticChart_dom}></div>
      </div>
    );
  }

  ...

  this.staticChart = echarts.init(this.staticChart_dom.current);// this.staticChart_dom.current
  ```

* `onresize()`：监听页面缩放变化，`resize`每个图表，做到自适应。

  ```js
  // 伪代码 完整版在下面
  onresize () {
    this.staticChart.resize();
  }

  ...

  // 组件第一次渲染后调用 组件已经挂载至DOM
  componentDidMount() {
    window.addEventListener("resize", this.onresize);// 组件挂载后添加监听
  }

  // 组件销毁时调用
  componentWillUnmount() {
    window.removeEventListener("resize", this.onresize);// 组件销毁前删除监听
  }
  ```

* `componentDidMount()`：在生命周期函数`componentDidMount`执行时，该组件已经挂载至`DOM`，**此时**也可以用`document.getElementById('my-chart')`来获取`DOM`实例。

### 完整版代码

**直接查看完整版代码**👇。

::: details 展开查看完整代码

> 省略部分不必要内容。。

```jsx{45}
import React from "react";
import echarts from "echarts";
// import "echarts/lib/chart/bar";// 按需引入 柱状图
// import "echarts/lib/component/grid";// 按需引入 grid组件
import { getStaticChartData } from "./api.jsx";


class ChartView extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      StaticChartData: null,
    };

    this.staticChart_dom = React.createRef();
    this.staticChart = null;
  }

  onresize () {
    this.staticChart.resize();
  }

  // 获取数据
  async getStaticChartData () {
    getStaticChartData().then(res => {
      this.setState({ StaticChartData: res }, () => {
        this.set_staticChart();
      });
    });
  }

  // 组件第一次渲染后调用 组件已经挂载至DOM
  componentDidMount() {
    window.addEventListener("resize", this.onresize);
    this.getStaticChartData();
  }

  // 组件销毁时调用
  componentWillUnmount() {
    window.removeEventListener("resize", this.onresize);
  }

  render () {
    return (
      <div className="chart-view">
        <div className="my-style" ref={this.staticChart_dom}></div>
      </div>
    );
  }

  set_staticChart () {
    if (!this.staticChart) {
      this.staticChart = echarts.init(this.staticChart_dom.current);
    }

    this.staticChart.setOption(this.staticChartOption(this.state.StaticChartData), true);
    this.staticChart.resize();
  }

  staticChartOption (datas) {
    return {
      // echarts 配置项
      title: {...},
      ...
    }
  }

export { ChartView };

```

:::

## 二、在`Vue`中使用`ECharts`

### 要点

* 获取`DOM`实例两种方式：

  ```js
  // 通过ID 在生命周期函数mounted()执行时，组件已经挂载到DOM节点
  <div id="my-chart"></div>
  let myChart = echarts.init(document.getElementById('my-chart'));

  // 通过 this.$refs $refs是所有注册过ref的一个集合
  <div ref="myChart"></div>
  let myChart = echarts.init(this.$refs.myChart);
  ```

* 引入`ECharts`：

  * **局部引入**：如果只想在部分页面中使用`ECharts`，可以在组件中引入`import echarts from "echarts"`；

  * **全局引入**：觉得每个组件都要引入太麻烦可以使用**全局引入**。在各组件中写成`this.$echarts`就可以了。

    ```js
    // main.js
    import echarts from "echarts";

    Vue.prototype.$echarts = echarts;
    ```

  * **按需引入**：若项目大小有限制，可以**按需引入来减小打包时的大小**。

    ```js
    // main.js
    const echarts = require("echarts/lib/echarts");
    require("echarts/lib/chart/line");
    require("echarts/lib/component/grid");

    Vue.prototype.$echarts = echarts;
    ```

### 完整版代码

::: details 展开查看完整版代码

```vue
<!-- ChartView.vue -->
<template>
	<div id="my-chart" ref="myChart"></div>
</template>

<script>
  import echarts from "echarts";

  export default {
    name: 'ChartView',
    data () {
      return {
      	myChart: null
      }
    },
    mounted(){
      this.set_staticChart();
    },
    methods: {
      set_staticChart() {
          this.myChart = echarts.init(document.getElementById('my-chart'));// 初始化 两种获取DOM实例方式
          // this.myChart = echarts.init(this.$refs.myChart);

          myChart.setOption({...});
      }
    }
  }
</script>

```

:::

## 三、参考资料

* [React 组件生命周期 - 菜鸟教程](https://www.runoob.com/react/react-component-life-cycle.html)

