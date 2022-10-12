// 判断是否手机浏览器
export function IsMobileEnv() {
  const ua = window.navigator.userAgent.toLowerCase();

  return ua.match(/ipad/i) == "ipad" ||
    ua.match(/iphone os/i) == "iphone os" ||
    ua.match(/midp/i) == "midp" ||
    ua.match(/rv:1.2.3.4/i) == "rv:1.2.3.4" ||
    ua.match(/ucweb/i) == "ucweb" ||
    ua.match(/android/i) == "android" ||
    ua.match(/windows ce/i) == "windows ce" ||
    ua.match(/windows mobile/i) == "windows mobile";
}