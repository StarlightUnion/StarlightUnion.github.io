---
title: ArcGIS 3.x常用方法整理
date: 2019/12/20 00:00:00
tags: ["GIS", "ArcGIS"]
---

# ArcGIS 3.x常用方法整理

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> **版本信息：ArcGIS API for JS 3.x**
>
> 本文记录`3.x`版本**API**的一些常用方法，**不断整理更新**！📝

**参考资料：**

* [API Reference Overview | API Reference | ArcGIS API for JavaScript 3.32](https://developers.arcgis.com/javascript/3/jsapi/)

## 1.计算区域的中心点坐标

```js
/** 计算区域的中心点坐标
* @param geometry //geometry(polygon)
* @return point //geometry(point)
*/
geometry.getExtent().getCenter()
```

如果是`wktshape`需要先将其转换为`geometry(polygon)`对象，之后再使用该方法获取中心点。

## 2.构造一个`geometry(point)`对象

```js
require([
    'esri/geometry/Point',
    'esri/SpatialReference'
], function (Point, SpatialReference) {
    let point = new Point({
        x: xValue,// 横坐标
        y: yValue,// 纵坐标
        spatialReference: new SpatialReference({ wkid: wkid })// wkid
    });
})
```

## 3.操作图层

### 添加一个图片图层

```js
require([
    'esri/layers/GraphicsLayer'
], function (GraphicsLayer) {
    let newLayer = new GraphicsLayer({id: “newLayer”});// 图层id
	map.addLayer(newLayer);
})
```

上面的**伪代码**中的`map`是由`esri.Map`构造的一个**全局变量**。

```js
var map;

require([
    'esri/Map'
], function (Map) {
    map = new Map("map", {
        ...
    });
})
```

### 获取图层和清除图层

```js
let layer = map.getLayer(“layerName”);// 图层id
layer.clear();// 清除图层
```

## 4.移动地图中心点

```js
/**
* @param point //geometry(point)
*/
map.centerAt(point);
```

`point`构造方法参考[构造一个geometry(point)对象](#_2-构造一个geometry-point-对象)。

### 5.获取和设置比例尺

```js
/**
* @param {number} scale
*/
let scale = 10000;
map.setScale(scale);// 设置比例尺

map.getScale();//获取地图当前比例尺
```



🍗 有待补充...

