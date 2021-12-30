import { createApp, ComponentOptions } from 'vue'
import Loading from './index.vue'

let app: ComponentOptions

export default {
  show() {
    if (!app) {
      let loadingElement = document.createElement("div")
      document.body.appendChild(loadingElement)
      let instance = createApp(Loading)
      app = instance.mount(loadingElement)
      app.$nextTick(() => {
        app.show()
      })
    } else {
      app.show()
    }
  },
  hide() {
    app.hide()
  }
}
