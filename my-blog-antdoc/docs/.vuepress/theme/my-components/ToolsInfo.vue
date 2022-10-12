<template>
  <div class="tools-info">
    <p class="tools-title">小工具</p>
    <ul class="tools-list">
      <li v-for="(item, index) in $themeConfig.toolPages">
        <a
          :href="item.path"
          :title="item.name"
          target="_blank"
        >{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToolsInfo"
}
</script>

<style lang="less">
  @import "../styles/palette.less";

  .tools-info {
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    padding: 2rem 0;
    border-top: 1px solid #eaecef;
  }

  @media (max-width: @MQMobile) { // 719
    .tools-info {
      margin: 0;
      padding: 2rem;
      border-top: none;
      border-bottom: 1px solid #eaecef;
      width: 100%;
    }
  }
</style>