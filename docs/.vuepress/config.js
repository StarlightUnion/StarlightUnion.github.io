module.exports = {
  title: '游客17846',
  description: 'Just do it!',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
    ['link', { rel: 'manifest', href: '/logo.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/iconfont.css' }]
  ],
  serviceWorker: true,
  base: '/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [{
      text: '首页',
      link: '/'
    }, {
      text: '博文',
      items: [{
        text: '前端技术',
        link: '/blog/frontend/summary'
      }, {
        text: '计算机基础',
        link: '/blog/cb/'
      }, {
        text: 'LeetCode',
        link: '/blog/leetcode/js/exercises-02'
      }, {
        text: '技术杂记',
        link: '/blog/others/summary'
      }]
    }, {
      text: '随笔',
      link: '/life&hobby/'
    }, {
      text: '关于',
      link: '/about/'
    }, {
      text: '链接',
      items: [{
        text: '思否',
        link: 'https://segmentfault.com/u/starlightunion'
      }, {
        text: '掘金',
        link: 'https://juejin.im/user/5ba792d2f265da0af7751bac'
      }, {
        text: 'Github',
        link: 'https://github.com/StarlightUnion'
      }]
    }],
    sidebar: {
      '/blog/frontend/': [
      {
        title: '系列汇总',
        path: '/blog/frontend/summary'
      }, {
        title: 'JavaScript基础',
        children: [
          '/blog/frontend/javascript/object-array-classification',
          '/blog/frontend/javascript/javascript-logical-operators',
          '/blog/frontend/javascript/javascript-mulit-array',
          '/blog/frontend/javascript/javascript-loop'
        ]
      }, {
        title: 'CSS/HTML',
        children: [
          '/blog/frontend/css&html/html-base-tag',
          '/blog/frontend/css&html/css-selector-2',
          '/blog/frontend/css&html/css-selector-1',
          '/blog/frontend/css&html/css-simple-progress',
          '/blog/frontend/css&html/css-border-radius'
        ]
      }, {
        title: 'Vue.js',
        children: [
          '/blog/frontend/vue/vue-swipe',
          '/blog/frontend/vue/vue-port-config',
          '/blog/frontend/vue/vue-transition'
        ]
      }, {
        title: 'React.js',
        children: [
          '/blog/frontend/react/react-install-error'
        ]
      }, {
        title: '小程序',
        children: [
          '/blog/frontend/miniprogram/miniprogram-summary-1'
        ]
      }, {
        title: 'BootStrap',
        children: [
          '/blog/frontend/bootstrap/bootstrap-select-reset-tip',
          '/blog/frontend/bootstrap/bootstrap-submit-validator',
          '/blog/frontend/bootstrap/bootstrap-validator&bootstrap-datetimepicker'
        ]
      }],
      '/blog/leetcode/': [
      {
        title: 'JavaScript',
        children: [
          '/blog/leetcode/js/exercises-02',
          '/blog/leetcode/js/exercises-01'
        ]
      }],
      '/blog/others/': [
      {
        title: '系列汇总',
        path: '/blog/others/summary'
      }, {
        title: '开发工具',
        // sidebarDepth: 3,
        children: [
          '/blog/others/devtool/nginx-deploy-summary',
          '/blog/others/devtool/nginx-start',
          '/blog/others/devtool/nginx-deploy-record',
          '/blog/others/devtool/github-sshkey-config',
          '/blog/others/devtool/git-remove-dir',
          '/blog/others/devtool/webstorm-background',
          '/blog/others/devtool/webstorm-tfs-2',
          '/blog/others/devtool/webstorm-tfs-1',
          '/blog/others/devtool/homebrew'
        ]
      }, {
        title: '博客相关',
        children: [
          '/blog/others/aboutblog/vuepress-build-blog-1'
        ]
      }]
    },
    lastUpdated: '上次更新时间'
    // lastUpdated: 'Last Updated'
  },
  plugins: [
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    '@vuepress/back-to-top',
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        const moment = require('moment');
        moment.locale(lang);

        const transform = (timestamp) => {
          timestamp = timestamp ? timestamp : new Date().getTime();
          const time = new Date(timestamp),
            y = time.getFullYear(),
            M = time.getMonth() + 1,
            d = time.getDate(),
            h = time.getHours(),
            m = time.getMinutes(),
            s = time.getSeconds();

          return y + '/' + addZero(M) + '/' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s);
        }

        const addZero = (m) => {
          return m < 10 ? '0' + m : m;
        }

        return transform(timestamp);

        // const now = moment(timestamp).fromNow() // Github上的时间
        // return now
      }
    }]
  ]
};