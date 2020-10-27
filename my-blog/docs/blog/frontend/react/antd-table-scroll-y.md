---
title: antd Table组件滚动高度自适应问题
date: 2020/09/13 22:19:00
tags: ["antd", "React.js"]
---

# antd Table组件滚动高度自适应问题

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> **`antd`版本信息**：*4.6.2*。

::: warning 问题描述

实际使用中发现`antd`的`Table`组件宽度是自适应的，但是高度并不是自适应的，这就造成了一个问题，**如果表格容器高度发生变化，而表格的高度并不会发生变化**。

:::

![antd-table-scroll-01](/images/frontend/react/antd-table-scroll-01.png)

[表格的滚动高度是由API中的`scroll`里的`y`属性来控制](https://ant.design/components/table-cn/#scroll)，文档中的该值是一个数值。

那么想要解决表格高度的自适应问题，只要让`scroll`里的`y`属性值随表格容器的变化而变化就可以了。

****

**解决思路**：(这里默认表格容器是自适应的，随浏览器窗口变化而变化)

`给表格容器添加ref` -> `监听浏览器窗口resize事件` -> `通过ref获取表格容器DOM` -> `将表格容器的高度结果计算后传递给Table组件API中的scroll里的y属性`。

::: details 展开查看源码
```jsx
class TestInfoView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableScrollHeight: 0,
      headerHeight: 0,// 表头高度，根据实际设置
      columns: [],
      datas: []
    };

    this.tableContainer_dom = React.createRef();
  }

  // 计算table滚动高度
  tableScrollHeightCompute = () => {
    const height = this.tableContainer_dom.current.offsetHeight;
    const headerHeight = this.state.headerHeight;

    this.setState({
      tableScrollHeight: height - headerHeight// 减去表头高度
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.tableScrollHeightCompute();// 延后执行
    }, 0);
    window.addEventListener("resize", this.tableScrollHeightCompute);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.tableScrollHeightCompute);
  }

  render() {
    const { columns, datas, tableScrollHeight } = this.state;

    return (
      <div className="table-container" ref={this.tableContainer_dom}>
        <Table
          bordered={true}
          sticky={true}
          scroll={{y: tableScrollHeight}}
          pagination={false}
          columns={columns}
          dataSource={datas}
        />
      </div>
    );
  }
}
```


:::
