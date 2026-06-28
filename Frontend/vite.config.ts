import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom'],
    alias: {
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    }
  },
  server: {
    middlewareMode: false,
    hmr: {
      host: 'localhost',
      port: 5173,
      protocol: 'ws',
    },
    watch: {
      usePolling: true,
      interval: 100,
    }
  }
})
