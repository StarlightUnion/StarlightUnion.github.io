<template>
  <div class="sheet-container">
    <div class="sheet-tools"></div>
    <div id="sheet-online-container" ref="sheetContainer"></div>
  </div>
</template>

<script>
import Spreadsheet from "x-data-spreadsheet";
import zhCN from 'x-data-spreadsheet/src/locale/zh-cn';

import { IsMobileEnv } from "../util/my-util";

export default {
  name: "ExcelOnline",
  data() {
    return {
      sheet: null,
      options: {
        mode: "edit",
        showToolbar: true,
        showGrid: true,
        showContextmenu: true,
        view: {
          height: () => document.documentElement.clientHeight,
          width: () => document.documentElement.clientWidth
        },
        row: {
          len: 100,
          height: 25,
        },
        col: {
          len: 26,
          width: 100,
          indexWidth: 60,
          minWidth: 60,
        },
        style: {
          bgcolor: "#ffffff",
          align: "left",
          valign: "middle",
          textwrap: false,
          strike: false,
          underline: false,
          color: "#0a0a0a",
          font: {
            name: "Helvetica",
            size: 10,
            bold: false,
            italic: false,
          },
        }
      }
    }
  },
  methods: {
    InitSheet() {
      this.options.view = {
        height: () => this.$refs.sheetContainer.offsetHeight,
        width: () => this.$refs.sheetContainer.offsetWidth
      }

      Spreadsheet.locale("zh-cn", zhCN);
      this.sheet = new Spreadsheet(document.getElementById("sheet-online-container"), this.options);
    }
  },
  mounted() {
    // 初始化表格
    this.InitSheet();

    if (IsMobileEnv()) {
      this.$message.warning("不建议使用手机浏览器环境访问此页");
    }
  }
}
</script>

<style lang="less">
  .sheet-container {
    width: 100%;
    height: 100%;
    // & > .sheet-tools {
    //   height: 48px;
    //   display: flex;
    // }

    & > #sheet-online-container {
      width: 100%;
      height: 100%;
      // height: calc(100% - 48px);

      & * {
        box-sizing: content-box;
      }
    }
  }
</style>