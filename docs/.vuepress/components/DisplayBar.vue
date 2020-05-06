<template>
  <div class="display-bar">
    <div class="bar-item" v-show="createTime.length">
      <span class="iconfont icon-time"></span>
      <span>{{createTime}}</span>
    </div>
    <div class="bar-item" v-show="tags.length">
      <span class="iconfont icon-tag"></span>
      <span v-for="(item, key) in tags" :key="key">{{item.trim()}}</span>
    </div>
    <div class="bar-item" v-show="recommend">
      <span class="iconfont icon-like"></span>
      <span class="iconfont icon-stars" v-for="item in recommend_int"></span>
      <span class="iconfont icon-star-half" v-show="recommend_dec === 0.5"></span>
      <span>{{recommend}}/5</span>
    </div>
    <div class="difficulty" v-show="difficulty.length">
      难度：<span :style="{'color': diffColor}">{{difficulty}}</span>
    </div>
  </div>
</template>

<script>
// import { transform } from '../public/utils/time.js'

export default {
  name: 'DisplayBar',
  props: {
    displayData: { type: Object }
  },
  data () {
    return {
      colors: {'简单': '#009975', '中等': '#ed7336', '困难': '#ec4c47'},
      tags: '',
      createTime: '',
      recommend: null,
      recommend_int: 0,
      recommend_dec: 0,
      difficulty: '',
      diffColor: ''
    }
  },
  // methods: {
  //   dateHandle: (date) => {
  //     const _date = new Date(date).getTime();
  //     return transform(_date);
  //   }
  // },
  mounted () {
    if (this.displayData) {
      // 标签
      this.tags = this.displayData.tags.length ? this.displayData.tags.split(',') : [];

      // 时间
      // this.createTime = this.dateHandle(this.displayData.date);
      this.createTime = this.displayData.date;

      // 推荐
      if (this.displayData.recommend) {
        this.recommend = this.displayData.recommend;
        this.recommend_int = parseInt(this.recommend);
        this.recommend_dec = this.displayData.recommend - this.recommend_int;
      } else {
        this.recommend = null;
      }

      // 难度
      if (this.displayData.difficulty.length) {
        this.difficulty = this.displayData.difficulty;
        this.diffColor = this.colors[this.difficulty];
      }
    } else {
      this.tags = [];
      this.createTime = '';
      this.recommend = null;
    }

    // console.log(this.displayData);
  }
}
</script>

<style lang="stylus">
  .display-bar
    display flex
    color rgba(0,0,0,.54)
    font-size 12px
    font-weight 400

    span:not(.iconfont)
      cursor pointer
      font-style italic

    span:not(.iconfont):hover
      color $accentColor

    .iconfont
      font-size 12px
      font-weight 600

    .bar-item
      margin-right 20px

    .icon-time + span
      margin-left 2px

    .icon-tag ~ span
      margin: 0 2px

    .icon-like ~ span
      cursor pointer
      font-style italic

    .icon-like ~ .icon-stars
      margin 0 2px

    .icon-like ~ .icon-star-half
      margin 0 -1px
</style>