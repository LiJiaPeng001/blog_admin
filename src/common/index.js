const components = {}
function requireAll(r) {
  return r.keys().map((key) => {
    const name = key
      .replace(/^\.\//, '')
      .replace(/\/index.vue$/, '')
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
    components[name] = r(key).default
  })
}
export default requireAll(require.context('./', true, /index\.vue/))
