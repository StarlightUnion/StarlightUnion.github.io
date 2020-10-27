---
title: CentOS下配置Node.js和Nginx环境
date: 2020/05/26 21:35:00
tags: ["杂记", "CentOS", "Linux", "Node.js", "Nginx"]
---

# CentOS下配置Node.js和Nginx环境

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

![centos-node-04](/images/other/devtool/centos-node-04.png)

下载完成后将存放在根目录下的`root`中（在没有进入其他目录的情况下）。

```shell
tar -xf node-v14.3.0-linux-x64.tar.xz # 解压
ls # 查看
```

可以发现已经解压成功，目录下已经多了一个`node-v14.3.0-linux-x64`文件夹。

这个版本是**即下即用的**，但是此时`node`和`npm`只在目录下，全局中并没有，下面示例👇

![centos-node-07](/images/other/devtool/centos-node-07.png)

![centos-node-02](/images/other/devtool/centos-node-02.png)

可以发现在全局中使用`node -v`是拿不到`node.js`的版本号的。

这在日常使用中会有点麻烦，因为想要用`node`或者`npm`命令就得到`/root/node-v14.3.0-linux-x64/bin/`里面去。

### 3.建立软链接

> 在*windows*中就是类似与**快捷方式**，将无需安装的软件包中的可执行文件（.exe）发送到桌面，这样就可以在桌面打开软件了。。

这里将使用`ln -s`命令，将`node`、`npm`等“发送”到全局，这样可以在任何地方使用。

```shell
echo $PATH # 查看全局有哪些路径
```

![centos-node-01](/images/other/devtool/centos-node-01.png)

```shell
# 将root目录中的node安装包中的node 链接到 全局路径/usr/bin/，下面的类似
ln -s /root/node-v14.3.0-linux-x64/bin/node /usr/bin/node

ln -s /root/node-v14.3.0-linux-x64/bin/npm /usr/bin/npm
ln -s /root/node-v14.3.0-linux-x64/bin/npx /usr/bin/npx
```

![centos-node-03](/images/other/devtool/centos-node-03.png)

```shell
cd /usr/bin && ls # 进入/usr/bin 查看
node -v
npm -v
npx -v
```

![centos-node-05](/images/other/devtool/centos-node-05.png)

![centos-node-06](/images/other/devtool/centos-node-06.png)

::: danger

⚠️软链接的路径必须为**绝对路径**（全路径），否则出现下面问题。。

![centos-node-08](/images/other/devtool/centos-node-08.png)

这里建立软链接时没有使用**绝对路径**，对比上面成功的图可以发现，这个图里的`node`等都是**红色**的，并且输入`node -v`也不成功。。

:::

接下来：

```shell
cd /root
rm -rf node-v14.3.0-linux-x64.tar.xz # 删除安装包
```

解压完成的`node-v14.3.0-linux-x64`就**别删了**。

## 二、安装`nginx`

安装`nginx`和上面的差不多过程。。

### 1.下载安装包

```shell
wget -c https://nginx.org/download/nginx-1.16.1.tar.gz
```

![centos-nginx-01](/images/other/devtool/centos-nginx-01.png)

### 2.开始安装

```shell
mv nginx-1.16.1.tar.gz /usr/local # 将安装包移动到/usr/local目录下
cd /usr/local && ls # 进入/usr/local目录并浏览
tar -xf nginx-1.16.1.tar.gz # 解压
cd nginx-1.16.1 && ls
make
make install # 编译安装
```

![centos-nginx-02](/images/other/devtool/centos-nginx-02.png)

```shell
whereis nginx # 查看nginx位置
cd /usr/bin/nginx # 进不去，说明nginx不存在或者不是个文件夹
# conf里面的nginx.conf就是配置nginx的地方，sbin则是存放编译后的nginx等的地方
cd /usr/local/nginx && ls
cd sbin
nginx # 通过这一步和上一步可以发现全局中没有nginx
./nginx # 启动
ps aux|grep nginx # 查看nginx进程
```

![centos-nginx-03](/images/other/devtool/centos-nginx-03.png)

`nginx`此时已开启，默认配置是`80`端口，此时打开浏览器输入服务器的外网地址，可以发现👇

![centos-nginx-05](/images/other/devtool/centos-nginx-05.png)

### 3.配置nginx的开机自启动

```shell
vim /etc/rc.local # 此时进入文件的查看模式
```

按`i`进入**编辑模式**，在最后一行加上`/usr/local/nginx-1.16.1/sbin/nginx`，按`esc`退出**编辑模式**，输入`:wq`**退出并保存**。

### 4.最后

```shell
# 建立软链接，将nginx添加到全局
ln -s /usr/local/nginx-1.16.1/sbin/nginx /usr/bin/nginx

cd /usr/local
rm -rf nginx-1.16.1.tar.gz # 删除安装包
```
