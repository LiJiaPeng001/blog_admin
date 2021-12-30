import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const loadEnvResolve = mode => loadEnv(mode, process.cwd())

export default ({ mode }) => {
  let { VITE_BASEURL, VITE_BASE } = loadEnvResolve(mode);
  return defineConfig({
    base: VITE_BASE,
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import './src/style/variable.less';`
        }
      }
    },
    server: {
      proxy: {
        "/api": VITE_BASEURL
      }
    },
  })
}
