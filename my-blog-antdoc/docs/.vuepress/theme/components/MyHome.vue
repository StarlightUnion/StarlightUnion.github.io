<template>
  <div class="my-home">
    <a-spin :spinning="isSpinning" class="home-recent-spin">
      <div class="home-recent">
        <template v-for="(item, index) in pages">
          <RecentArticle :pageData="item" :key="index" />
        </template>
        <div class="pagination">
          <a-pagination
              v-model="current"
              show-size-changer
              show-quick-jumper
              :page-size.sync="pageSize"
              :total="total"
              @change="onChange"
              @showSizeChange="onShowSizeChange"
          />
        </div>
      </div>
    </a-spin>
    <div class="home-person">
      <PersonInfo />
      <ToolsInfo />
    </div>
  </div>
</template>

<script>
import RecentArticle from '../my-components/RecentArticle';
import PersonInfo from '../my-components/PersonInfo';
import ToolsInfo from '../my-components/ToolsInfo';
import { message } from 'ant-design-vue';
import { cloneDeep } from 'loadsh';

export default {
  name: 'MyHome',
  components: {
    RecentArticle,
    PersonInfo,
    ToolsInfo
  },
  data () {
    return {
      pages: [],
      pageDatas: null,
      /** 是否显示loading */
      isSpinning: true,
      current: 1,
      pageSize: 10,
      total: 0
    }
  },
  methods: {
    /**
     * 处理
     * @param datas
     * @returns {*}
     */
    pagesDataHandle (datas) {
      return datas
        .filter(item => item?.frontmatter?.date && item?.frontmatter?.tags?.length)
        .map(item => {
          return {
            ...item,
            ...{
              date: item.frontmatter.date,
              tags: item.frontmatter.tags
            }
          }
        })
        .filter(item => !this.keyStringFilter(this.keyStrs, item.tags))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    /**
     * 关键词过滤 判断是否包含关键词
     * @param keystrs
     * @param strs
     */
    keyStringFilter (keystrs, strs) {
      return strs.reduce((acc, str) => acc || keystrs.includes(str), false);
    },
    /**
     * 重置
     */
    reset() {
      this.pages = [];
      this.pageSize = 0;
      this.current = 1;
      this.total = 0;
      this.pageDatas = null;
      this.isSpinning = true;
    },
    /**
     * 处理pageSize change
     * @param current
     * @param pageSize
     */
    onShowSizeChange(current, pageSize) {
      this.isSpinning = true;
      const _data = cloneDeep(this.pageDatas);
      this.pages = _data.slice((current - 1) * pageSize, current * pageSize);
      this.isSpinning = false;
    },
    /**
     * 处理页码change
     * @param current
     * @param pageSize
     */
    onChange(current, pageSize) {
      this.isSpinning = true;
      const _data = cloneDeep(this.pageDatas);
      this.pages = _data.slice((current - 1) * pageSize, current * pageSize);
      this.isSpinning = false;
    }
  },
  mounted () {
    // 重置
    this.reset();

    this.pageSize = this.$themeConfig.homePageDisplayCount;
    this.pageDatas = this.pagesDataHandle(this.$site.pages);
    this.total = this.pageDatas.length;
    const _data = cloneDeep(this.pageDatas);
    this.pages = _data.slice(0, 10);

    this.isSpinning = false;
  },
  computed: {
    keyStrs () {
      return this.$themeConfig.filterStrs;
    }
  }
}
</script>

<style lang="less">
  @import "../styles/palette.less";

  .my-home {
    height: auto;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .home-recent-spin {
      max-width: 60rem;
      width: 100%;
    }

    .home-recent {
      &>h3 {
        padding-left: 0.5rem;
      }

      .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.5rem;
      }
    }

    .home-person {
      max-width: 400px;
      min-width: 360px;
      display: flex;
      flex-direction: column;
      margin-left: 3rem;
      border-left: 1px solid #eaecef;
    }
  }

  @media (max-width: @MQMobile) { // 719
    .my-home {
      height: auto;
      padding: 0;
      flex-direction: column-reverse;

      .home-recent-spin {
        width: 100%;
        padding: .5rem;
      }

      .home-person {
        max-width: none;
        width: 100%;
        margin-left: 0;
        margin-top: 2rem;
        border-left: 0;
      }
    }
  }

  // @media (max-width: @MQMobileNarrow) {// 419
  //   .my-home {
  //     height: auto;
  //     padding: 0;
  //     flex-direction: column-reverse;
  //   }
  // }
</style>