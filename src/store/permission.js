import constantRoutes from '@/router/constantRoutes'
import dynamicRoutes from '@/router/dynamicRoutes'

const permission = {
  state: {
    routes: [...constantRoutes, ...dynamicRoutes], // 所有路由
    addRouters: [], // 新增路由
    currentRoutes: [],
  },
  mutations: {
    SET_ROUTERS: (state, payload) => {
      Object.assign(state, payload)
    },
  },
  actions: {},
}

export default permission
