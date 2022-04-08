// import { ElMessageBox } from 'element-plus';
// import { ElMessage } from 'element-plus';
const element = require('element-plus')
const message = element.ElMessage
const codeHandle = (data, option) => {
  console.log(data);
  switch (data.code) {
    case 200:
      return data
    default:
      // message.close()
      if (data.code) {
        data.code && message.error(data.message || '请求失败，请重新尝试')
        return Promise.reject(data)
      } else {
        return Promise.resolve(data)
      }
  }
}

// 一些错误状态码的处理
const interceptors = (res, option) => {
  switch (res.status) {
    case 200:
      return codeHandle(res.data, option)
    case 404:
      // message.close()
      // message.error('请求404，请重新尝试');
      return Promise.reject(res.data)
    case 403:
      // message.close()
      // message.error('请求403，请重新尝试');
      return Promise.reject(res.data)
    case 500:
      // message.close()
      // message.error('服务器500，请重新尝试');
      return Promise.reject(res.data)
    // 其他原因    
    default:
      // message.close()
      // message.error('请求错误，请重新尝试');
      return Promise.resolve(res.data)
  }
}

export default interceptors
