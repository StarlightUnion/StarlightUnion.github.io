---
title: macOS系统下安装Homebrew
date: 2019/03/02 00:00:00
tags: 杂记, HomeBrew
---

# macOS系统下安装Homebrew
<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

#### 系统版本信息：macOS Mojave 10.14.3
>接下来进入正题，最近为了折腾Vue的环境在网上找了不少的资料，包括博客，提问啥的，发现到最后都解决不了问题，一直报错，直到翻到了这个[Mac下使用国内镜像安装Homebrew][1]和[HomeBrew 官方安装太慢而失败?这么搞就行.(转载)][2]，受此启发并结合自己的安装经历，给那篇补充一些细节，并希望给后来者一些帮助和启发。

>这里我们使用国内镜像安装。在此**感谢前面的两位dalao**。


## 1.获取install文件并编辑
```shell
cd ~
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install >> brew_install
```
>编辑的话直接在Finder里面搜索brew_install，双击之后打开，一般会用**Xcode**打开。原文说的“**注释掉BREW_REPO = "https://github.com/Homebrew/brew".freeze和CORE_TAP_REPO = "https://github.com/Homebrew/homebrew-core".freeze**”，不知为何，我这儿没有**CORE_TAP_REPO**这一行，不过没关系，新增上去就行了。

**修改后代码和截图如下**
```ruby
#!/usr/bin/ruby
# This script installs to /usr/local only. To install elsewhere (which is
# unsupported) you can untar https://github.com/Homebrew/brew/tarball/master
# anywhere you like.
HOMEBREW_PREFIX = "/usr/local".freeze
HOMEBREW_REPOSITORY = "/usr/local/Homebrew".freeze
HOMEBREW_CORE_TAP = "/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core".freeze
HOMEBREW_CACHE = "#{ENV["HOME"]}/Library/Caches/Homebrew".freeze
#BREW_REPO = "https://github.com/Homebrew/brew".freeze#修改前
BREW_REPO = "git://mirrors.ustc.edu.cn/brew.git".freeze#修改后
CORE_TAP_REPO = "git://mirrors.ustc.edu.cn/homebrew-core.git".freeze#新增
```

![code](/images/other/other_01_1.png)

## 2.开始安装

```shell
/usr/bin/ruby ~/brew_install
```
>在这里我没有遇到原文下面提问的朋友遇到的卡住报错不动等问题，仅停顿了一会儿。

## 3.替换源
```shell
#替换homebrew默认源
cd "$(brew --repo)"
git remote set-url origin git://mirrors.ustc.edu.cn/brew.git

#替换homebrew-core源
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin git://mirrors.ustc.edu.cn/homebrew-core.git

```
## 4.brew更新

```shell
brew update
```
**最后:**

```shell
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
```


  [1]: https://www.jianshu.com/p/6523d3eee50d
  [2]: https://blog.csdn.net/qq_33591200/article/details/82882562
