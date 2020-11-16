<template>
  <div class="display-bar">
    <div class="bar-item" v-if="createTime.length > 0">
      <span class="iconfont icon-time"></span>
      <span>{{createTime}}</span>
    </div>

    <div class="bar-item" v-if="tags.length > 0">
      <span class="iconfont icon-tag"></span>
      <a-tag
        v-for="(item, key) in tags"
        :key="key"
        :color="randomColor()"
      >
        {{item.trim()}}
      </a-tag>
    </div>

    <div class="bar-item" v-if="recommend !== null">
      <span class="iconfont icon-like"></span>
      <span
        class="iconfont icon-stars"
        v-for="item in recommend_int"
      ></span>
      <span
        class="iconfont icon-star-half"
        v-show="recommend_dec === 0.5"
      ></span>
      <span>{{recommend}}/5</span>
    </div>

    <div class="difficulty" v-if="difficulty.length > 0">
      难度：<span :style="{'color': diffColor}">{{difficulty}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayBar',
  props: {
    displayData: { type: Object }
  },
  data () {
    return {
      colors: {'简单': '#009975', '中等': '#ed7336', '困难': '#ec4c47'},
      // tags: '',
      // createTime: '',
      recommend: null,
      recommend_int: 0,
      recommend_dec: 0,
      difficulty: '',
      diffColor: ''
    }
  },
  methods: {
    // 标签随机颜色
    randomColor () {
      const index = (Math.random() * (this.tagColorHexs.length - 1)).toFixed(0);
      return this.tagColorHexs[index];
    }
  },
  computed: {
    // 标签
    tags () {
      return this.displayData.tags.length ? this.displayData.tags : []
    },
    // 时间
    createTime () {
      return this.displayData.date ? this.displayData.date : ''
    },
    // 获取随机颜色
    tagColorHexs () {
      return this.$themeConfig.tagColorHexs;
    }
  },
  mounted () {
    if (this.displayData) {
      // 推荐
      if (this.displayData.recommend) {
        this.recommend = this.displayData.recommend;
        this.recommend_int = parseInt(this.recommend);
        this.recommend_dec = this.displayData.recommend - this.recommend_int;
      } else {
        this.recommend = null;
      }

      // 难度
      if (this.displayData.difficulty) {
        this.difficulty = this.displayData.difficulty;
        this.diffColor = this.colors[this.difficulty];
      }
    } else {
      this.recommend = null;
    }
  }
}
</script>

<style lang="less">
  @import "../styles/palette.less";

  .display-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: rgba(0,0,0,.54);
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 2rem;

    // span:not(.iconfont) {
    //   cursor: pointer;
    //   // font-style: italic;

    //   &:hover {
    //     color: @accentColor;
    //   }
    // }

    .iconfont {
      font-size: 0.8rem;
      font-weight: 600;
    }

    .bar-item {
      margin-right: 1.25rem;
    }

    .icon-time + span {
      margin-left: 0.125rem;
    }

    .icon-like {
      & ~ span {
        cursor: pointer;
        font-style: italic;
      }

      & ~ .icon-stars {
        margin: 0 0.125rem;
      }

      & ~ .icon-star-half {
        margin: 0 -0.0625rem;
      }
    }
  }
</style>