<template>
  <div class="tools-info">
    <p class="tools-title">小工具</p>
    <ul class="tools-list">
      <li v-for="(item, index) in $themeConfig.toolPages">
        <a :href="item.path" target="_blank">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToolsInfo",
  mounted() {
    console.log(this.$themeConfig)
  }
}
</script>

<style lang="less">
  @import "../styles/palette.less";

  .tools-info {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  @media (max-width: @MQMobile) { // 719
    .tools-info {
      padding: 0;
      border-bottom: 1px solid #eaecef;
      width: 100%;
    }
  }
</style>