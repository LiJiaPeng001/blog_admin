import { createStore } from 'vuex'

const files = require.context('./', true, /\.js$/)

const modules = {}

files.keys().forEach((key) => {
  if (key === './index.js') return
  let name = key.replace(/^\.\/modules\//g, '').replace(/\.js$/g, '')
  modules[name] = files(key).default
})

export default createStore({
  modules,
})
