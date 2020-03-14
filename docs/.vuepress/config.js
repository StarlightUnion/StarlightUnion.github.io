module.exports = {
  title: '游客17846',
  description: 'Just do it!',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
    ['link', { rel: 'manifest', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
  ],
  serviceWorker: true,
  base: '/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: '上次更新时间',
    nav: [{
      text: '博文',
      link: '/blog/javascript-logical-operators'
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
      '/blog/': [
      {
        title: 'JavaScript基础',
        children: [
          '/blog/javascript-logical-operators',
          '/blog/javascript-mulit-array',
          '/blog/javascript-loop'
        ]
      }, {
        title: 'CSS世界',
        children: [
          '/blog/css-simple-progress',
          '/blog/css-border-radius'
        ]
      }, {
        title: 'Vue.js',
        children: [
          '/blog/vue-swipe',
          '/blog/vue-port-config',
          '/blog/vue-transition'
        ]
      }, {
        title: 'React.js',
        children: [
          '/blog/react-install-error'
        ]
      }, {
        title: '小程序',
        children: [
          '/blog/miniprogram-summary-1'
        ]
      }, {
        title: 'BootStrap',
        children: [
          '/blog/bootstrap-select-reset-tip',
          '/blog/bootstrap-submit-validator',
          '/blog/bootstrap-validator&bootstrap-datetimepicker'
        ]
      }, {
        title: '杂记',
        children: [
          '/blog/webstorm-background',
          '/blog/webstorm-tfs-2',
          '/blog/webstorm-tfs-1',
          '/blog/homebrew'
        ]
      }],
      '/about/': [
        '/about/'
      ]
    },
    lastUpdated: 'Last Updated'
  },
  // sidebarDepth: 2,
  plugins: [
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    '@vuepress/back-to-top'
  ]
};