---
title: WindowsPC同时配置GitLab和GitHub
date: 2020/06/16 20:56:00
tags: ["杂记", "GitLab", "GitHub", "Git", "Windows"]
---

# WindowsPC同时配置GitLab和GitHub

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> **需求简述**：
>
> 工作中使用的**版本控制工具**是公司内部搭建的`GitLab`，个人则使用`GitHub`。
>
> 二者都基于`Git`开发，但是分属两个不同平台，并且我在这两个平台注册的账号还是**不同的邮箱以及不同的用户名**。。
>
> 而`git config --global user.name 'xxxx'`和`git config --global user.email 'xxxx@xxx.com'`配置的是全局用户名和邮箱。为消除不便，此时需要为办公电脑同时配置`GitLab`和`GitHub`。
>
> **参考资料**：
>
> [亲测本地电脑同时配置gitlab和github账号](https://www.jianshu.com/p/63c3389eb537)

## 一、原理

根据**参考资料**，要想在同一台电脑上同时配置`GitLab`和`GitHub`，只要确保三点：

> * 保存两份不同的SSH Key各自对应自己的平台；
> * 提交代码时能够正确使用对应平台的SSH Key提交；
> * 本地仓库能**正确关联到对应的平台**，能够正确**拉取和提交代码**。

针对这三点，有以下办法解决：👇

* 获取SSH Key时将生成的`GitLab`和`GitHub`的Key文件`id_rsa`区分命名；
* 在`.ssh`文件夹写入配置文件，根据**本地仓库关联的远程仓库地址自动选择用哪个Key提交代码**；
* 取消`Git`中全局的`user.name`和`user.email`设置，**为每个本地仓库单独设置局部的`user.name`和`user.email`**。

## 二、操作实践

### 开始

```shell
ls ~/.ssh # 查看 .ssh 路径下保存的key
git config --list # 查看配置
```

通过查看保存的SSH Key，在`.ssh`目录下已存在一份Key（即是在前文[GitLab配置及测试提交笔记](/blog/other/devtool/gitlab-init.html)中为`GitLab`配置的Key），接下来只要再下载一份`GitHub`的Key就行了。

下一步查看配置可以看到`Git`的全局配置中已经设置了**全局的`user.name`和`user.email`**。

![gitlab-and-github-01](/images/other/devtool/gitlab-and-github-01.png)

![gitlab-and-github-02](/images/other/devtool/gitlab-and-github-02.png)

### 获取`GitHub`SSH Key

接下来输入命令`ssh-keygen -t rsa -C 'email@xxx.com'`获取Key。

::: danger 注意⚠️

* 在保存Key的时候（下图红圈处）需要**手动键入文件名**，我在此输入`id_rsa_github`用以标识这是`GitHub`的Key；

* 获取SSH Key需要配置**全局的`user.name`和`user.email`**，**否则会失败**。

  👇下面是一次失败案例，重置后获取SSH Key成功，但是**并没有保存成功**。

  ```shell
  git config --global --unset user.name
  git config --global --unset user.email
  ```

  ![gitlab-and-github-04](/images/other/devtool/gitlab-and-github-04.png)

  ![gitlab-and-github-05](/images/other/devtool/gitlab-and-github-05.png)

:::

![gitlab-and-github-03](/images/other/devtool/gitlab-and-github-03.png)

### 创建配置文件

Key保存成功，接下来在`.ssh`文件夹下新建一个`config`文件，**没有后缀，就是`config`**。

> 由于`GitLab`搭建在公司内网，使用内网IP作为识别Host。
>
> `User`必须为**准确的用户名**，`IdentityFile`需**指定对应的Key文件**。

```
# gitlab
Host 192.168.0.1
HostName 192.168.0.1
User xxxx
IdentityFile ~/.ssh/id_rsa

# github
Host github.com
HostName github.com
User xxxx
IdentityFile ~/.ssh/id_rsa_github
```

![gitlab-and-github-06](/images/other/devtool/gitlab-and-github-06.png)

**接下来测试配置：**

```shell
ssh -T git@github.com # Hi xxx! You've successfully authenticated....
ssh -T git@192.168.0.1 # Welcome to GitLab, @xxxx
```

![gitlab-and-github-07](/images/other/devtool/gitlab-and-github-07.png)

![gitlab-and-github-08](/images/other/devtool/gitlab-and-github-08.png)

### 为本地仓库配置`user.name`和`user.email`

由于设置了两个SSH Key，为使本地仓库在提交代码更新时能正确使用对应平台的Key，每个本地仓库都需要设置`user.name`和`user.email`。

```shell
cd C:/GitLab/ExampleRepo
git config user.name "xxxx"
git config user.email "email@xxx.com"
```

::: warning 提示

如果觉得为每个本地仓库设置`user.name`和`user.email`太麻烦，**可以选择将常用的平台如`GitLab`的`name`和`email`设置为全局的`user.name`和`user.email`**。**不常用的平台的本地仓库则每个单独设置其对应的`user.name`和`user.email`**。

**👉`Git`在提交时优先使用本地仓库配置的`user.name`和`user.email`，如无设置再使用全局的`user.name`和`user.email`。**

:::