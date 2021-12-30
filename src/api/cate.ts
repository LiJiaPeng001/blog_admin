import request from '@/utils/request'

export function list(params = {}) {
  return request({
    url: '/api/koa-blog/cate',
    params,
  })
}
export function add(data = {}) {
  return request({
    url: '/api/koa-blog/cate',
    method: 'post',
    data,
  })
}
export function update(data: { id: number | string }) {
  return request({
    url: `/api/koa-blog/cate/${data.id}`,
    method: 'put',
    data,
  })
}
