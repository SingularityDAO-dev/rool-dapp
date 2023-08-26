import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import ssr from 'vite-plugin-ssr/plugin';
//import vercel from 'vite-plugin-vercel';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  // @ts-ignore
  base: process.env.GH_PAGES ? '/demo-dapp-with-react-ui/' : './',
  server: {
    fs: {
      allow: ['../sdk', './'],
    },
  },
})
