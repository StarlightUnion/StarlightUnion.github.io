<template>
  <div class="person-info">
    <img
      class="person-image"
      v-if="data.themeConfig.logo"
      :src="$withBase(data.themeConfig.logo)"
      :alt="data.themeConfig.logoAlt || 'logo'"
    >
  </div>
</template>

<script>
export default {
  name: 'PersonInfo',
  computed: {
    data () {
      return this.$site
    }
  }
}
</script>

<style lang="stylus">
  .person-info
    // width 25rem
    display flex
    flex-direction column
    .person-image
      width 6rem
      height 6rem
      border-radius 50%
</style>