// import * as Api from '@/api/user'
import authority from '@/utils/authority'

const state = {
  user: authority.get() || {},
}

const getters = {
  isLogin(state) {
    return !!state.token
  },
}

const mutations = {
  SET_USER: (state, payload = {}) => {
    Object.assign(state, payload)
  },
}

const actions = {
  // 登录
  async login({ commit }, { phone = '', password = '' }) {
    // const data = await Api.login({
    //   phone: phone.trim(),
    //   password: password.trim()
    // });
    // data.is_admin = 1;
    commit('SET_USER', { user: { token: 1, phone, password } })
  },
  // 登出
  async logout({ commit }) {
    authority.clear()
    commit('SET_USER', { user: {} })
    window.location.reload()
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
