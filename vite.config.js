import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const isProd = process.env.NODE_ENV === 'production';

// https://vite.dev/config/
export default defineConfig({
  base: isProd ?  '/react/' : '/',
  plugins: [react()],
})
