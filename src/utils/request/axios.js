import Axios from 'axios'
import router from '@/router'
import { message } from 'ant-design-vue'
import { getErrMsg, getErrStatus } from './status'

const instance = Axios.create({
  baseURL: process.client ? '' : 'http://localhost:3000',
})

export default async (
  options = {
    method: 'get',
    data: {},
    params: {},
  }
) => {
  try {
    const response = await instance(options)
    const { data = {} } = response
    return data.data || {}
  } catch (e) {
    const status = getErrStatus(e)
    const info = getErrMsg(e)
    if (status === 401) {
      return router.push('/login')
    }
    if (process.server) console.error(info)
    else message.error(info)
    Promise.reject(info)
  }
}
