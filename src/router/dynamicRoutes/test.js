import BaseLayout from '@/layouts/base-layout'

export default [
  {
    path: '/test',
    name: 'testRoot',
    meta: { title: '测试路由', icon: 'usb' },
    component: BaseLayout,
    hidden: process.env.NODE_ENV !== 'development',
    hideChildrenInMenu: true,
    children: [
      {
        path: '/test',
        name: 'test',
        meta: { title: 'test' },
        component: () => import('@/views/test'),
      },
    ],
  },
]
