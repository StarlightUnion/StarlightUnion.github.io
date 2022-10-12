(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{801:function(r,t,a){"use strict";a.r(t);var s=a(39),v=Object(s.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"nginx部署笔记-常见错误总结-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx部署笔记-常见错误总结-1"}},[r._v("#")]),r._v(" Nginx部署笔记-常见错误总结（1）")]),r._v(" "),t("ClientOnly",[t("display-bar",{attrs:{displayData:r.$frontmatter}})],1),r._v(" "),t("blockquote",[t("p",[r._v("最近一直在各种服务器上用Nginx部署系统，也遇到了不少问题，在此做个记录📝。")])]),r._v(" "),t("h2",{attrs:{id:"一、端口被占用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、端口被占用"}},[r._v("#")]),r._v(" 一、端口被占用")]),r._v(" "),t("p",[t("img",{attrs:{src:"/images/other/aboutdeploy/nginx-error-summary-1-01.png",alt:"nginx-error-summary-1-01"}})]),r._v(" "),t("p",[r._v("在部署时出现了上图这个错误，提示："),t("code",[r._v("bind<> to 0.0.0.0:9091 failed <0013: An attempt was made to access a socket in a way forbidden by its access permission>")]),r._v("。")]),r._v(" "),t("p",[r._v("还好我启动后"),t("code",[r._v("nginx -t")]),r._v("测试了一下。")]),r._v(" "),t("p",[r._v("错误提示大意应该是"),t("code",[r._v("9091")]),r._v("端口"),t("strong",[r._v("已被使用")]),r._v("。我看了一下配置，原来是配置里面某个端口号写错了。。。")]),r._v(" "),t("h2",{attrs:{id:"二、自启动配置失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、自启动配置失败"}},[r._v("#")]),r._v(" 二、自启动配置失败")]),r._v(" "),t("p",[t("img",{attrs:{src:"/images/other/aboutdeploy/nginx-error-summary-1-02.png",alt:"nginx-error-summary-1-02"}})]),r._v(" "),t("p",[t("code",[r._v("install")]),r._v("的时候发现报错了，👆上图所示。")]),r._v(" "),t("p",[r._v("想着会不会是版本的原因，因为这个服务器的操作系统版本是"),t("code",[r._v("Windows Server 2008 R2 Standard")]),r._v("，非常有年代感的视图界面。。我之前用过的服务器都是"),t("code",[r._v("2012 R2")]),r._v("。。")]),r._v(" "),t("p",[r._v("后来检查了一下"),t("code",[r._v("IIS")]),r._v("里的"),t("code",[r._v(".NET Framework")]),r._v("版本发现是2.0....")]),r._v(" "),t("blockquote",[t("p",[t("strong",[r._v("查看方法：")])]),r._v(" "),t("ul",[t("li",[t("p",[r._v("打开"),t("code",[r._v("IIS")]),r._v("，在最右边栏可以看到👇")]),r._v(" "),t("p",[t("img",{attrs:{src:"/images/other/aboutdeploy/nginx-error-summary-1-03.png",alt:"nginx-error-summary-1-03"}})])]),r._v(" "),t("li",[t("p",[r._v("点击可以看到👇")]),r._v(" "),t("p",[t("img",{attrs:{src:"/images/other/aboutdeploy/nginx-error-summary-1-04.png",alt:"nginx-error-summary-1-04"}})])])])]),r._v(" "),t("p",[r._v("根据"),t("a",{attrs:{href:"/blog/other/aboutdeploy/nginx-start"}},[r._v("Nginx部署笔记-Windows（2）开机自启动")]),r._v("一文：")]),r._v(" "),t("p",[t("img",{attrs:{src:"/images/other/aboutdeploy/nginx-error-summary-1-05.png",alt:"nginx-error-summary-1-05"}})]),r._v(" "),t("p",[r._v("似乎问题已解决？")]),r._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[r._v("WARNING")]),r._v(" "),t("p",[r._v("我"),t("strong",[r._v("更改了版本后重新按步骤配置")]),r._v("，发现仍然报错，后来服务器重启之后试了一下"),t("code",[r._v("install")]),r._v("，终于成功。。")])]),r._v(" "),t("h2",{attrs:{id:"三、内外网不通"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、内外网不通"}},[r._v("#")]),r._v(" 三、内外网不通")]),r._v(" "),t("p",[r._v("对于一些"),t("strong",[r._v("内外网不相通")]),r._v("的服务器，在配置外网时，某些"),t("strong",[r._v("验证请求等")]),r._v("需在服务端访问的请求"),t("code",[r._v("需要配置内网地址")]),r._v("，否则将会出现外网请求超时（"),t("s",[r._v("由于内外网不相通")]),r._v("）而影响用户正常访问。")])],1)}),[],!1,null,null,null);t.default=v.exports}}]);