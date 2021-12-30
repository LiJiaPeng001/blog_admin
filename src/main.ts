import { createApp } from 'vue'
import pageLayout from '@/layouts/components/bread-crumb.vue'
import * as antIcons from '@ant-design/icons-vue'
// import AntdComponents from './utils/antd'
import antd from 'ant-design-vue'
import App from './App.vue'

import store from './store';
import router from './router';
import components from './common/index'
import './style/index.less';
import "ant-design-vue/dist/antd.css";

const Vue = createApp(App);

Vue.use(store);
Vue.use(router);
Vue.use(antd)
// AntdComponents(Vue)

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

Vue.component('page-layout', pageLayout)
Vue.config.globalProperties.$icon = antIcons

Vue.mount('#app')
