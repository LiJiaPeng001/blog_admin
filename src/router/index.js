import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress' // 网页顶部进度
import routes from './constantRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to) => {
  NProgress.start()
  if (to.path !== '/login') {
    router.push('/login')
  }
  NProgress.done()
})

router.afterEach((route) => {
  // 设置路由title
  document.title = (route.meta || {}).title || '博客管理后台'
  // 进度条结束
  NProgress.done()
})

export default router
