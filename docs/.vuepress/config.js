module.exports = {
  title: '游客17846',
  description: 'Just do it!',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
    ['link', { rel: 'manifest', href: '/logo.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
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
      // link: '/blog/javascript-logical-operators'
      items: [{
        text: '前端技术',
        link: '/blog/frontend/javascript-logical-operators'
      }, {
        text: '计算机基础',
        link: '/blog/cb/'
      }, {
        text: '技术杂记',
        link: '/blog/others/nginx-deploy-record'
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
        title: 'JavaScript基础',
        children: [
          '/blog/frontend/javascript-logical-operators',
          '/blog/frontend/javascript-mulit-array',
          '/blog/frontend/javascript-loop'
        ]
      }, {
        title: 'CSS/HTML',
        children: [
          '/blog/frontend/html-base-tag',
          '/blog/frontend/css-selector-2',
          '/blog/frontend/css-selector-1',
          '/blog/frontend/css-simple-progress',
          '/blog/frontend/css-border-radius'
        ]
      }, {
        title: 'Vue.js',
        children: [
          '/blog/frontend/vue-swipe',
          '/blog/frontend/vue-port-config',
          '/blog/frontend/vue-transition'
        ]
      }, {
        title: 'React.js',
        children: [
          '/blog/frontend/react-install-error'
        ]
      }, {
        title: '小程序',
        children: [
          '/blog/frontend/miniprogram-summary-1'
        ]
      }, {
        title: 'BootStrap',
        children: [
          '/blog/frontend/bootstrap-select-reset-tip',
          '/blog/frontend/bootstrap-submit-validator',
          '/blog/frontend/bootstrap-validator&bootstrap-datetimepicker'
        ]
      }, ],
      '/blog/others/': [
        '/blog/others/nginx-deploy-record',
        '/blog/others/github-sshkey-config',
        '/blog/others/git-remove-dir',
        '/blog/others/webstorm-background',
        '/blog/others/webstorm-tfs-2',
        '/blog/others/webstorm-tfs-1',
        '/blog/others/homebrew'
      ]
    },
    lastUpdated: '上次更新时间'
    // lastUpdated: 'Last Updated'
  },
  // sidebarDepth: 4,
  plugins: [
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    '@vuepress/back-to-top',
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)

        const transform = (timestamp) => {
          timestamp = timestamp ? timestamp : new Date().getTime();
          const time = new Date(timestamp)
          const y = time.getFullYear()
          const M = time.getMonth() + 1
          const d = time.getDate()
          const h = time.getHours()
          const m = time.getMinutes()
          const s = time.getSeconds()

          return y + '/' + addZero(M) + '/' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s)
        }

        const addZero = (m) => {
          return m < 10 ? '0' + m : m
        }

        return transform(timestamp)

        // const now = moment(timestamp).fromNow() // Github上的时间
        // return now
      }
    }]
  ]
};