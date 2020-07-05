---
title: ArcGIS 4.x与3.x的常用API的区别
date: 2020/06/09 00:00:00
tags: ["GIS", "ArcGIS"]
---

# ArcGIS 4.x与3.x的常用API的区别

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> **版本信息：ArcGIS API for JS 4.x**
>
> `4.x`和`3.x`的版本相比有了不小的变化，很多**API**的写法发生了变化，此文**记录常用API的写法和用法区别。**
>
> **不断整理更新**！📝

**参考资料：**

* [API Reference | ArcGIS API for JavaScript 4.15](https://developers.arcgis.com/javascript/latest/api-reference/)

## 1.获取图层

```js
// 3.x
map.getLayer("layerId")

// 4.x
map.findLayerById("layerId")
```

## 2.移除图层

```js
// 3.x
map.removeLayer(map.getLayer("layerId"))

// 4.x
map.remove(map.findLayerById("layerId"))
```

## 3.添加图层

`symbol`样式可以在官方文档的`esri/symbols`中找到实例以及教程。👇

构造一个`geometry(point)`对象在[第4部分](#_4-获取地图中心点和比例尺)可以找到。

  ```js
  // 3.x
  require([
      'esri/layers/GraphicsLayer'
  ], function (GraphicsLayer) {
      const newLayer = new GraphicsLayer({id: "newLayer"});// 图层id
  	map.addLayer(newLayer);
  })
  
  // 4.x
  require([
      'esri/Graphic'
  ], function (Graphic) {
      const GeometryObject = {
          geometry: geometry,// geometry(point)对象
          symbol: symbol// symbol样式，可以是线、图片等
      }
      
      const layer = new Graphic(GeometryObject);
      map.add(layer);
  })
  ```

## 4.获取地图中心点和比例尺

> `3.x`版本用法请查[ArcGIS 3.x常用方法整理](/blog/frontend/gis/arcgis-api-for-js.html)。

```js
  require([
      'esri/Map',
      'esri/views/MapView',
      "esri/geometry/Point"
  ], function (Map, MapView, Point) {
      const map = new Map({});
      const mapView = new MapView({
          container: 'map',
          map: map
      });
      
      ...
      
      const centerPoint = new Point({// 构造一个geometry(point)对象
          x: xValue,
          y: yValue,
          spatialReference: mapView.spatialReference
      });
      
      mapView.scale = 10000;// 设置比例尺
      mapView.center = centerPoint;// 设置中心点
      
      ...
      
      // 获取比例尺和中心点 直接从mpView拿就好了
      console.log(mapView.scale);
      console.log(mapView.center);
  })
```



🍗 有待补充...
