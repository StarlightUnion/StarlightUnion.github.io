<template>
  <div class="recent-article">
    <a
      class="art-title"
      :href="pageData.regularPath"
    >
      {{pageData.title}}
    </a>

    <div class="art-time">
      <span class="iconfont icon-time"></span>
      <span>{{pageData.date}}</span>
    </div>

    <div
      class="art-tags"
      v-if="pageData.tags.length > 0"
    >
      <span class="iconfont icon-tag"></span>
      <a-tag
        v-for="(item, key) in pageData.tags"
        :key="key"
        :color="randomColor()"
      >
      <!-- <a-tag
        v-for="(item, key) in pageData.tags"
        :key="key"
      > -->
        {{item.trim()}}
      </a-tag>
    </div>

    <div class="art-info">
      <!-- <span>大小：{{pageData.size}}</span> -->
      <span>最后更新时间：{{pageData.lastUpdated}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentArticle',
  props: ['pageData'],
  methods: {
    // 标签随机颜色
    randomColor () {
      const index = (Math.random() * (this.tagColorHexs.length - 1)).toFixed(0);
      return this.tagColorHexs[index];
    }
  },
  computed: {
    // 获取随机颜色
    tagColorHexs () {
      return this.$themeConfig.tagColorHexs;
    }
  }

}
</script>

<style lang="less">
  @import "../styles/palette.less";

  .recent-article {
    box-sizing: border-box;
    padding: 0 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all .4s linear;
    transform: translate3d(0, -0.25rem, 0);
    &:hover {
      // box-shadow: 0 0.2rem 0.8rem rgba(0,0,0,.1);
      // transform: scale(1);
      background: #f5f5f5;
    }

    a, div {
      line-height: 2rem;
    }

    .art-title {
      font-size: 1.2rem;
      font-weight: 700;
    }

    .art-time, .art-tags {
      font-size: 0.8rem;

      .icon-font {
        font-weight: 600;
      }

      .icon-time + span {
        margin-left: 0.125rem;
      }

      .icon-tag ~ a {
        font-weight: 400;
        margin: 0 0.125rem;
      }
    }

    // .art-tags {
    //   a {
    //     background-color: rgba(27,31,35,.05);
    //     border-radius: 0.25rem;
    //     padding: 0.25rem;
    //     cursor: pointer;
    //     color: #000;

    //     &:hover {
    //       color: @accentColor;
    //     }
    //   }
    // }

    .art-info {
      font-size: 0.8rem;
      span {
        margin-right: 0.25rem;

        &:hover {
          color: @accentColor;
        }
      }
    }
  }
</style>