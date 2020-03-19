---
title: 【Git】GitHub SSH Key配置push仍然失败的问题
date: 2019-03-16 00:00:00
tags: 杂记, Git, GitHub
---

# 【Git】GitHub SSH Key配置push仍然失败的问题

![git_ssh_key](/images/other/git_ssh_key_01.png)

> 最近在搞博客的事情，发现部署时会出现如上图所示的错误，主要是这句：``git@github.com: Permission denied (publickey)``，提示**没有权限**，push失败，之前一直是拿GitHub客户端上下代码的，这回打命令用git居然失败了。结果一番研究~~百度~~，发现和``SSH Key``有关，下面是我**解决这个问题的经过**，在此记录下来。↓

## 一、获取SSH Key

``SSH Key``字面意思就是个**钥匙**，一般**发起网络请求**时我们总要在传入``ID``，表明身份，这东西当然也是如此。

首先需要**手动获取**``SSH Key``，命令行**进入到项目文件夹后**，输入指令：

```shell
-> git config --global user.email "email@email.com" #这里email为注册GitHub账号的邮箱，下同
-> ssh-keygen -t rsa -C "email@email.com" #获取SSH Key
-> ssh-add ~/.ssh/id_rsa #将获取的SSH Key添加到id_rsa 这一步必不可少
```

接下来一路回车，如果出现``xxxx/.ssh/id_rsa already exists. Overwrite (y/n)? ``就摁``y``。

### 1.存放位置

::: warning

⚠️``SSH Key``会存放在：↓

:::

![git_ssh_key](/images/other/git_ssh_key_07.png)

**macOS：** ``访达 -> 前往 -> 个人 -> .ssh``（.ssh文件夹一般是隐藏的，**显示隐藏文件夹**可用**快捷键**``shift + command + .``）

**Windows：** ``C:\Users\Administrator\.ssh``

.ssh文件夹下包含有``id_rsa``和``id_rsa.pub``两个文件，我们需要的key就在``id_rsa.pub``里面。

### 2.打开方式

```shell
-> vim ~/.ssh/id_rsa.pub
```

可用以上方式打开，当然也可以直接双击打开。**退出编辑模式**快捷键``shift + Q``，再摁``Q``。

## 二、为GitHub设置SSH Key

### 1.设置SSH Key

::: warning

❗️这里要注意一下，登录GitHub后点击**右上角的头像**，然后``Settings -> SSH and GPG Keys -> New SSH Keys  `` 。⬇️

:::

![git_ssh_key](/images/other/git_ssh_key_02.png)➡️![git_ssh_key](/images/other/git_ssh_key_03.png)

![git_ssh_key](/images/other/git_ssh_key_08.png)

```shell
-> vim ~/.ssh/id_rsa.pub
```

添加key，title任意填，key就不行了，使用上面的命令打开后，将**完整的key**，就是**从``ssh-rsa一直``到邮箱**，都复制到里面去，保存即可。完成后的截图⬇️。

![git_ssh_key](/images/other/git_ssh_key_04.png)

### 2.SSH Key 和 Deploy Key

这里其实还有个点~~坑~~，每个仓库的设置页有一个``Deploy Key``，它的**获取方法和上面是一样的**，但是这个只对这一个仓库有效，而且似乎有有效期限？之前添加SSH Key搞错了，忙活了好长时间。

### 3.接下来

```shell
-> ssh -T git@github.com #测试是否添加成功
-> ssh-add ~/.ssh/id_rsa # 若出现问题 重新添加key（不用在Github里再添加）
```

push一下试试吧。

## 三、问题复现

如果首图的问题复现，而最近才添加过SSH Key，那么可以重新使用``ssh-add ~/.ssh/id_rsa``试一试。





