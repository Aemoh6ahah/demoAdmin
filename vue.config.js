require('./src/utils/funny.js')
module.exports = {
  lintOnSave: false, //关闭eslint
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '用户社区管理台'
        return args
      })
  }
}

