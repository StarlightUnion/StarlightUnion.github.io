<template>
  <div class="tool-page">
    <component v-if="dynamicComponent" :is="dynamicComponent"></component>
  </div>
</template>

<script>
export default {
  name: "Tool",
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted() {
    const toolType = this.$page.frontmatter.toolType;

    if (toolType === "excel-online") {
      import("../my-pages/ExcelOnline").then(moudle => {
        this.dynamicComponent = moudle.default;
      })
    }
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