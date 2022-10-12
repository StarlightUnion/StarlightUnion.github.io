(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{809:function(s,t,a){"use strict";a.r(t);var e=a(39),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"【git】删除github中的某个文件夹以及git常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【git】删除github中的某个文件夹以及git常用命令"}},[s._v("#")]),s._v(" 【Git】删除GitHub中的某个文件夹以及Git常用命令")]),s._v(" "),t("ClientOnly",[t("display-bar",{attrs:{displayData:s.$frontmatter}})],1),s._v(" "),t("blockquote",[t("p",[s._v("今天在把项目push到GitHub时把"),t("code",[s._v("node_modules")]),s._v("给传上去了，由于是新仓库，配置时忘记把"),t("code",[s._v("node_modules")]),t("strong",[s._v("加到.gitignore里面")]),s._v("去了。错已铸就，老老实实给删掉吧。。。")])]),s._v(" "),t("h2",{attrs:{id:"一、删除文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、删除文件夹"}},[s._v("#")]),s._v(" 一、删除文件夹")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" reponame "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入本地克隆下来的仓库文件夹")]),s._v("\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拉取GitHub上的项目文件")]),s._v("\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cached")]),s._v(" node_modules "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除之")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git rm file # 删除文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("⚠️"),t("strong",[s._v("注意："),t("strong",[s._v("这里")]),s._v("只会删除GitHub仓库上的"),t("code",[s._v("node_modules")]),s._v("，并不会删除本地文件夹里的。")])])]),s._v(" "),t("p",[s._v("如果报"),t("code",[s._v("fatal: pathspec 'node_modules' did not match any files")]),s._v("这个错误，你得看一下是不是"),t("strong",[s._v("文件夹名字输错了")]),s._v("或者是"),t("strong",[s._v("你进错仓库了。。")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'modify: Delete node_modules'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#提交备注")]),s._v("\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin master "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#push上去才完事儿，要注意")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("完事了，看一下有没有删除成功。")]),s._v(" "),t("h2",{attrs:{id:"二、上传文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、上传文件"}},[s._v("#")]),s._v(" 二、上传文件")]),s._v(" "),t("p",[s._v("有了删除文件，也记一下上传文件吧")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#dirname是要项目下要上传的文件夹名称")]),s._v("\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git add filename.file")]),s._v("\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'modify: Update dirname'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("Git中文件的状态有两种，"),t("strong",[s._v("已跟踪(tracked)"),t("strong",[s._v("和")]),s._v("未跟踪(untracked)")]),s._v("，已跟踪就是这个文件已经纳入"),t("strong",[s._v("版本控制")]),s._v("。")]),s._v(" "),t("p",[s._v("对于"),t("strong",[s._v("修改(modify)的文件")]),s._v("，由于它之前已被提交，上次的修改内容被记录了，所以它在"),t("strong",[s._v("已跟踪(tracked)"),t("strong",[s._v("状态。而对于")]),s._v("新增的文件")]),s._v("，它处于"),t("strong",[s._v("未跟踪状态")]),s._v("，此时就需要将其纳入已跟踪状态，"),t("code",[s._v("git add -A")]),s._v("会把文件夹下所有文件纳入已跟踪状态，将"),t("strong",[s._v("单个文件纳入跟踪状态")]),s._v("需使用"),t("code",[s._v("git add filename.file")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" git@github.com:USERNAME/REPONAME.git master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("另外别忘了push，push完了才完事。")]),s._v(" "),t("p",[t("code",[s._v("git commit -m")]),s._v("与"),t("code",[s._v("git commit -am")]),s._v("的区别，还有用了"),t("code",[s._v("-am")]),s._v("还要不要使用"),t("code",[s._v("git add")]),s._v("命令?看"),t("a",{attrs:{href:"https://www.cnblogs.com/smile-fanyin/p/10827438.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("大佬文章"),t("OutboundLink")],1),s._v("。。")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);