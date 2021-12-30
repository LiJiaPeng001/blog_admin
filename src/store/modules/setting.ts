export const namespaced = true;

export const state = {
  title: '买菜的家朋',
  theme: 'light',
  cover: 'https://img1.halobear.com/wedding/FlhPh9u0ypAlzbxey-YjolnrqT2h.jpg',
  collapsed: false,
}

export const mutations = {
  SET_SETTING: (state: any, payload = {}) => {
    Object.assign(state, payload)
  },
}
