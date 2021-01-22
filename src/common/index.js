const files = require.context('./', true, /index.vue/)

console.log(files)
files.keys().forEach((key) => {
  const route = files(key).default
  console.log(route, 'ee')
})
