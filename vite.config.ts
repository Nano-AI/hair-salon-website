// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/hair-salon-website/';
  }

  return config;
});
    // "dev": "set PUBLIC_URL=http://localhost:5173/ && set BASE=/ && vite",
    // "build": "set PUBLIC_URL=https://nano-ai.github.io/karina-salon/ && set BASE=/karina-salon/ && tsc && vite build",
