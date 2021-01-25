import request from '@/utils/request'

export function list(params) {
  return request({
    url: '/api/koa-blog/blog',
    params,
  })
}
export function detail(id) {
  return request({
    url: `/api/koa-blog/blog/${id}`,
    params: { id },
  })
}
export function add(data) {
  return request({
    url: '/api/koa-blog/blog',
    method: 'post',
    data,
  })
}
export function update(data) {
  return request({
    url: `/api/koa-blog/blog/${data.id}`,
    method: 'put',
    data,
  })
}
export function remove(id) {
  return request({
    url: `/api/koa-blog/blog/${id}`,
    method: 'delete',
  })
}
