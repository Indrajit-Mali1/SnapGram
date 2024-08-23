import { defineConfig } from 'vite'
import path, { dirname } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "./src")
    },
  },
})
