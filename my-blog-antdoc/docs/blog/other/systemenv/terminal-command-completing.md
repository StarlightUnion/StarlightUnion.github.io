---
title: macOS终端开启命令/路径自动补全
date: 2020/09/28 00:00:00
tags: ["杂记", "macOS", "terminal"]
---

# macOS终端开启命令/路径自动补全

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> Windows命令行工具的按`tab`键自动补全**命令/路径很好用**，`macOS`上并不是默认开启该功能。
>
> 在此之前，菜鸡如我，一直都是老老实实的在mac上**全拼写输入**命令❓
>
> 后面**百度了一下**🤣 ，找到了一个教程。。。

* 1.打开终端，输入`nano .inputrc`；

* 2.进入如下界面👇

  ![terminal-command-completing-01](/images/other/systemenv/terminal-completing-01.png)

  输入：

  ```shell
  set completion-ignore-case on
  set show-all-if-ambiguous on
  TAB: menu-complete
  ```

* 3.完成之后组合键`control + o`保存，按回车，后重启终端即可。




