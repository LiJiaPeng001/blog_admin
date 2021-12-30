import { ComponentOptions, createApp, nextTick } from 'vue'
/**
 * @description: 通过js通知vue组件的显示隐藏
 * @param {Component} Component vue组件
 * @return: Object{show,hide}
 */
export default class VueMonitor {
  instance?: any
  Component: any
  constructor(Component: ComponentOptions) {
    this.Component = createApp(Component)
  }

  // 显示组件
  show(options: any) {
    if (typeof window === 'undefined') return
    let extendComponet = document.createElement("div")
    extendComponet.className = "extendComponent"
    document.body.appendChild(extendComponet)
    this.instance = this.Component.mount(".extendComponent")
    nextTick(() => {
      console.log(this.instance)
    })
  }

  // 隐藏组件
  hide() {
    const { instance } = this
    if (instance) {
      this.instance.visible = false
      if (instance.hide) {
        instance.hide()
      }
    }
  }
}