export default [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue'),
  },
]
