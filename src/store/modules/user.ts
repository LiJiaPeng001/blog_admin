import authority from '@/utils/authority'
import * as Api from '@/api/user'

interface UserState {
  user: {
    token: string
  }
}

export const namespaced = true;

const userInfo = authority.get()

export const state = (): UserState => ({
  user: userInfo
});

export const getters = {
  isLogin(state: UserState) {
    return !!state.user.token
  },
}

export const mutations = {
  SET_USER: (state: any, payload = {}) => {
    Object.assign(state, payload)
  },
}

export const actions = {
  // 登录
  async login({ commit }: any, { phone = '', password = '' }) {
    const data = await Api.login({
      phone: phone.trim(),
      password: password.trim(),
    })
    data.is_admin = 1
    authority.set(data)
    commit('SET_USER', { user: data })
  },
  // 登出
  async logout() {
    authority.clear()
    window.location.reload()
  },
}