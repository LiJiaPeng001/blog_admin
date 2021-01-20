import { createApp } from 'vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import App from './App.vue'
import store from './store'
import router from './router'

const Vue = createApp(App)

Vue.use(router)
Vue.use(store)
Vue.use(antd)

Vue.mount('#app')
