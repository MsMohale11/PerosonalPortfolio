import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    cors: true,
    host: true,
    port: 2000,
    allowedHosts: ['.ngrok-free.app'],
  },
})
