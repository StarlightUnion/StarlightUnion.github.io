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

<iframe
  height=400
  width=100%
  src="https://echarts.apache.org/examples/zh/editor.html?c=mix-line-bar"
  frameborder=0
  allowfullscreen
>
</iframe>

存在多条纵轴时要用`yAxisIndex`来**标识当前的数据对应哪条轴**，**默认为0**，就是左边这条纵轴。

![echart-config-01](/images/frontend/other/echart-config-01.png)

`yAxisIndex`不能乱标，否则会报下面的错误。

![echart-config-02](/images/frontend/other/echart-config-02.png)

## 2.`grid`网格位置和`dataZoom`数据区域

> `grid`配置文档[ECharts-option-grid](https://echarts.apache.org/zh/option.html#grid)。

```js
const option = {
  ...
  // 网格位置 配置项文档：
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

## 3.导出图表为图片

```js
const myChart = echarts.init(document.getElementById('my-chart'));

const imageURL = myChart.getDataURL({// 获取base64数据
  type: 'png',
  pixelRatio: 2// 像素比
});

const link = document.createElement('a');
link.href = imageURL;
link.download = '统计图';
link.click();
```

## 4.设置大标题居中

> `title`配置文档[ECharts-option-title](https://echarts.apache.org/zh/option.html#title)。

```js {12}
const option = {
  ...
  title: {
    text: 'xxxx统计图',
    textStyle: {
      color: '#000',// 字体颜色
      fontWeight: 700,// 字体粗细
      fontSize: 18,// 字体大小
      align: 'center',// 居中
      lineHeight: 20// 行高
    },
    left: 'center'
  },
  ...
}
```

## 5.`setOption()`

> `chart.setOption(option, notMergen, lazyUpdate)`。
>
> 官方文档：[ECharts-setOption](https://echarts.apache.org/zh/api.html#echartsInstance.setOption)

::: warning

为了**去数据串联**，最好还是将`notMergen`设为`true`。

这样每次更新`option`的时候都不会与之前的合并。

:::

![echart-config-03](/images/frontend/other/echart-config-03.png)

![echart-config-04](/images/frontend/other/echart-config-04.png)

## 6.横向柱状图（数据顺序从上到下）

![echart-config-05](/images/frontend/other/echart-config-05.png)

```js {6,12,18}
const option = {
  ...
  yAxis: {
    type: "category",
    data: yAxisData,// y轴坐标
    inverse: true// 倒序
  },
  series: [{
    name: "xxx",
    type: "bar",// 柱状图
    data: datas,
    barWidth: 14,// 柱状图📊的宽度
    itemStyle: {
      normal: {
        color: "#000",
        label: {
          show: true,
          // 在柱状图柱子顶部显示数值 如果是纵向柱状图，position为top
          position: "right"
        }
      }
    }
  }]
  ...
}
```

## 7.`dataZoom`锁定

> 有时候数据太多，而容器的大小有限，而此时数据又太多。所以可以锁定🔒`dataZoom`滑块的长度，**不让用户自由拖动改变其长度**。

```js {9}
const option = {
  ...
  dataZoom:[{
    type: "slider",// 类型 “slider”
    show : true,
    orient: "vertical",// 设置dataZoom的摆放方式
    start: 0,// 设定滑块的起始位置
    end: 20,// 设定滑块终止位置 其实就是设置滑块的长度
    zoomLock: false// 锁定
  }],
  ...
}
```

## 8.图例显示更多信息

`ECharts`的图表的图例默认**只显示颜色和对应的数据的名称**，现实业务中需要的不仅仅是这些，可能还要显示数值、占比等信息。

![echart-config-06](/images/frontend/other/echart-config-06.png)

```js
const option = {
  ...
  legend: {
    orient: "vertical",// 图例类型 -> 垂直
    right: "20%",// 图例位置
    top: "40%",
    data: legendData,
    formatter: function (name, count = null) {
      datas.some(item => {// 遍历datas获取数值
        if (item.name === name) {
          count = item.value;
          return true;
        }
      });

      return `${name}：${count}个`;// 使用字符串模板组装要显示的内容
    }
  },
  ...
}
```

<iframe
  height=400
  width=100%
  src="https://echarts.apache.org/examples/zh/editor.html?c=pie-doughnut"
  frameborder=0
  allowfullscreen
>
</iframe>

🍗 有待补充...

