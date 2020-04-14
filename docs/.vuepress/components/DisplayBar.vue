<template>
  <div class="bar-container">
    <div class="bar-item">
      <span class="iconfont icon-time"></span>
      <span>{{createTime}}</span>
    </div>
    <div class="bar-item">
      <span class="iconfont icon-tag"></span>
      <span v-for="(item, key) in tags" :key="key">{{item}}</span>
    </div>
  </div>
</template>

<script>
import { transform } from '../public/utils/time.js'

export default {
  name: 'DisplayBar',
  props: ['displayData'],
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
    this.tags = this.displayData.tags.split(',');
    // this.createTime = this.dateHandle(this.displayData.date);
    this.createTime = this.displayData.date;
  }
}
</script>

<style>
  .bar-container {
    display: flex;
    color: rgba(0,0,0,.54);
    font-size: 12px;
    font-weight: 300;
  }

  .bar-container span:not(.iconfont) {
    cursor: pointer;
    font-style: italic;
  }

  .bar-container span:not(.iconfont):hover {
    color: #87cefa;/* 主题色 $accentColor */
  }

  .iconfont {
    font-size: 12px;
    font-weight: 600;
  }

  .bar-item {
    margin-right: 20px;
  }
</style>