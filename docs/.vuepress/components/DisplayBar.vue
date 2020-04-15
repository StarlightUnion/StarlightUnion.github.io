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
      tags: '',
      createTime: ''
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
      this.tags = this.displayData.tags.length ? this.displayData.tags.split(',') : [];
      // this.createTime = this.dateHandle(this.displayData.date);
      this.createTime = this.displayData.date;
    } else {
      this.tags = [];
      this.createTime = '';
    }
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
</style>