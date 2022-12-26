import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: './public/index.html', // default
      },
    },
  },
  server: {
    open: './public/index.html',
  },
})