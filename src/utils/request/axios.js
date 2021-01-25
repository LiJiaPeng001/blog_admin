import Axios from 'axios'
import router from '@/router'
import { message } from 'ant-design-vue'
import { getErrMsg, getErrStatus } from './status'

const instance = Axios.create()

export default (
  options = {
    method: 'get',
    data: {},
    params: {},
  }
) => {
  return new Promise((resolve, reject) => {
    instance(options)
      .then((res) => {
        const { data = {} } = res
        resolve(data.data || {})
      })
      .catch((e) => {
        const status = getErrStatus(e)
        const info = getErrMsg(e)
        if (status === 401) {
          return router.push('/login')
        }
        if (process.server) console.error(info)
        else message.error(info)
        reject(info)
      })
  })
}
