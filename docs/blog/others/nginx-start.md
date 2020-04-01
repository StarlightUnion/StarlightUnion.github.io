---
title: Nginx部署笔记-Windows（2）开机自启动
date: 2020-04-01 00:00:00
tags: 杂记, Nginx, Windows
---

# Nginx部署笔记-Windows（2）开机自启动

> 部署完`nginx`后还要设置一下**开机自启**，不然**重启一次电脑就要手动启动**一次`nginx`，手打命令还是太繁琐了。本文参考资料：[windows nginx开机启动](https://blog.csdn.net/hqbootstrap1/article/details/87299312)和[Nginx（二）-服务模式运行nginx之WINSW](https://www.cnblogs.com/merray/p/8460992.html)。

在Windows下实现自启动需要借助一个开源程序[winsw](https://github.com/winsw/winsw/releases)。

**版本选择：**

::: warning

* `.netframework2.0` 选择`WinSW.NET2.exe`
* `.netframework4.0` 选择`WinSW.NET4.exe`

:::

将这个`exe`放到`nginx`根目录下，将其名字改为`start-nginx.exe`，**当然名字是自定义的**。再新建一个`txt`文件，将名字改为`start-nginx.xml`，**扩展名前面的名字部分要保持一致**。在`start-nginx.xml`里面添加如下代码：

```xml
<service>
  <id>start-nginx</id>
  <name>start-nginx</name>
  <description>nginx self starting</description>
  <logpath>D:\nginx-1.14.2\</logpath>
  <logmode>roll</logmode>
  <depend></depend>
  <executable>D:\nginx-1.14.2\nginx.exe</executable>
  <stopexecutable>D:\nginx-1.14.2\nginx.exe -s stop</stopexecutable>
</service>
```

**安装：**

![nginx](/images/other/nginx-start-01.png)

打开`cmd`进入到`nginx`根目录，输入`start-nginx.exe install`。

::: danger

需要注意的是如果使用`powershell`会**出现错误**。

:::

![nginx](/images/other/nginx-start-03.jpg)

安装后`nginx`根目录下会生成上图所示的多个文件，但是此时**服务并未启动！！！**

**要设置成开机自启动，仍需要两步骤：**

* 1.打开**任务管理器**，选择最后一栏**服务**，找到在`start-nginx.xml`中设置的`name`对应的服务，右键选择`开始`。

![nginx](/images/other/nginx-start-02.png)

* 2.再次点击右键，选择`打开服务`，跟上面一样找到服务，**查看启动类型**是否为`自动`，右键选择`属性`可以设置`启动类型`。

![nginx](/images/other/nginx-start-04.png)

![nginx](/images/other/nginx-start-05.png)