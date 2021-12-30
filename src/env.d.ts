/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue-router'
declare module 'axios'
declare module 'nprogress'
declare module 'highlight.js/*'
declare module 'markdown-it'
declare module 'spark-md5'
declare module '@/types/*'
declare module '@/store/*'
declare module '@/router/*'
declare module '@/common/*'
declare module '@/utils/*'
declare module '@/components/*'
declare module '@/constans/*'
declare module '@/api/*'