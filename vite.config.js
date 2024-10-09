import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,  // Abilita le sourcemap per il debug
  },
  server: {
    // fallback per le rotte non trovate, utile in produzione
    historyApiFallback: true
  }
})
