let env = process.env.NODE_ENV

// development: 'http://127.0.0.1:1202',
const apiMaps = {
  development: 'http://ljpeng.fun:1202',
  production: 'http://ljpeng.fun:1202',
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
      },
    },
  },
}
