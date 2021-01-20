const name = process.env.VUE_APP_LOCAL_KEY
const maxAge = 1000 * 60 * 60 * 24 * 30

let authority = {
  get() {
    if (process.server) return {}
    const data = JSON.parse(window.localStorage.getItem(name)) || { time: 0 }
    if (new Date().getTime() - data.time >= maxAge) {
      this.clear()
      return {}
    }
    return data || {}
  },
  set(obj) {
    obj = JSON.stringify({ ...this.get(), ...obj, time: new Date().getTime() })
    window.localStorage.setItem(name, obj)
  },
  clear() {
    window.localStorage.removeItem(name)
  },
}

export default authority
