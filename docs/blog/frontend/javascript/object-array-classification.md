---
title: 将数组元素按某一属性值进行分类
date: 2020/04/08 00:00:00
tags: ["Javascript", "数据分类"]
---

# 将数组元素按某一属性值进行分类
<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 在日常工作中，前端需要对服务端获取的数据进行处理，之后并将其展示到页面中。但是往往**获取到的数据的结构**并不符合**要展示的数据的结构**，这就需要对数据进行处理了。。。

比如下面结构的**数组**，元素需要按`Name`属性值进行**分类归并**，将`Name`属性值相同的元素归到一起，并且将**该属性值**作为这一类别的`标识`：

```js
{
  Infos: [
      {Name: "资料", Value: 1},
      {Name: "测试", Value: 'ceshi'},
      {Name: "资料", Value: 2},
      {Name: "type", Value: 'type1'},
      {Name: "资料", Value: 3},
      {Name: "type", Value: ''},
  ],
  name: 'data',
  ......
}
```

**首先确定思路：**

* 创建一个新的数组`res`
* 遍历`Infos`中的元素，对于`Infos`中的每一个元素`item`，检查`res`中是否已存在`Name`属性值和`item`相同的元素
* 如果未存在，将`item`作为新的元素加入新数组中，并以**Name属性值**作为该**新元素的标识**
* 如果已存在，将`item`加入其中

不多说，上代码👇

```js
/**
 * @param { Object } data 传入的对象
 * @param { String } name 对象中需要进行分类的属性名
 * @param { String } key 对象
 * @return { Number [] } 分类后的数组
 */
const Classification = (data, name, key) => {
  const res = [];
  data[name].map(function (item) {
      const index = FindIndex(res, key, item[key]);
      if (index >= 0) {
          res[index].infos.push(item);
      } else {
          const obj = {};
          obj[key] = item[key];
          obj.infos = [item];
          res.push(obj);
      }
  });
  return res;
}
// 检查数组中是否已存在某个属性值的元素，如果有则返回其索引，没有返回-1
/**
* @param { Number [] } array 传入的数组
* @param { String } key 要检查的属性名
* @param { String } com 要检查的属性值
* @return { Number }
*/
const FindIndex = (array, key, com) => {
  let index = -1;
  array.map((item, _index) => {
      if (item[key] === com) {
          index = _index;
      }
  });
  return index;
}
```

**测试数据如下：**

```js
const data = {
  Infos: [
      {Name: "资料", Value: 1},
      {Name: "测试", Value: 'ceshi'},
      {Name: "资料", Value: 2},
      {Name: "type", Value: 'type1'},
      {Name: "资料", Value: 3},
      {Name: "type", Value: ''},
  ],
  name: 'data',
};
data._Infos = Classification(data, 'Infos', 'Name');
```

**测试结果：**

![](/images/frontend/js/js-classification.png)