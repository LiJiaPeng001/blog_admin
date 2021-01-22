export default [
  {
    path: '/blog',
    name: '博客列表',
    meta: { title: '博客列表', icon: 'FolderAddOutlined' },
    component: () => import('@/views/blog'),
  },
  {
    path: '/blog-detail',
    name: '博客详情',
    hidden: false,
    meta: { title: '博客详情' },
    component: () => import('@/views/blog/id'),
  },
]
