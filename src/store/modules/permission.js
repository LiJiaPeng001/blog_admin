import constantRoutes from '@/router/constantRoutes'
import dynamicRoutes from '@/router/dynamicRoutes'

let routes = [...constantRoutes, ...dynamicRoutes]

const permission = {
  state: {
    routes, // 所有路由
    currentRoutes: routes.find((item) => item.path === '/').children,
  },
  mutations: {
    SET_ROUTERS: (state, payload) => {
      Object.assign(state, payload)
    },
  },
  actions: {},
}

export default permission
