import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // 👈 use -swc here

export default defineConfig({
  plugins: [react()],
  base: '/Task_Manager/', // 👈 this now works correctly
})

