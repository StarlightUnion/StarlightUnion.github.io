---
title: Git派生（fork）的仓库代码的同步问题
date: 2020/11/18 20:22:00
tags: ["杂记", "Git"]
---

# Git派生（fork）的仓库代码的同步问题

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 部门有**产品代码**一份，其它项目代码多从这份产品上**派生**（fork）。
>
> 但产品代码其实并不成熟，还在修改完善中。其它**派生的仓库**需要和**产品仓库**保持同步。

好了，需求有了，现在有两个办法：🤔

## 一、给派生仓库设置上游仓库

![forked-update-01](/images/other/devtool/forked-update-01.png)

![forked-update-02](/images/other/devtool/forked-update-02.png)

![forked-update-03](/images/other/devtool/forked-update-03.png)

### 命令详解

``` shell
# 设置上游仓库地址
git remote add upstream http://example/exampleRepo.git

# 查看该仓库关联的所有远程仓库
git remote -v

# 拉取上游仓库代码，拉取成功后会存放在 upstream/master 分支
git fetch upstream

# 查看所有分支
git branch -a # 下面的 "git branch" 是查看当前所在分支

# 合并要在 master 进行，若当前不在需要切换回 master
git merge upstream/master
git checkout master # 切换回 master
```

合并之后将代码上传至远程仓库（**非上游仓库**）即可。

## 二、给产品仓库设置多个远程仓库

第二个方法就是**给产品仓库设置多个远程仓库地址**，这样在产品仓库修改代码提交（push）时可以同步提交到设置的那几个远程仓库，实现多仓库同步。

``` shell
# 设置远程仓库
git remote set-url --add --push origin http://example/exampleRepo.git

# 查看该仓库关联的所有远程仓库
git remote -v
```
::: tip 不用输命令也可以查看关联的远程仓库地址

在本地仓库根目录中找到`.git/config`，`.git`一般隐藏。

![forked-update-04](/images/other/devtool/forked-update-04.png)

:::

## 三、编写同步脚本

> 第三个方法是后面添加的，最后采用了这个方法。

结合之前的经验，考虑到**当前产品派生的项目非常多**，一个个项目这样打命令还是太麻烦。

所以还是写一个脚本来同步更新比较好。下面是一个脚本实例：👇

```shell
# update.sh

set -e # 确保脚本执行时抛出错误

echo '代码同步开始...'
echo # 空行

echo '当前项目所有分支：'
git branch --list
echo

echo '切换到主分支master：'
git checkout master
echo

echo '拉取产品最新代码：'
git fetch http://exampleRepo.git
echo

echo '合并代码：'
git merge FETCH_HEAD
echo

echo '提交代码：'
git push
echo

echo '代码同步完成！'
```

::: danger 注意

* 在`Windows`下执行`shell`脚本不要使用`CMD`和`PowerShell`，请使用`Git Bash`，就是安装`Git`自带的那个命令行工具。

* 执行上文脚本使用命令`bash update.sh`。

:::