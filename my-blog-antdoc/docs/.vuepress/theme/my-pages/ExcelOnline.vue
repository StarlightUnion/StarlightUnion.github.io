<template>
  <div id="excel-online-container"></div>
</template>

<script>
import Spreadsheet from "x-data-spreadsheet";
import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn';

export default {
  name: "ExcelOnline",
  data() {
    return {
      sheet: null
    }
  },
  mounted() {
    Spreadsheet.locale("zh-cn", zhCN);
    this.sheet = new Spreadsheet(document.getElementById('excel-online-container'))
  }
}
</script>

<style>

</style>