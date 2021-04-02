module.exports = {
  title: "游客17846",
  description: "切图仔、CV/API工程师。",
  head: [
    ["link", {
      rel: "icon",
      href: "/logo.ico"
    }],
    ["link", {
      rel: "manifest",
      href: "/manifest.json"
    }],
    ["link", {
      rel: "apple-touch-icon",
      href: "/logo.png"
    }],
    ["link", {
      rel: "stylesheet",
      href: "/styles/iconfont.css"
    }]
  ],
  serviceWorker: true,
  base: "/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: "/logo.png",
    backToTop: true,
    algolia: true,
    nav: [{
        text: "首页",
        link: "/"
      }, {
        text: "博文",
        items: [{
          text: "前端技术",
          link: "/blog/frontend/"
        }, {
          text: "技术杂记",
          link: "/blog/other/"
          // }, {
          // text: "源码阅读",
          // link: "/blog/sourcecode/"
          // }, {
          //   text: "计算机基础",
          //   link: "/blog/cb/"
          // }, {
          //   text: "数据结构与算法",
          //   link: "/blog/algorithm/"
        }]
      },
      {
        text: "LeetCode",
        link: "/blog/leetcode/"
      },
      {
        text: "随想",
        link: "/thoughts/"
        // }, {
        //   text: "爱好",
        //   link: "/life&hobby/"
      }
    ],
    // sidebar: "auto",
    sidebar: {
      "/blog/frontend/": [{
        title: "快速导航",
        path: "/blog/frontend/"
      }, {
        title: "JS/ES6/ES6+",
        children: [
          "/blog/frontend/javascript/switch-case-and-scope",
          "/blog/frontend/javascript/create-new-object",
          "/blog/frontend/javascript/import-and-require",
          "/blog/frontend/javascript/export-and-export-default",
          "/blog/frontend/javascript/array-filter",
          "/blog/frontend/javascript/float-operation",
          "/blog/frontend/javascript/array-sort",
          "/blog/frontend/javascript/array-some-and-every-and-includes",
          "/blog/frontend/javascript/object-array-classification",
          "/blog/frontend/javascript/array-find-and-findindex",
          "/blog/frontend/javascript/javascript-logical-operators",
          "/blog/frontend/javascript/javascript-mulit-array",
          "/blog/frontend/javascript/javascript-loop"
        ]
      }, {
        title: "CSS/HTML",
        children: [
          "/blog/frontend/css&html/a-tag-download-image",
          "/blog/frontend/css&html/css-advance",
          "/blog/frontend/css&html/html-base-tag",
          "/blog/frontend/css&html/css-selector-2",
          "/blog/frontend/css&html/css-selector-1",
          "/blog/frontend/css&html/css-simple-progress",
          "/blog/frontend/css&html/css-border-radius",
          "/blog/frontend/css&html/box-model-and-box-sizing",
          "/blog/frontend/css&html/css-practical-skills",
          "/blog/frontend/css&html/html-practical-skills"
        ]
      }, {
        title: "Web APIs",
        children: [
          "/blog/frontend/web-apis/element-request-full-screen",
          "/blog/frontend/web-apis/element-resize-observer",
          "/blog/frontend/web-apis/setinterval-and-settimeout"
        ]
      }, {
        title: "Vue相关",
        children: [
          "/blog/frontend/vue/x-data-spreadsheet-practice",
          "/blog/frontend/vue/vue-swipe",
          "/blog/frontend/vue/vue-port-config",
          "/blog/frontend/vue/vue-transition"
        ]
      }, {
        title: "React相关",
        children: [
          "/blog/frontend/react/use-react-redux-hooks",
          "/blog/frontend/react/setstate-and-useeffect",
          "/blog/frontend/react/react-async-router-practice",
          "/blog/frontend/react/antd-table-scroll-y",
          "/blog/frontend/react/npm-run-eject",
          "/blog/frontend/react/use-modularized-antd-in-react",
          "/blog/frontend/react/react-errors-summary",
          "/blog/frontend/react/react-install-error"
        ]
      }, {
        title: "Webpack相关",
        children: [
          "/blog/frontend/webpack/devtool-source-map"
        ]
      }, {
        title: "小程序相关",
        children: [
          "/blog/frontend/miniprogram/miniprogram-summary-1"
        ]
      }, {
        title: "浏览器相关",
        children: [
          "/blog/frontend/browser/304-and-web-cache"
        ]
      }, {
        title: "GIS相关",
        children: [
          "/blog/frontend/gis/arcgis-api-for-js-4x",
          "/blog/frontend/gis/arcgis-api-for-js"
        ]
      }, {
        title: "未分类文章",
        children: [
          "/blog/frontend/other/swiper-loop-stop-on-last-slide",
          "/blog/frontend/other/use-echart-in-react-and-vue",
          "/blog/frontend/other/echart-basic-config",
          "/blog/frontend/other/bootstrap-select-reset-tip",
          "/blog/frontend/other/bootstrap-submit-validator",
          "/blog/frontend/other/bootstrap-validator&bootstrap-datetimepicker"
        ]
      }],
      "/blog/other/": [{
        title: "快速导航",
        path: "/blog/other/"
      }, {
        title: "系统环境相关",
        children: [
          "/blog/other/systemenv/telnet-netcat",
          "/blog/other/systemenv/wsl-config",
          "/blog/other/systemenv/terminal-command-completing",
          "/blog/other/systemenv/global-variable-config-for-windows",
          "/blog/other/systemenv/nodejs-config-for-centos",
          "/blog/other/systemenv/homebrew"
        ]
      }, {
        title: "开发工具相关",
        children: [
          "/blog/other/devtool/vscode-format-conflict",
          "/blog/other/devtool/vscode-plugins",
          "/blog/other/devtool/forked-repo-update-config",
          "/blog/other/devtool/gitlab-and-github",
          "/blog/other/devtool/gitlab-init",
          "/blog/other/devtool/folder-tree-content",
          "/blog/other/devtool/github-sshkey-config",
          "/blog/other/devtool/git-remove-dir",
          "/blog/other/devtool/webstorm-background",
          "/blog/other/devtool/webstorm-tfs-2",
          "/blog/other/devtool/webstorm-tfs-1"
        ]
      }, {
        title: "部署相关",
        children: [
          "/blog/other/aboutdeploy/sub-domain-deploy",
          "/blog/other/aboutdeploy/sub-directory-deploy",
          "/blog/other/aboutdeploy/nginx-proxy-resource",
          "/blog/other/aboutdeploy/nginx-config-https",
          "/blog/other/aboutdeploy/auto-deploy-nodejs",
          "/blog/other/aboutdeploy/nginx-deploy-for-centos",
          "/blog/other/aboutdeploy/nginx-error-summary-2",
          "/blog/other/aboutdeploy/nginx-error-summary-1",
          "/blog/other/aboutdeploy/nginx-deploy-summary",
          "/blog/other/aboutdeploy/nginx-start",
          "/blog/other/aboutdeploy/nginx-deploy-record"
        ]
      }, {
        title: "博客相关",
        children: [
          "/blog/other/aboutblog/window-is-not-defined",
          "/blog/other/aboutblog/vuepress-loading-mask",
          "/blog/other/aboutblog/vuepress-theme-antdocs",
          "/blog/other/aboutblog/modify-vuepress-theme",
          "/blog/other/aboutblog/vuepress-diy-plugin",
          "/blog/other/aboutblog/vuepress-plugin",
          "/blog/other/aboutblog/vuepress-build-blog"
        ]
      }],
      "/blog/sourcecode/": [{
        title: "快速导航",
        path: "/blog/sourcecode/"
      }],
      "/blog/leetcode/": [{
          title: "快速导航",
          path: "/blog/leetcode/"
        },
        {
          title: "JavaScript",
          children: [
            "/blog/leetcode/js/exercises-1371",
            "/blog/leetcode/js/exercises-680",
            "/blog/leetcode/js/exercises-560",
            "/blog/leetcode/js/exercises-392",
            "/blog/leetcode/js/exercises-350",
            "/blog/leetcode/js/exercises-152",
            "/blog/leetcode/js/exercises-105",
            "/blog/leetcode/js/exercises-104",
            "/blog/leetcode/js/exercises-102",
            "/blog/leetcode/js/exercises-76",
            "/blog/leetcode/js/exercises-50",
            "/blog/leetcode/js/exercises-33",
            "/blog/leetcode/js/exercises-25",
            "/blog/leetcode/js/exercises-24",
            "/blog/leetcode/js/exercises-09",
            "/blog/leetcode/js/exercises-08",
            "/blog/leetcode/js/exercises-07",
            "/blog/leetcode/js/exercises-06",
            "/blog/leetcode/js/exercises-05",
            "/blog/leetcode/js/exercises-04",
            "/blog/leetcode/js/exercises-03",
            "/blog/leetcode/js/exercises-02",
            "/blog/leetcode/js/exercises-01"
          ]
        }
      ],
      // "/thoughts/": [{
      //   title: "主页",
      //   path: "/thoughts/"
      // }],
      "/life&hobby/": [{
        title: "主页",
        path: "/life&hobby/"
      }, {
        title: "电子数码",
        children: [
          "/life&hobby/digital/benq-monitor-pd2500q"
        ]
      }, {
        title: "交通运输",
        children: [
          "/life&hobby/transportation/hzm-line5-experience"
        ]
      }]
    },
    lastUpdated: "Last Updated",
    homePageDisplayCount: 8, // 首页展示博文数量
    // tagColorHexs: ["#ff5500", "#2db7f5", "#87d068", "#108ee9", "#eb2f96", "#fa8c16", "#13c2c2", "#1e90ff", "#722ed1"],// 标签颜色设置 16进制颜色
    tagColorHexs: ["pink", "red", "orange", "green", "cyan", "blue", "purple"], // 标签颜色设置 预设七色
    filterStrs: ["导航", "爱好", "记录", "影片", "主页", "LeetCode"],
    contactInfo: [{
      icon: "iconfont icon-location",
      text: "Hangzhou, China"
    }, {
      icon: "iconfont icon-185078emailmailstreamline",
      text: "2387574095@qq.com"
    }],
    platformInfo: [{
      imgPath: "/images/site/github.jpeg",
      title: "GitHub",
      link: "https://github.com/StarlightUnion"
    }, {
      imgPath: "/images/site/gitee.jpeg",
      title: "Gitee",
      link: "https://gitee.com/StarlightUnion"
    }, {
      imgPath: "/images/site/juejin.jpg",
      title: "掘金",
      link: "https://juejin.im/user/5ba792d2f265da0af7751bac"
    }, {
      imgPath: "/images/site/sf.png",
      title: "思否",
      link: "https://segmentfault.com/u/starlightunion"
    }, {
      imgPath: "images/site/steam.jpg",
      title: "steam",
      link: "https://steamcommunity.com/id/StarlightUnion/"
    }],
    footers: [{
      text: "Powered by VuePress"
    }, {
      text: "Copyright © 2020 - Present 游客17846"
    }, {
      text: "浙ICP备20019615号-1",
      link: "http://beian.miit.gov.cn"
    }, {
      text: "浙公网安备 33010902002529号",
      link: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002529"
    }],
    toolPages: [{
      name: "在线表格",
      path: "/tools/excel-online.html"
    }]
  },
  globalUIComponents: ["Loading"],
  plugins: [
    // ["@vuepress/pwa", {
    //   serviceWorker: true,
    //   updatePopup: true
    // }],
    ["@vuepress/active-header-links", {
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor"
    }],
    "@vuepress/medium-zoom", ["@vuepress/last-updated", {
      transformer: (timestamp, lang) => {
        const moment = require("moment");
        moment.locale(lang);
        const now = moment(timestamp).fromNow() // Github上的时间
        return now
      }
    }],
    ["@vuepress/google-analytics", {
      "ga": "UA-165879949-1" // UA-00000000-0
    }],
    ["vuepress-plugin-helper-live2d", {
      live2d: {
        enable: true,
        // 模型名称：https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        model: "shizuku", // shizuku, miku, haru, hibiki, hijiki, tororo
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
}