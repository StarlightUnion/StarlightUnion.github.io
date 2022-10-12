// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

import Tip from '@theme/util/tip.js'
import "./styles/global.styl"

export default ({
  Vue
}) => {
  Vue.prototype.$Tip= Tip;
  // Vue.use(Antd);
}