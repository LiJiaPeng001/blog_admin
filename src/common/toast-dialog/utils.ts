import { createApp, ComponentOptions } from 'vue'
import Toast from './index.vue'

let timer: NodeJS.Timer | null
let app: ComponentOptions

export default (text: string, time: number = 2000) => {
  if (text === '') throw 'no text';
  if (!app) {
    let element = document.createElement("div")
    document.body.appendChild(element)
    let instance = createApp(Toast)
    app = instance.mount(element)
  }
  app.$nextTick(() => {
    app.show(text)
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      app.hide()
    }, time)
  })
}