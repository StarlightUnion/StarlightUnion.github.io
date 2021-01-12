<template>
  <div class="excel-container">
    <div class="excel-tools"></div>
    <div id="excel-online-container"></div>
  </div>
</template>

<script>
import Spreadsheet from "x-data-spreadsheet";
import zhCN from 'x-data-spreadsheet/src/locale/zh-cn';

export default {
  name: "ExcelOnline",
  data() {
    return {
      sheet: null
    }
  },
  mounted() {
    // 设置标题
    document.title = `在线表格 | ${this.$title}`;

    Spreadsheet.locale("zh-cn", zhCN);
    this.sheet = new Spreadsheet(document.getElementById('excel-online-container'));
  }
}
</script>

<style lang="less">
  .excel-container {
    width: 100%;
    height: 100%;
    & > .excel-tools {
      height: 48px;
    }

    & > #excel-online-container {
      width: 100%;
      height: calc(100% - 48px);
      // overflow: hidden;

      & * {
        box-sizing: content-box;
      }

      & > .x-spreadsheet {
        width: 100%;
        height: 100%;
        position: relative;
      }
    }
  }
</style>