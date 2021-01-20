export default [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登陆',
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue'),
  },
]
