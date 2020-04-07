---
title: 【Git】删除GitHub中的某个文件夹以及Git常用命令
date: 2019-03-15 00:00:00
tags: 杂记, Git, GitHub
---

# 【Git】删除GitHub中的某个文件夹以及Git常用命令

> 今天在把项目push到GitHub时把``node_modules``给传上去了，由于是新仓库，配置时忘记把``node_modules``**加到.gitignore里面**去了。错已铸就，老老实实给删掉吧。。。

## 一、删除文件夹

```shell
-> cd reponame #进入本地克隆下来的仓库文件夹
-> git pull origin master #拉取GitHub上的项目文件
-> git rm -r --cached node_modules #删除之
# git rm file # 删除文件
```

::: warning
⚠️**注意：**这里**只会删除GitHub仓库上的``node_modules``，并不会删除本地文件夹里的。**
:::

如果报``fatal: pathspec 'node_modules' did not match any files``这个错误，你得看一下是不是**文件夹名字输错了**或者是**你进错仓库了。。**

```shell
-> git commit -m 'modify: Delete node_modules' #提交备注
-> git push -u origin master #push上去才完事儿，要注意
```

完事了，看一下有没有删除成功。

## 二、上传文件

有了删除文件，也记一下上传文件吧

```shell
-> cd dirname #dirname是要项目下要上传的文件夹名称
-> git init

-> git add -A #git add filename.file
-> git commit -m 'modify: Update dirname'
```

Git中文件的状态有两种，**已跟踪(tracked)**和**未跟踪(untracked)**，已跟踪就是这个文件已经纳入**版本控制**。

对于**修改(modify)的文件**，由于它之前已被提交，上次的修改内容被记录了，所以它在**已跟踪(tracked)**状态。而对于**新增的文件**，它处于**未跟踪状态**，此时就需要将其纳入已跟踪状态，``git add -A``会把文件夹下所有文件纳入已跟踪状态，将**单个文件纳入跟踪状态**需使用``git add filename.file``。

```shell
-> git push -f git@github.com:USERNAME/REPONAME.git master
```

另外别忘了push，push完了才完事。



 ``git commit -m``与``git commit -am``的区别，还有用了``-am``还要不要使用``git add``命令?看[大佬文章](https://www.cnblogs.com/smile-fanyin/p/10827438.html)。。



