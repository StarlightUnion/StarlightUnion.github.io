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