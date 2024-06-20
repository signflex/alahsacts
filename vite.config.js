import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root : 'src',
  plugins: [react()],
  build: {
    outDir: '../dist', // Output directory inside the src folder
    emptyOutDir: true, // Ensures the output directory is emptied before each build
  }
})
