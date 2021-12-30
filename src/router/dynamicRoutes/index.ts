import BaseLayout from '@/layouts/base-layout.vue'

const files: any = import.meta.globEager('./*.ts');

let routes = [
  {
    path: '/home',
    name: 'Home',
    meta: { title: '博客管理', icon: 'HomeOutlined' },
    hidden: true,
    component: () => import('@/views/home/index.vue'),
  },
]

for (const key in files) {
  const route = files[key].default
  if (Array.isArray(route)) {
    routes = [...routes, ...route]
  } else {
    routes.push(route)
  }
}

export default [
  {
    path: '/',
    name: 'index',
    component: BaseLayout,
    meta: { title: 'Home' },
    redirect: '/home',
    children: routes,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
  },
]
