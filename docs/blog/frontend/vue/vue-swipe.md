---
title: 实现滑动和闪现轮播图
date: 2019/11/15 00:00:00
tags: Vue.js
---

# 实现滑动和闪现轮播图
<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> #### vue版本信息：2.5.2

> 这是前几个月[仿某米商城首页项目](https://github.com/StarlightUnion/xiaomi)时的一些感悟，现在记录在这里。所以样式以及数据什么的都是照搬过来的，没收广告费，也不耍—哔—。。。

![描述](/images/frontend/vue/vue-swipe.gif)

[轮播图预览地址](https://starlightunion.github.io/Blog-Content/Vue/banner/banner.html)

**实现的功能：**
> * **闪现**轮播图与**滑动**轮播图；
> * 点击 ``<`` 和 ``>`` **箭头切换**轮播图页面；
> * 点击右下部**小圆点切换**对应的轮播图；
> * 切换tab页离开轮播图界面后会清空计时器，再进入时重启计时器开始播放；
> * 点击 ``<`` 和 ``>`` 时会使**自动播放功能一段时间内失效**，防止自动切换和手动切换同时启用发生切换混乱。

**废话不多说，直接上代码**
## 1.HTML
```html
<div id="app">
<div class="banner">
  <div class="banner-prev" @click="prev"></div>
  <div class="banner-next" @click="next"></div>
  <transition-group tag="ul" name="banner-trans" class="banner-container">
    <li class="image-container"
    v-for="(item, index) in banners"
    v-show="index === imgIndex"
    :key="index">
      <a><img :src="item.src" /></a>
    </li>
  </transition-group>
  <div class="banner-points">
    <a class="banner-point" @click="jump(index)" :class="{'active': index === imgIndex}" v-for="(item, index) in banners.length" :key="index"></a>
  </div>
</div>
<div class="banner slide">
  <div class="banner-prev" @click="_prev"></div>
  <div class="banner-next" @click="_next"></div>
  <ul class="banner-container banner-slide"
  :style="transformStyle">
    <li class="image-container slide-item"
    v-for="(item, index) in banners"
    :key="index">
      <a><img :src="item.src" /></a>
    </li>
  </ul>
  <div class="banner-points">
    <a class="banner-point" @click="_jump(index)" :class="{'active': index === slideIndex}" v-for="(item, index) in banners.length" :key="index"></a>
  </div>
</div>
</div>
```

## 2.JS
```js
var app = new Vue({
  el: "#app",
  data: {
      // 闪现轮播图
      imgIndex: 0,
      timer: '',
      delayTimer: '',
      slideFlag: false,
      // 滑动轮播图
      slideIndex: 0,
      _timer: '',
      Xvalue: 0,
      _delayTimer: '',
      _slideFlag: false,
      banners: [
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cefed8336bae62768afeeb6a3b8f55c8.jpg?w=2452&h=920'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/743e04f29f920648b9d99b04a85ce343.jpg?w=2452&h=920'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d7d3f2df881cf62e5fafdada94f5018.jpg?w=2452&h=920'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bd4174b8c5aad67a64864a5716ad152.jpg?w=2452&h=920'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1f0eb196c6c65a89ffba6efa4b5679c.jpg?w=2452&h=920'}
      ]
  },
  methods: {
    next() {
      this.delay();
      const lastIndex = this.banners.length - 1;
      if (this.imgIndex < lastIndex) {
        this.imgIndex += 1;
      } else {
        this.imgIndex = 0;
      }
    },
    prev() {
      this.delay();
      const lastIndex = this.banners.length - 1;
      if (this.imgIndex > 0) {
        this.imgIndex -= 1;
      } else {
        this.imgIndex = lastIndex;
      }
    },
    play() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (!this.slideFlag) {
          this.next();
        }
      }, 5000);
    },
    jump(index) {
      this.delay();
      this.imgIndex = index;
    },
    delay() {// 防止手动切换和自动切换同时进行出现的混乱
      this.slideFlag = true;
      clearInterval(this.delayTimer);
      this.delayTimer = setInterval(() => {
        this.slideFlag = false;
      }, 1000);
    },
    // 滑动轮播图
    _next() {
      this._delay();
      const lastIndex = this.banners.length - 1;
      if (this.slideIndex < lastIndex) {
        this.slideIndex += 1;
        this.Xvalue = - (this.slideIndex * 1226);
      } else {
        this.slideIndex = 0;
        this.Xvalue = 0;
      }
    },
    _prev() {
      this._delay();
      const lastIndex = this.banners.length - 1;
      if (this.slideIndex > 0) {
        this.slideIndex -= 1;
        this.Xvalue = - (this.slideIndex * 1226);
      } else {
        this.slideIndex = lastIndex;
        this.Xvalue =  - (lastIndex * 1226);
      }
    },
    _play() {
      clearInterval(this._timer);
      this._timer = setInterval(() => {
        if (!this._slideFlag) {
          this._next();
        }
      }, 5000);
    },
    _jump(index) {
      this._delay();
      this.slideIndex = index;
      this.Xvalue = - (index * 1226);
    },
    _delay() {
      this._slideFlag = true;
      clearInterval(this._delayTimer);
      this._delayTimer = setInterval(() => {
        this._slideFlag = false;
      }, 1000);
    },
  },
  computed: {
    transformStyle () {
      return {
        'transform': `translate3d(${this.Xvalue}px, 0, 0)`
      }
    }
  },
  mounted() {
    this.play();
    this._play();

    // 切换浏览器tab页进入
    window.onfocus = () => {
      this.timer = setInterval(() => {
        this.next();
      }, 5000);
      this._timer = setInterval(() => {
        this._next();
      }, 5000);
    }

    // 切换浏览器tab页退出
    window.onblur = () => {
      clearInterval(this.timer);
      clearInterval(this._timer);
    }
  }
})
```

## 3.CSS
```css
* {
  margin: 0px;
  padding: 0px;
}

li{
  list-style: none;
}

body, html {
  width: 100%;
}

#app {
  width: 1226px;
  height: 100%;
  margin: 0 auto;
}

.banner {
  position: relative;
  margin: 20px 0 20px;
}

.slide {
  display: flex;
  overflow: hidden;
}

.slide-item {
  display: block;
  width: 1226px;
}

.banner .banner-prev,
.banner .banner-next {
  position: absolute;
  top: 50%;
  width: 41px;
  height: 69px;
  margin-top: -35px;
  z-index: 5;
  cursor: pointer;
  outline: none;
}

.banner-prev {
  background: url("images/icon-slides.png") no-repeat -84px 50%;
  left: 0;
  right: auto;
}

.banner-next {
  background: url("images/icon-slides.png") no-repeat -125px 50%;
  right: 0;
  left: auto;
}

.banner-prev:hover {
  background: url("images/icon-slides.png") no-repeat 0px 50%;
}

.banner-next:hover {
  background: url("images/icon-slides.png") no-repeat -43px 50%;
}

.banner-points {
  position: absolute;
  display: inline-block;
  width: 400px;
  left: auto;
  right: 30px;
  bottom: 20px;
  text-align: right;
  transform: translateZ(0);
  z-index: 10;
}

.banner-points .banner-point {
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 2px solid #fff;
  border-color: hsla(0, 0%, 100%, .3);
  border-radius: 10px;
  overflow: hidden;
  background: rgba(0, 0, 0, .4);
  opacity: 1;
  margin: 0 4px;
  cursor: pointer;
}

.banner-points .banner-point:hover {
  background: hsla(0,0%,100%,.4);
  border-color: rgba(0,0,0,.4);
}

.banner-points .active {
  background: hsla(0,0%,100%,.4);
  border-color: rgba(0,0,0,.4);
}

.banner-container {
  position: relative;
  height: 460px;
  display: flex;
}

.banner-slide {
  transition: all 1s ease-in-out;
}

.banner-container .image-container {
  /* width: 100%; */
  height: auto;
}


.image-container a {
  display: block;
}

.image-container a img {
  width: 100%;
}

/* 闪现轮播图 */
.banner-trans-enter-active {
  transition: all .10s ease-in-out;
  opacity: 1;
}

.banner-trans-leave-active {
  opacity: 0;
}

.banner-trans-enter, .banner-trans-leave-to {
    opacity: 0;
  }

.banner-trans-enter-to, .banner-trans-leave {
  opacity: 1;
}
```
[源码在此](https://github.com/StarlightUnion/Blog-Content/tree/master/Vue/banner)
