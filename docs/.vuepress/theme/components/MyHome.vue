<template>
  <div class="my-home">
    <div class="home-recent">
      <h3>最近博文：</h3>
      <template v-for="(item, index) in pages">
        <RecentArticle
          :pageData="item"
          :key="index"
        />
      </template>
    </div>
    <div class="home-person">
      <PersonInfo />
    </div>
  </div>
</template>

<script>
import RecentArticle from '@theme/components/RecentArticle.vue'
import PersonInfo from '@theme/components/PersonInfo.vue'

export default {
  name: 'MyHome',
  components: {
    RecentArticle,
    PersonInfo
  },
  data () {
    return {

    }
  },
  methods: {
    pagesDataHandle (datas) {
      let res = [], _res = []

      if (datas && datas.length) {
        datas.map(item => {
          if (item.frontmatter && item.frontmatter.date) {
            item.date = item.frontmatter.date
            item.tags = item.frontmatter.tags

            _res.push(item)
          }
        })
      }

      _res = _res.filter(item => {
        return !this.keyStringFilter(this.keyStrs, item.tags)
      })

      res = _res.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      }).splice(0, this.displayCount)

      // console.log(res)

      return res
    },
    // 关键词过滤
    keyStringFilter (keystrs, strs, flag = false) {
      strs.map(str => {
        flag = flag || keystrs.includes(str)
      })
      return flag
    }
  },
  computed: {
    pages () {
      console.log(this.$site.pages)
      return this.pagesDataHandle(this.$site.pages)
    },
    displayCount () {
      return this.$themeConfig.homePageDisplayCount
    },
    keyStrs () {
      return this.$themeConfig.filterStrs
    }
  }
}
</script>

<style lang="stylus">
  .my-home
    height auto
    padding 2rem
    display flex
    flex-direction row
    justify-content center
    .home-recent
      // min-width 60rem
      max-width 60rem
      width 100%
      h3
        padding-left 0.5rem
    .home-person
      display flex
      margin-left 3rem
      border-left 1px solid #eaecef

  @media (max-width: $MQMobile) // 719
    .my-home
      height auto
      padding 0
      flex-direction column-reverse
      .home-recent
        width 100%
      .home-person
        width 100%
        margin-left 0
        margin-top 2rem
        border-left 0

  // @media (max-width: $MQMobileNarrow)// 419
  //   .my-home
  //     height auto
  //     padding 0
  //     flex-direction column-reverse
</style>