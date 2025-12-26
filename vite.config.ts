import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-skills/', // importante para que las rutas funcionen en GitHub Pages
  plugins: [react()],
})
