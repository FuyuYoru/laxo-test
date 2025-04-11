import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url';
import mkcert from 'vite-plugin-mkcert'
// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   https: true
  // },
  server: {
    proxy: {
      '/api': {
        target: 'https://laxocrm-test.laxo.one',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  
  plugins: [vue(), mkcert()],
  resolve:{
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://laxocrm-test.laxo.one',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //       secure: false, // если у сервера самоподписанный SSL
  //     },
  //   },
  // },
})
