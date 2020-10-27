// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

import Tip from '@theme/util/tip.js'
import "./styles/global.styl"

// Vue.use(Antd);

export default ({
  Vue
}) => {
  Vue.prototype.$Tip= Tip;

  // 注册全局组件
  // Vue.component('Alert', Alert);
}