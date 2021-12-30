import constantRoutes from '@/router/constantRoutes'
import dynamicRoutes from '@/router/dynamicRoutes/index'

let routes = [...constantRoutes, ...dynamicRoutes]

export const namespaced = true

export const state = {
  routes, // 所有路由
  currentRoutes: routes.find((item) => item.path === '/').children,
}
export const mutations = {
  SET_ROUTERS: (state: any, payload: any) => {
    Object.assign(state, payload)
  },
}
