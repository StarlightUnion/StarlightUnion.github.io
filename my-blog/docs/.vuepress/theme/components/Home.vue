<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    <header
      class="hero"
      v-if="data.heroImage"
      :style="{'background-image': 'url(' + $withBase(data.heroImage) + ')'}"
    >
      {{ data.heroText || $title || 'Hello' }}
    </header>

    <MyHome />

    <MyFooter
      v-if="configData.footer !== null"
      :footers="configData.footers"
    />
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import MyFooter from '@theme/components/MyFooter.vue'
import MyHome from '@theme/components/MyHome.vue'

export default {
  name: 'Home',
  components: {
    NavLink,
    MyFooter,
    MyHome
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    configData () {
      return this.$themeConfig
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding-top $navbarHeight
  display block
  position relative
  .hero
    text-align center
    background-size cover
    background-repeat no-repeat
    background-position center
    background-attachment scroll
    height 15rem
    line-height 15rem
    font-size 3rem
    color #fff
</style>
