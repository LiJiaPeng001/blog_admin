import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress' // 网页顶部进度
import store from '../store/index'
import routes from "./constantRoutes";
import dynamicRoutes from "./dynamicRoutes/index";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...dynamicRoutes]
})

router.beforeEach(async (to: { path: string }) => {
  NProgress.start()
  if (!store.getters['user/isLogin'] && to.path !== '/login') {
    router.push('/login')
  }
})

router.afterEach((route: { meta: any }) => {
  // 设置路由title
  document.title = (route.meta || {}).title || '博客管理后台'
  // 进度条结束
  NProgress.done()
})

export default router