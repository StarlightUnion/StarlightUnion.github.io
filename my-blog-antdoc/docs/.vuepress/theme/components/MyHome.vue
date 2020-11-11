<template>
  <div class="my-home">
    <div class="home-recent">
      <h3>最近博文（近{{displayCount}}篇）：</h3>
      <a-timeline :pending="isPending">
        <a-timeline-item color="green" v-for="(item, index) in pages" v-if="index==0">
          <RecentArticle
            :pageData="item"
            :key="index"
          />
        </a-timeline-item>
        <a-timeline-item v-else>
          <RecentArticle
            :pageData="item"
            :key="index"
          />
        </a-timeline-item>
      </a-timeline>
      <a-button
        class="load-more"
        type="primary"
        :disabled="isDisabled"
        @click="loadMore"
      >
        {{btnTxt}}
      </a-button>
    </div>
    <div class="home-person">
      <PersonInfo />
    </div>
  </div>
</template>

<script>
import RecentArticle from './RecentArticle.vue';
import PersonInfo from './/PersonInfo.vue';
import { message } from 'ant-design-vue';

export default {
  name: 'MyHome',
  components: {
    RecentArticle,
    PersonInfo
  },
  data () {
    return {
      pages: [],
      displayCount: 0,
      pageDatas: null,
      isPending: false,
      isDisabled: false,
      btnTxt: "加载更多(10条)",
      count: 0// 点击次数
    }
  },
  methods: {
    pagesDataHandle (datas) {
      let res = [], _res = [];

      if (datas && datas.length) {
        datas.map(item => {
          if (item.frontmatter && item.frontmatter.date) {
            item.date = item.frontmatter.date;
            item.tags = item.frontmatter.tags;

            _res.push(item);
          }
        });
      }

      _res = _res.filter(item => {
        return !this.keyStringFilter(this.keyStrs, item.tags);
      });

      this.pageDatas = res = _res.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      return res.filter((item, index) => index < this.displayCount);
    },
    // 关键词过滤
    keyStringFilter (keystrs, strs, flag = false) {
      strs.map(str => {
        flag = flag || keystrs.includes(str);
      })
      return flag;
    },
    // 加载更多
    loadMore() {
      const length = this.pageDatas.length;

      if (Array.isArray(this.pageDatas) && this.pageDatas.length) {
        this.isPending = true;

        if (this.displayCount + 10 >= length) {
          this.displayCount = length;
          this.pages = this.pageDatas;

          // 禁用按钮
          this.isDisabled = true;
          this.btnTxt = "暂无更多";
          message.info("博文已全部加载")
        } else {
          this.displayCount += 10;
          this.pages = this.pageDatas.filter((item, index) => {
            return index < this.displayCount;
          });
        }

        this.isPending = false;
      }
    },
    reset() {
      this.pages = [];
      this.displayCount = 0;
      this.pageDatas = null;
      this.isPending = false;
      this.isDisabled = false;
      this.btnTxt = "加载更多(10条)";
      this.count = 0;
    }
  },
  mounted () {
    // 重置
    this.reset();

    this.displayCount = this.$themeConfig.homePageDisplayCount;
    this.pages = this.pagesDataHandle(this.$site.pages);
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

    .home-recent {
      // min-width: 60rem;
      max-width: 60rem;
      width: 100%;
      h3 {
        padding-left: 0.5rem;
      }

      .load-more {
        margin: 1rem;
      }
    }

    .home-person {
      max-width: 400px;
      display: flex;
      margin-left: 3rem;
      border-left: 1px solid #eaecef;
    }
  }

  @media (max-width: @MQMobile) { // 719
    .my-home {
      height: auto;
      padding: 0;
      flex-direction: column-reverse;

      .home-recent {
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