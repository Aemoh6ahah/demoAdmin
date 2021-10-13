var x_env = 'testing';//testing，staging，production
var x_version = '07271512'; //版本号时间戳

let env = x_env
let version = x_version
if (window.location.href.indexOf('dev') != -1 || env.indexOf('testing') != -1) {//测试环境接口地址
  var BASE_URL = 'https://feedback-dev.ecarxgroup.com/'
  // var BASE_URL = 'http://192.168.0.174:8081'
  console.log(`当前版本：测试：`, env, version, window.location.href)
} else if (env.indexOf('staging') != -1) {//演示环境地址
  var BASE_URL = 'http://116.62.142.242:10066'
  console.log(`当前版本：演示：`, env, version, window.location.href)
} else {
  var BASE_URL = 'http://116.62.142.242:10066'//开发环境地址
  console.log(`当前版本：正式：`, env, version, window.location.href)
}

export default {
  BASE_URL,
}