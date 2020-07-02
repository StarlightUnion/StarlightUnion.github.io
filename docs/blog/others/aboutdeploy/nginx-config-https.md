---
title: Nginx配置HTTPS/安装SSL证书
date: 2020/06/30 21:29:00
tags: ["杂记", "Nginx", "HTTPS", "SSL", "CentOS", "Linux"]
---

# Nginx配置HTTPS/安装SSL证书

<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 本篇博文记录一下给博客域名~~即本站~~**配置HTTPS/SSL证书的过程**。

## 一、HTTP与HTTPS

### HTTP

HTTP协议（即`HyperText Transfer Protocol`，超文本传输协议）**基于TCP/IP通信协议来进行通信**，它的缺点是<font color="#FF0000">所有信息明文传播</font>，这带来了风险，**第三方攻击者可以依此窃取信息、篡改信息、伪造身份参与通信**。

### HTTPS

既然信息不安全，是明文传递的，那就加密传递，**通信双方的信息不仅加密**，还要**校验通信双方的身份**。这就是**SSL/TLS**协议，和基于该协议的HTTPS。

### SSL/TLS运行过程

访问网站时浏览器会向服务器获取`公钥`，使用`公钥`加密通信内容，服务器接收到加密后的内容后使用`私钥`进行解密。

::: tip P.S.

* 👉 **SSL/TLS协议运行机制**参考[文末链接[1]](#五、参考资料)。

* 👇 未设置证书时为HTTP协议，浏览器会提示<font color="#FF0000">此为不安全连接</font>。。

![nginx-config-https-02](/images/other/aboutdeploy/nginx-config-https-02.png)

:::

## 二、申请SSL/TLS证书

在**企鹅云**上搜索`SSL证书`然后走申请流程，大概**半天**就会下来。😁

![nginx-config-https-01](/images/other/aboutdeploy/nginx-config-https-01.png)

上图中点击**下载**，包里有下图所示的文件👇 。

我是用Nginx做的代理，Nginx包里有两个文件，`.crt`为**网站域名的签名证书**，即`公钥`，`.key`则为`私钥`。

> ![nginx-config-https-03](/images/other/aboutdeploy/nginx-config-https-03.png)
> ![nginx-config-https-04](/images/other/aboutdeploy/nginx-config-https-04.png)

## 三、配置Nginx

### 查看Nginx配置

在Nginx中配置HTTPS/SSL需要开启`http_ssl_module`模块。接下来查看**服务器安装的Nginx已安装的模块**。

``` shell
nginx -v # 查看版本
nginx -V # 是大写的V
```

![nginx-config-https-05](/images/other/aboutdeploy/nginx-config-https-05.png)

已经安装了`http_ssl_module`模块，如果没有安装，需要重装Nginx。

重装解决方案参考[文末链接[2]](#五、参考资料)。

### 将公私钥上传到服务器

我通过**服务器安装的宝塔面板带的FTP**将公私钥上传到服务器，地址是在`../nginx/ssl/`，在安装的Nginx的根目录下创建了一个`ssl`目录。

![nginx-config-https-06](/images/other/aboutdeploy/nginx-config-https-06.png)

![nginx-config-https-07](/images/other/aboutdeploy/nginx-config-https-07.png)

### 修改`nginx.conf`

配置好后需要重启Nginx。

::: details 展开查看nginx.conf配置

```nginx
...
server
    {
      listen 443 ssl;
      server_name tourist17846.cn www.tourist17846.cn;

      #证书
      ssl_certificate /nginx/ssl/www.tourist17846.cn_bundle.crt;
      #私钥
      ssl_certificate_key /nginx/ssl/www.tourist17846.cn.key;
      # TLS协议版本
      ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
      #配置会话超时时间
      ssl_session_timeout  5m;
      ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
      #优先采取服务器算法
      ssl_prefer_server_ciphers  on;
      #设置长连接
      keepalive_timeout   70;
      #减少点击劫持
      add_header X-Frame-Options DENY;
      #禁止服务器自动解析资源类型
      add_header X-Content-Type-Options nosniff;
      #防XSS攻击
      add_header X-Xss-Protection 1;

      location / {
        root   /my-blog;
        index  index.html index.htm;
      }

      error_page  404              /404.html;

      error_page   500 502 503 504  /50x.html;
      location = /50x.html {
        root   html;
      }
    }

# 服务代理，将访问80端口的http请求转向https
server
    {
      listen 80;
      server_name tourist17846.cn www.tourist17846.cn;
      return 301 https://$host$request_uri;
    }
...
```

:::

## 四、解决问题

> 以下是爬坑问题记录📝。

### 1.端口不能配`80`

![nginx-config-https-08](/images/other/aboutdeploy/nginx-config-https-08.png)

上图就是我配`80`端口给的提示，这里需要配置**支持HTTPS**协议的端口，默认是`443`。

![nginx-config-https-09](/images/other/aboutdeploy/nginx-config-https-09.png)

### 2.配置好了不能访问

> 写好了配置文件，也重启了Nginx，Nginx没有报错，**浏览器访问不了**。。
>
> 这个问题困扰了两个晚上，直到第二个晚上才解决。

在浏览器中输入域名，发现已经转到了`https://...`，但是**浏览器却提示无法访问**。

这说明配置没问题。**接下来把排查重点放在了服务器的安全组**，查看发现腾讯云的安全组已配置`443`端口。。

👉 一时间解决不了，直到后来打开**宝塔面板**，发现上面有一个`防火墙`。试着把`443`加入**放行端口列表**，终于成功了。。🤣

![nginx-config-https-10](/images/other/aboutdeploy/nginx-config-https-10.png)

![nginx-config-https-11](/images/other/aboutdeploy/nginx-config-https-11.png)

## 五、参考资料

* 1.[SSL/TLS协议运行机制的概述 - 阮一峰](http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)
* 2.[Nginx 配置 HTTPS 完整过程](https://blog.csdn.net/weixin_37264997/article/details/84525444)
* 3.[Nginx 服务器证书安装 - 腾讯云](https://cloud.tencent.com/document/product/400/35244)

