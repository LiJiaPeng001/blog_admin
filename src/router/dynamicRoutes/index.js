import BaseLayout from '@/layouts/base-layout'

const files = require.context('.', false, /\.js$/)
let routes = [
  {
    path: '/home',
    name: 'Home',
    meta: { title: '博客管理', icon: 'home' },
    hidden: true,
    component: () => import('../../views/home/index'),
  },
]

files.keys().forEach((key) => {
  if (key === './index.js') return
  const route = files(key).default
  if (Array.isArray(route)) {
    routes = [...routes, ...route]
  } else {
    routes.push(route)
  }
})

export default [
  {
    path: '/',
    name: 'index',
    component: BaseLayout,
    meta: { title: '' },
    redirect: 'Home',
    children: routes,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
  },
]
