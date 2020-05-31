---
title: 自动生成文件目录树总结
date: 2020/04/27 00:00:00
tags: ["杂记", "Tree"]
---

# 自动生成文件目录树总结

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 在看网络上的不管是文档也好，还是各位大佬的博客也好，会发现里面经常会出现**文件目录结构的树状示意图**。比如下面这个[vuepress的目录结构示意](https://www.vuepress.cn/guide/directory-structure.html)，这个肯定装了其他插件。那么怎么**自动**生成一个朴实无华，并且极致简洁~~😂~~的这种示意结构？

![tree-content-01](/images/other/tree-content-01.png)

## 一、windows

`windows`不需要安装说什么插件，可以直接通过命令行生成，`cmd`和`powershell`都可以使用。

```shell
tree # 在命令行中生成目录树，只有当前目录中的文件，不包括子文件
tree /F # 生成该目录下所有文件和子文件的目录树

tree > tree.txt # 将生成的目录树保存到tree.txt 下同
tree /F > tree.txt
```

![tree-content-02](/images/other/tree-content-02.png)

![tree-content-03](/images/other/tree-content-03.png)

## 二、macOS

需要安装一个插件，在**终端**中输入`brew install tree`，此操作需要安装`HomeBrew`，可[参考此文](/blog/others/devtool/homebrew)。

接下来就可以使用命令了，命令和上面的差不多。

```shell
tree # 在终端中显示目录树
tree -d # 显示该目录下所有子文件夹的目录树
tree > tree.txt # 将生成的目录树保存到tree.txt
```

![tree-content-04](/images/other/tree-content-04.png)

