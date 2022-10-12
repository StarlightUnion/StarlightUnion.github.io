---
title: VS Code常用插件集合
date: 2020/12/26 21:07:02
tags: ["杂记", "VS Code"]
---

# VS Code常用插件集合

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 本文记录常用的`VS Code`插件。

### 1.`Atom One Dark Theme`

一款非常喜欢的**暗色**主题，与它相对应的是`Atom One Light Theme`**亮色**主题，它们的代码颜色主题一致。

### 2.`Auto Close Tag`

为`HTML/XML`标签提供自动添加**闭合标签**的功能。 => `</tag>`。

### 3.`Auto Rename Tag`

为`HTML/XML`标签提供修改一个标签名时，自动重命名与之配对的标签。

### 4.`Beautify`

![vscode-plugins-01](/images/other/devtool/vscode-plugins-01.png)

该插件可以用来格式化`JS`、`JSON`、`CSS`、`Sass`、`HTML`，使它们整齐美观。

::: tip

* `editor.formatOnSave`为`true`时保存文件更改时会**自动格式化代码**。可在**设置中修改**。

:::

### 5.`Better Comments`

![vscode-plugins-02](/images/other/devtool/vscode-plugins-02.png)

如上图所示，使注释变得花里胡哨。

### 6.`Bracket Pair Colorizer`

![vscode-plugins-03](/images/other/devtool/vscode-plugins-03.png)

这是一个个人非常喜欢的插件，可以使配对的各种括号`[] () {}`颜色一一对应，方便快速找到配对的另一半。

![vscode-plugins-04](/images/other/devtool/vscode-plugins-04.png)

### 7.`Git History`

可以在`VS Code`中鼠标单击右键，在弹出菜单中选择：

* `Git:View File History`：查看文件的历史记录。
* `Git:View Line History` ：查看单行历史变更记录。

### 8.`Trailing Spaces`

> 个人非常喜欢插件+1！

该插件用于**高亮显示**代码结构中多余的空格。

![vscode-plugins-05](/images/other/devtool/vscode-plugins-05.png)

### 9.`koroFileHeader`

> 个人非常喜欢插件又又+1！

用于**生成文件头部注释**和**函数注释**。

![vscode-plugins-06](/images/other/devtool/vscode-plugins-06.png)

::: details 展开查看配置

* 在`设置`中找到`File Header Config`，这里可以简单配置。

  ![vscode-plugins-07](/images/other/devtool/vscode-plugins-07.png)

* 进入`settings.json`，添加如下配置：

  ![vscode-plugins-08](/images/other/devtool/vscode-plugins-08.png)

  ```json
  "fileheader.customMade": {// 头部注释
    "Descripttion": "",
    "Author": "wxc",
    "Date": "Do not edit",
    "LastEditTime": "Do not Edit"
  },
  "fileheader.cursorMode": {// 函数注释
    "name": "",
    "description": "",
    "param": "",
    "return": ""
  },
  ```

* 快捷键：

  * 头部注释：`windows: ctrl+alt+i/macos: ctrl+cmd+i `；
  * 函数注释：`windows: ctrl+alt+t/macos: ctrl+cmd+t`。

* `"fileheader.configObj"`里是默认配置项。

:::

### 10.`Live Server`

![vscode-plugins-09](/images/other/devtool/vscode-plugins-09.png)

一个在本地搭建实时服务器的插件，支持热更新。

安装后，在`.html`文件鼠标右键弹出的菜单中选择`Open With Live Server`打开服务。

### 更多

还有很多语法提示插件，例如`JavaScript (ES6) snippets`、`JS JSX Snippets`等。