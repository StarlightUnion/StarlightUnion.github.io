---
title: GitLab配置及测试提交笔记
date: 2020/06/15 21:12:00
tags: ["杂记", "GitLab", "Git"]
---

# GitLab配置及测试提交笔记

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> `GitLab`是基于`Git`开发的**项目管理及版本控制**平台。那肯定得先安装[Git](https://git-scm.com/download/)，链接页面按需下载安装即可。

## 一、获取并配置SSH Key

> 获取过程和[GitHub SSH Key配置push仍然失败的问题](/blog/others/devtool/github-sshkey-config.html)一文中的过程大差不差。。
>
> **用户名和账户初始邮箱**管理员已给出，最好**修改初始密码和初始邮箱**。

```shell
git config --global user.name 'xxxx' # 配置全局用户名
git config --global user.email 'xxxx@xxx.com' # 配置全局邮箱地址
git config --list # 查看配置项
```

![gitlab-init-02](/images/other/devtool/gitlab-init-02.png)

```shell
#获取SSH Key 邮箱名需要和上面一样
ssh-keygen -t rsa -C "xxxx@xxx.com"
```

::: danger 警告

Windows中存放`id_rsa`的路径中**不能包含中文名**。

`id_rsa`在Windows中一般存放在`C:\Users\<用户名>\.ssh`，在命令行中输入`ls ~/.ssh`可以查看。

若路径中包含中文名，**秘钥会因为存放地址乱码而保存失败**！

:::

SSH Key存放在下图**红圈圈出的位置**。

![gitlab-init-03](/images/other/devtool/gitlab-init-03.png)

::: details 展开查看拷贝SSH Key过程

进入`.ssh`文件夹：👇

![gitlab-init-04](/images/other/devtool/gitlab-init-04.png)

![gitlab-init-07](/images/other/devtool/gitlab-init-07.png)

打开`id_rsa.pub`，**从`ssh-rsa`到最后的邮箱全部复制即可**。

![gitlab-init-08](/images/other/devtool/gitlab-init-08.png)

:::

接着在**GitLab配置/Settings**中左侧栏的SSH Keys中添加复制的Key。

> ![gitlab-init-01](/images/other/devtool/gitlab-init-01.png)
>
> ![gitlab-init-05](/images/other/devtool/gitlab-init-05.png)

## 二、将远程仓库的项目克隆至本地

> 在本地创建目录用于保存项目代码；
>
> 可以在该目录下创建与要下载项目名字相同的文件夹也可以不用。

```shell
cd c:/GitLab # 进入创建好的目录

# 克隆项目源码至本地 地址可以从项目主页获取
git clone git@111.111.1.111:xxx/xxx.git
```

![gitlab-init-06](/images/other/devtool/gitlab-init-06.png)

## 三、开始一次提交测试

```shell
# 当前工作目录为 GitLab
cd xxxx # xxx为项目名
git init

git add . # 提交新增、修改文件至暂存区，不处理删除文件

git commit -m 'modify:xxx' # 提交说明

# 提交前拉取一次代码，看是否需要合并
git pull origin
git remote show origin # 查看远程仓库信息

git push origin # 提交更新到远程仓库
```

> ![gitlab-init-09](/images/other/devtool/gitlab-init-09.png)
>
> ![gitlab-init-10](/images/other/devtool/gitlab-init-10.png)
>
> ![gitlab-init-11](/images/other/devtool/gitlab-init-11.png)

## 四、Github Desktop

如果懒得打命令或者嫌命令行太麻烦，可以使用[Github Desktop](https://desktop.github.com/)，虽然出自Github，**但是基于Git的平台都能够使用**。

![gitlab-init-12](/images/other/devtool/gitlab-init-12.png)

如图，使用`Add Local Repository...`添加一个本地仓库就好了，**前提是该仓库已关联至任一基于Git的远程仓库**，接下来就可以愉快~~省事~~地用图形化界面操作了🎉。

![gitlab-init-13](/images/other/devtool/gitlab-init-13.png)

