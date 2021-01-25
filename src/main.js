import { createApp } from 'vue'
import antd from 'ant-design-vue'
import * as antIcons from '@ant-design/icons-vue'
import 'ant-design-vue/dist/antd.less'
import pageLayout from '@/layouts/components/bread-crumb'
import common from './common'
import App from './App.vue'
import store from './store'
import router from './router'

import './style/index.less'

const Vue = createApp(App)

Vue.use(router)
Vue.use(store)
Vue.use(antd)

Object.entries(common).forEach(([name, component]) => {
  Vue.component(name, component)
})

Vue.component('page-layout', pageLayout)
Vue.config.globalProperties.$icon = antIcons

Vue.mount('#app')
