import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from "vite-plugin-pug"

const locals = { name: "My Pug" }


// https://vitejs.dev/config/
export default defineConfig({
  base: '/andresNavarro',
  plugins: [
    vue(), 
    pugPlugin(locals)
  ], 
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
