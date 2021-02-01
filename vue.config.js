let env = process.env.NODE_ENV

const apiMaps = {
  development: 'http://127.0.0.1:1202',
  production: 'https://www.ljpeng.fun',
}

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: apiMaps[env],
        changOrigin: true, //开启代理
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
}
