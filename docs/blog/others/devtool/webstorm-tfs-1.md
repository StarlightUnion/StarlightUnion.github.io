---
title: webstorm TFS 插件的安装与使用(1)
date: 2019-03-02 00:00:00
tags: 杂记, WebStorm, TFS
---

# webstorm TFS 插件的安装与使用(1)
<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

>在工作中遇到的问题，我们公司使用``webstorm``**做开发，进行版本控制的时候自然要用到相关的插件，我们使用的是TFS 插件，** 那时候翻遍百度都没找到几篇教程，很尴尬，最后还是在公司同事的指导下熟悉使用的。**在这里做个记录，方便各位老哥的熟悉与使用。**

## 1.安装TFS插件
![描述](/images/other/tfs_01_1.png)
![描述](/images/other/tfs_01_2.png)
![描述](/images/other/tfs_01_3.png)
>**流程：**File -> Settings -> Plugins -> TFS -> Install JetBrains plugin -> （在弹出窗口中选择）TFS Integration -> (右侧选择)Install，若有本地文件，请选择**install plugin from disk**。(这里提供[下载链接(某度网盘)][1])

## 2.创建工作区和使用TFS插件提交代码
>**2.1.**下面是新建工作区(workspace)和服务器(server)
**流程：**File **->** Settings **->** Version Control **->** TFS **->** Manage... **->** （在弹出窗中选择）Add... **->** （填写地址和用户名，还有密码，找同事获取）OK **->** （接下来是创建工作区）**在右边栏中选择**Create... **->** （填写名称，还有存放代码的地址） **Name**和**Location**，点击下面 Working folders 的“+”号 **->** Save。
![描述](/images/other/tfs_01_4.png)

>**图不是这里的，但是界面是一样的，做个示例。**
![描述](/images/other/tfs_01_5.png)
![描述](/images/other/tfs_01_6.png)
![描述](/images/other/tfs_01_7.png)
>**2.2.**接下来是使用TFS插件从服务器上获取代码
**流程：** VCS -> Checkout from Version Control -> TFS 打开后的界面在下面第二张图，选择第二项 -> **确认服务器地址和工作区信息**，点击 Next -> **选择要下载的文件**，点击 Finish。
![描述](/images/other/tfs_01_8.png)
![描述](/images/other/tfs_01_9.png)
![描述](/images/other/tfs_01_10.png)



  [1]: https://pan.baidu.com/s/10GNA_xlWbCR4HlHqGM2IPQ