let env = process.env.NODE_ENV

const apiMaps = {
  development: 'http://127.0.0.1:1202',
  production: 'http://47.97.109.250:1202',
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
        ws: true,
        changOrigin: true, //开启代理
      },
    },
  },
}
