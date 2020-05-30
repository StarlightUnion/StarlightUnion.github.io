---
title: CentOS下配置node.js和nginx环境
date: 2020/05/26 21:35:00
tags: 杂记, CentOS, Linux, Node.js, Nginx
---

# CentOS下配置node.js和nginx环境

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> *CentOS版本：7.6*
>
> 本文记录了*CentOS*下配置`node.js`和`nginx`的过程。*CentOS*是*Linux*的发行版之一，基于*Red Hat*（红帽），具有较高的稳定性，相对于*Windows Server*还有安全的特点。

## 一、安装`node.js`

### 1.下载安装包

这里有两种方式：

* 在本地下载后通过**FTP**上传至服务器；
* 直接在服务器下载。

~~如果服务器安装了[宝塔面板](https://www.bt.cn/)，可以直接通过里面的**软件商店**下载并直接傻瓜式安装。。。~~

在服务器上下载：👇

```shell
wget https://cdn.npm.taobao.org/dist/node/v14.3.0/node-v14.3.0-linux-x64.tar.xz
```

下载路径可以从[node.js官网](https://nodejs.org/en/download/)获取。

### 2.开始安装

![centos-node-04](/images/other/centos-node-04.png)

下载完成后将存放在根目录下的`root`中（在没有进入其他目录的情况下）。

```shell
tar -xf node-v14.3.0-linux-x64.tar.xz # 解压
ls # 查看
```

可以发现已经解压成功，目录下已经多了一个`node-v14.3.0-linux-x64`文件夹。

这个版本是**即下即用的**，但是此时`node`和`npm`只在目录下，全局中并没有，下面示例👇

![centos-node-07](/images/other/centos-node-07.png)

![centos-node-02](/images/other/centos-node-02.png)

可以发现在全局中使用`node -v`是拿不到`node.js`的版本号的。

这在日常使用中会有点麻烦，因为想要用`node`或者`npm`命令就得到`/root/node-v14.3.0-linux-x64/bin/`里面去。

### 3.建立软链接

> 在*windows*中就是类似与**快捷方式**，将无需安装的软件包中的快捷方式发送到桌面，这样就可以在桌面打开软件了。。

这里将使用`ln -s`命令，将`node`、`npm`等“发送”到全局，这样可以在任何地方使用。

```shell
echo $PATH # 查看全局有哪些路径
```

![centos-node-01](/images/other/centos-node-01.png)

```shell
# 将root目录中的node安装包中的node 链接到 全局路径/usr/bin/，下面的类似
ln -s /root/node-v14.3.0-linux-x64/bin/node /usr/bin/node 

ln -s /root/node-v14.3.0-linux-x64/bin/npm /usr/bin/npm
ln -s /root/node-v14.3.0-linux-x64/bin/npx /usr/bin/npx 
```

![centos-node-03](/images/other/centos-node-03.png)

```shell
cd /usr/bin && ls # 进入/usr/bin 查看
node -v
npm -v
npx -v
```

![centos-node-05](/images/other/centos-node-05.png)

![centos-node-06](/images/other/centos-node-06.png)

::: danger

⚠️软链接的路径必须为**绝对路径**（全路径），否则出现下面问题。。

![centos-node-08](/images/other/centos-node-08.png)

这里建立软链接时没有使用**绝对路径**，对比上面成功的图可以发现，这个图里的`node`等都是**红色**的，并且输入`node -v`也不成功。。

:::

接下来：

```shell
cd /root
rm -rf node-v14.3.0-linux-x64.tar.xz # 删除安装包
```

解压完成的`node-v14.3.0-linux-x64`就**别删了**。

施工中🚧...

