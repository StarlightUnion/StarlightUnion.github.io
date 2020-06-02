import Tip from './libs/tip.js'

export default ({
  Vue
}) => {
  Vue.prototype.$Tip= Tip;

  // 注册全局组件
  // Vue.component('Alert', Alert);
}