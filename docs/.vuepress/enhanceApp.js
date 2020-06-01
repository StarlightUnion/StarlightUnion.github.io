import Alert from './libs/alert.js'

export default ({
  Vue
}) => {
  Vue.prototype.$Alert = Alert;

  // 注册全局组件
  // Vue.component('Alert', Alert);
}