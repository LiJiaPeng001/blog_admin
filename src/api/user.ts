import request from '@/utils/request'

export function login(data = {}) {
  return request({
    url: '/api/common-user/login',
    method: 'post',
    data,
  })
}
