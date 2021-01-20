import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/crm/v1/auth/login',
    method: 'post',
    data,
  })
}
