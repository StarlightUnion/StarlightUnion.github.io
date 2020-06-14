module.exports = {
  title: '游客17846',
  description: 'Just do it !',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: '/styles/iconfont.css' }],
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
        text: '技术杂记',
        link: '/blog/others/summary'
      }, {
        text: '计算机基础',
        link: '/blog/cb/'
      }, {
        text: '数据结构与算法',
        link: '/blog/algorithm/summary'
      }]
    }, {
      text: 'LeetCode',
      link: '/blog/leetcode/summary'
    }, {
      text: '随笔',
      link: '/life&hobby/'
    }],
    // sidebar: 'auto',
    sidebar: {
      '/blog/frontend/': [
      {
        title: '系列汇总',
        path: '/blog/frontend/summary'
      }, {
        title: 'JavaScript基础',
        children: [
          '/blog/frontend/javascript/float-operation',
          '/blog/frontend/javascript/array-sort',
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
      '/blog/others/': [
      {
        title: '系列汇总',
        path: '/blog/others/summary'
      }, {
        title: '工具/环境相关',
        // sidebarDepth: 3,
        children: [
          '/blog/others/devtool/global-variable-config-for-windows',
          '/blog/others/devtool/nodejs-config-for-centos',
          '/blog/others/devtool/folder-tree-content',
          '/blog/others/devtool/github-sshkey-config',
          '/blog/others/devtool/git-remove-dir',
          '/blog/others/devtool/webstorm-background',
          '/blog/others/devtool/webstorm-tfs-2',
          '/blog/others/devtool/webstorm-tfs-1',
          '/blog/others/devtool/homebrew'
        ]
      }, {
        title: '部署相关',
        children: [
          '/blog/others/aboutdeploy/auto-deploy-nodejs',
          '/blog/others/aboutdeploy/nginx-deploy-for-centos',
          '/blog/others/devtool/nginx-error-summary-1',
          '/blog/others/devtool/nginx-deploy-summary',
          '/blog/others/devtool/nginx-start',
          '/blog/others/devtool/nginx-deploy-record'
        ]
      }, {
        title: '博客相关',
        children: [
          '/blog/others/aboutblog/modify-vuepress-theme',
          '/blog/others/aboutblog/vuepress-make-vue-plugin',
          '/blog/others/aboutblog/vuepress-plugin',
          '/blog/others/aboutblog/vuepress-build-blog'
        ]
      }],
      '/blog/leetcode/': [
      {
        title: '系列汇总',
        path: '/blog/leetcode/summary'
      },
      {
        title: 'JavaScript',
        children: [
          '/blog/leetcode/js/exercises-680',
          '/blog/leetcode/js/exercises-560',
          '/blog/leetcode/js/exercises-152',
          '/blog/leetcode/js/exercises-102',
          '/blog/leetcode/js/exercises-50',
          '/blog/leetcode/js/exercises-33',
          '/blog/leetcode/js/exercises-09',
          '/blog/leetcode/js/exercises-08',
          '/blog/leetcode/js/exercises-07',
          '/blog/leetcode/js/exercises-06',
          '/blog/leetcode/js/exercises-05',
          '/blog/leetcode/js/exercises-04',
          '/blog/leetcode/js/exercises-03',
          '/blog/leetcode/js/exercises-02',
          '/blog/leetcode/js/exercises-01'
        ]
      }],
      // '/life&hobby/': [
      //   {
      //     title: '电子数码',
      //     children: [
      //       '/life&hobby/digital/benq-monitor-pd2500q'
      //     ]
      //   }
      // ]
    },
    lastUpdated: 'Last Updated',
    homePageDisplayCount: 6,
    filterStrs: ['汇总', '随笔', 'LeetCode'],
    contactInfo: [{
      icon: 'iconfont icon-location',
      text: 'Hangzhou, China'
    }, {
      icon: 'iconfont icon-185078emailmailstreamline',
      text: '2387574095@qq.com'
    }],
    platformInfo: [{
      imgPath: '/images/site/github.jpeg',
      title: 'GitHub',
      link: 'https://github.com/StarlightUnion'
    }, {
      imgPath: '/images/site/juejin.jpg',
      title: '掘金',
      link: 'https://juejin.im/user/5ba792d2f265da0af7751bac'
    }, {
      imgPath: '/images/site/sf.png',
      title: '思否',
      link: 'https://segmentfault.com/u/starlightunion'
    }],
    footers: [{
      text: 'Powered by VuePress'
    }, {
      text: 'Copyright © 2020 - Present 游客17846'
    }, {
      text: '浙ICP备20019615号-1',
      link: 'http://beian.miit.gov.cn'
    }, {
      text: '浙公网安备 33010902002529号',
      link: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002529'
    }],
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
        const now = moment(timestamp).fromNow() // Github上的时间
        return now
      }
    }],
    ['@vuepress/google-analytics', {
      'ga': 'UA-165879949-1' // UA-00000000-0
    }],
    ['vuepress-plugin-helper-live2d', {
      live2d: {
        enable: true,
        // 模型名称：https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        model: 'shizuku', // shizuku, miku, haru, hibiki, hijiki, tororo
        display: {
          position: "right",
          width: 135,
          height: 300,
          hOffset: 10,
          vOffset: 60,
        },
        mobile: {
          show: false
        },
        react: {
          opacity: 0.8
        }
      }
    }]
  ]
};