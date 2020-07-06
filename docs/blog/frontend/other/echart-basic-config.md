---
title: ECharts常用配置整理
date: 2019/06/28 00:00:00
tags: ["数据可视化", "ECharts"]
---

# EChart常用配置整理

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> `ECharts`是一款功能强大的**数据可视化**JavaScript库，基于HTML5 Canvas。可以提供种类丰富、交互功能强大、数据视图直观的图表。
>
> 本文整理了`ECharts`的常用配置，**不断更新**！📝

**参考资料：**

* [ECharts Documentation](https://echarts.apache.org/zh/api.html#echarts)

## 1.存在多条纵轴

> `ECharts`**曲线-柱状混合图**官方实例[ECharts-Mixed Line and Bar](https://echarts.apache.org/examples/zh/editor.html?c=mix-line-bar)

<iframe  height=400 width=100%
src="https://echarts.apache.org/examples/zh/editor.html?c=mix-line-bar"
frameborder=0
allowfullscreen>
</iframe>

存在多条纵轴时要用`yAxisIndex`来**标识当前的数据对应哪条轴**，**默认为0**，就是左边这条纵轴。

![echart-config-01](/images/frontend/other/echart-config-01.png)

`yAxisIndex`不能乱标，否则会报下面的错误。

![echart-config-02](/images/frontend/other/echart-config-02.png)

## 2.图表的网格位置和`dataZoom`数据区域

```js
const option = {
  ...
  // 网格位置 配置项文档：https://echarts.apache.org/zh/option.html#grid
  grid: {
    top: '10%',
    bottom: '10%'
    left: '5%',
    right: '5%',
  },
  // 数据区域
  dataZoom: [{
	  show: true
  }],
  ...
}
```



🍗 有待补充...