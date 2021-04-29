module.exports = {
  lintOnSave: false, //关闭eslint

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    }
  },
}
