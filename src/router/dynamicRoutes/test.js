export default [
  {
    path: '/test',
    name: '测试test',
    meta: { title: 'test', icon: 'SettingOutlined' },
    component: () => import('@/views/test'),
    hidden: false,
  },
]
