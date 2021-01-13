<template>
  <div class="tool-page">
    <ExcelOnline v-if="$page.frontmatter.toolType === 'excel-online'" />
  </div>
</template>

<script>
import ExcelOnline from "../my-pages/ExcelOnline";

export default {
  name: "Tool",
  components: {
    ExcelOnline
  }
}
</script>

<style lang="less">
  .tool-page {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 4.25rem;
    position: relative;
    overflow: hidden;
  }
</style>