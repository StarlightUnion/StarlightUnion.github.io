---
title: Node.js + GitHub Webhooks实现自动化部署
date: 2020/05/28 21:29:00
tags: ["杂记", "自动化部署", "Node.js", "GitHub", "Webhooks", "CentOS", "Linux"]
---

# Node.js + GitHub Webhooks实现自动化部署

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> **博客**已经成功部署到云服务器了，但是还有一个问题需要解决。
>
> 👉博客的文章增加、修改等都在个人PC上完成，并且本地有开发环境，**编译之后生成的适合生产环境的项目源码会提交到GitHub上的远程仓库**。此时博客已迁移到了云服务器上，为了使云服务器上的代码的版本保持最新，我有想到**三个操作**：👇
>
> * 1、远程登录云服务器手动更新；
> * 2、为**服务器设置定时脚本**，比如每隔24小时执行一次，与GitHub上的仓库同步；
> * 3、建立**某种自动更新机制**，代码更新到GitHub仓库之后让云服务器这边触发同步。
>
> 第一个操作明显繁琐，不符合懒人需求🤣，第二个操作**定时脚本**可以用用，但明显第三个才是出路啊。。

## 一、GitHub WebHooks

`GitHub Webhooks`是GitHub提供的一个API，如果为一个GitHub上的一个远程仓库配置了`Webhooks`，当有人往这个远程仓库`push`代码完成后，GitHub会往`Webhooks`里配置的地址发送一个`POST`请求，并在`body`中给出本次更新的仓库信息、更新的文件等信息。

这个`post`请求相当于一个**通知**，我们收到`post`请求后可以对**服务器端的本地仓库进行更新**，拉取·个 GitHub上的最新代码，从而实现**一次提交，服务器端自动化部署**。

::: details 展开查看详情

配置`GitHub Webhooks`：进入一个仓库 -> 右上角`Settings` -> 侧边栏`Webhooks`。

![auto-deploy-01](/images/other/aboutdeploy/auto-deploy-01.png)

一次`push`时`Webhooks`返回的部分数据：👇

![auto-deploy-02](/images/other/aboutdeploy/auto-deploy-02.png)

:::

## 二、使用`node.js`搭建服务

说实话这是第一次正经使用`node.js`。。

> 以下为一个简单的`POST`请求实例代码。
>
> [完整的项目源码在此](https://github.com/StarlightUnion/AutoUpdateServer-Node.js) ，**引入了日志功能，可以记录服务的常规和异常信息**。

### 1.写个DEMO测试一下

```js
// config.js
module.exports = {
  HOST: "127.0.0.1",
  PORT: 9000
};

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');// 跨域
const server = express();

const config = require('./config');// 配置 config.js
const HOST = config.HOST;
const PORT = config.PORT;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());

server.post('/api/update', (request, response) => {
  console.log(request.body);
  response.json(request.body);
});

server.listen({
  host: HOST,
  port: PORT
}, function () {
  console.log(`Server is running in http://${HOST}:${PORT}`);
});
```

安装必要依赖后执行`node server.js`，在**Postman中模拟一次请求**，如下，成功收到响应！

![auto-deploy-03](/images/other/aboutdeploy/auto-deploy-03.png)

### 2.接着完善一下

> 主要增加了：
>
> * 将命令整合至`update.sh`脚本，并通过`node.js`相关API调用；
> * **从`body`中获取更新的仓库名**并将其作为一个**参数**传入脚本，这样服务可以应用于多个仓库。

::: details 展开查看源码

#### 项目文件结构

```
.node-update
├── static
│   ├── server.js
│   ├── config.js
│   └── update.sh
└── package.json
```

#### `server.js`服务本体

```js
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');// 跨域
const server = express();
const spawn = require('child_process').spawn;

const config = require('./config');// 配置 config.js
const HOST = config.HOST;
const PORT = config.PORT;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());

// github webhooks 需选用 x-www-form-urlencoded
server.post('/api/update', (request, response) => {
  if (request) {
    // console.log(request.body);
    const repoName = JSON.parse(request.body.payload).repository.name
    const cmd = `/documents/GitHub/${repoName}`;// 本地仓库地址

    let res = '';
    // 调用命令行，执行命令(sh update.sh)，并给update.sh传递一个参数cmd
    const process = spawn('sh', ['update.sh', cmd]);
    process.stdout.on('data', function (data) {
      const ds = data.toString();
      // console.log(ds);
      res += ds;
    });

    process.stderr.on('data', function (data) {
      const ds = data.toString();
      // console.log(ds);
    });
    response.json(res);
  }

  // response.json(request.body);
});

server.listen({
  host: HOST,
  port: PORT
}, function () {
  console.log(`Server is running in http://${HOST}:${PORT}`);
});

```

#### `update.sh`更新脚本

```shell
# update.sh
echo 'start update...'
# echo $1
cd $1 # 接收传入的参数 即地址

# 拉取更新
git fetch --all
git reset --hard origin/master

# 获取最新代码合并到本地
# git pull origin

echo 'update complete!'
```
#### `package.json`

```json
{
  "name": "node-update",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "server": "cd static && nodemon server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "nodemon": "^1.11.0",
    "winston": "^3.2.1",
    "winston-daily-rotate-file": "^4.4.2"
  }
}
```

:::

## 三、将服务部署至服务器

### 1.运行前的配置

> * 1.设置`config.js`👇，`HOST`为服务的IP，`PORT`填写服务的端口。
>
>  ::: danger 注意事项
>
> * 需要**确保填写的端口正确开通并暴露在公网**，需设置防火墙（Windows）或安全组（云服务器）；
> * 云服务器的话`HOST`需要**填写服务器的内网地址**，填写公网地址将会报错；
> * 服务器需安装`node.js`环境，参考[CentOS下配置Node.js和Nginx环境](/blog/others/devtool/nodejs-config-for-centos.html)
>
>  :::
>
> ```js
> ...
> module.exports = {
>  HOST: "127.0.0.1",// 云服务器要填写该服务器的内网IP
>  PORT: 9000,
>  logger: logger// 日志
> };
> ...
> ```
>
> * 2.设置`server.js`
>
> 这里需要配置服务器上的**本地仓库的绝对地址**。
>
> ```js
> ...
> const repoName = JSON.parse(request.body.payload).repository.name
> const cmd = `/documents/GitHub/${repoName}`;// 本地仓库地址
> ...
> ```

将文件传至服务器，在命令行中进入该目录，执行下面命令。

```shell
npm install # 安装依赖
npm run server # 运行服务
```

![auto-deploy-07](/images/other/aboutdeploy/auto-deploy-07.png)

一次`POST`请求打印出的信息👇

![auto-deploy-08](/images/other/aboutdeploy/auto-deploy-08.png)

### 2.实现服务端常驻

> `npm run server`只能实现服务的开发环境下的调试部署，要想实现服务的常驻，需要安装`pm2`。

运行`npm i pm2 -g`全局安装`pm2`，下面第一图中可以看到**安装的路径**。

![auto-deploy-04](/images/other/aboutdeploy/auto-deploy-04.png)

```shell
pm2 # 尝试调用，发现没有用

# 将安装路径中的pm2建立软链接到全局路径，将pm2设置为全局命令
ln -s /root/node-v14.3.0-linux-x64/bin/pm2 /usr/bin/pm2
pm2 # 成功
```

![auto-deploy-05](/images/other/aboutdeploy/auto-deploy-05.png)

```shell
cd static # 进入static目录
pm2 start server.js # 运行server.js并常驻
```

![auto-deploy-06](/images/other/aboutdeploy/auto-deploy-06.png)

## 四、遇到的问题

### 拉取远程仓库代码失败

> 错误提示：`error: PRC failed; result=18, HTTP code = 200 `、`fatal: The remote end hung up unexpectedly`、`fatal: early EOF`、`fatal: index-pack failed`、`error: could not fetch origin`。

搜索一番，发现是远程仓库文件太大，而缓存设置的大小小，拉取超时。

```shell
git config --list # 查看 http.postbuffer

# 修改 http.postbuffer 为 1024288000
git config --global http.postBuffer 1024288000
git config --list # 再次查看
```

![auto-deploy-09](/images/other/aboutdeploy/auto-deploy-09.png)

![auto-deploy-10](/images/other/aboutdeploy/auto-deploy-10.png)

