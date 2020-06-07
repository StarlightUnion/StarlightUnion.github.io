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
      <a
        v-for="(item, key) in pageData.tags"
        :key="key"
      >
        {{item.trim()}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentArticle',
  props: ['pageData']

}
</script>

<style lang="stylus">
  .recent-article
    box-sizing border-box
    padding 1rem
    display flex
    flex-direction column
    // border-bottom 1px solid #eaecef
    transition all .4s linear
    transform translate3d(0, -0.25rem, 0)
    a, div
      line-height 2rem
    .art-title
      font-size 1.2rem
      font-weight 700
    .art-time, .art-tags
      font-size: 0.8rem
      .icon-font
        font-weight 600
      .icon-time + span
        margin-left 0.125rem
      .icon-tag ~ a
        font-weight 400
        margin: 0 0.125rem
    .art-tags
      a
        background-color rgba(27,31,35,.05)
        border-radius 0.25rem
        padding 0.25rem
        cursor pointer
        color #000
      a:hover
        color $accentColor

  .recent-article:hover
    box-shadow 0 0.2rem 0.8rem rgba(0,0,0,.1)
</style>