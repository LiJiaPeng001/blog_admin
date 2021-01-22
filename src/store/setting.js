const state = {
  title: '买菜的家朋',
  theme: 'light',
  cover: 'https://img1.halobear.com/wedding/FlhPh9u0ypAlzbxey-YjolnrqT2h.jpg',
}

const mutations = {
  SET_USER: (state, payload = {}) => {
    Object.assign(state, payload)
  },
}

export default {
  state,
  mutations,
}
