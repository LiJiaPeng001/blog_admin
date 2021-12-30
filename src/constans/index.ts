interface ApiMaps {
  [propName: string]: string
}


export const imgUrl = 'https://img1.halobear.com/wedding/FlhPh9u0ypAlzbxey-YjolnrqT2h.jpg'

export const env = import.meta.env.MODE as string

export const isDev = env as string === 'development'

export const apiMaps: ApiMaps = {
  development: 'http://127.0.0.1:1202',
  production: 'https://www.ljpeng.fun',
}

export const baseURL = apiMaps[env]
