---
title: VS Code代码格式化插件的冲突问题
date: 2021/03/16 21:23:00
tags: ["杂记", "VS Code"]
---

# VS Code代码格式化插件的冲突问题

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

今天碰见个**神仙打架**的情况，情景还原如下：👇

::: warning 神仙打架

给项目成功配置了`ESLint`，并启动了`ESLint`服务之后，我摁`Ctrl + S`保存了一下某`.js`文件，由于配置了**保存时自动格式化**，`VS Code`就开始了神仙打架（**格式化规则冲突**）。

* `ESLint`规则不允许`.js`文件的最后一行为空行；
* **某格式化插件**：`.js`文件最后必须空出一行。

于是`VS Code`变上演**最后的空行一边被删除一边又恢复然后又删除又...**

光标一直上下来回跳...🤣

:::

鼠标左键选择**格式化文档的方式**：

![vscode-format-02](/images/other/devtool/vscode-format-02.png)

可以看到对当前文件格式化的插件：

![vscode-format-01](/images/other/devtool/vscode-format-01.png)

要命的是这些插件还是我当时入门的时候，按照在网上搜的教程装的插件🤣，虽然当时根本不知道有啥用哈哈哈。。

🙃 一怒之下**卸载**了两个插件，总算清爽了！

