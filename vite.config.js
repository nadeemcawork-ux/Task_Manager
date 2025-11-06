import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // keep if using React

export default defineConfig({
  plugins: [react()],
  base: '/Task_Manager/', // 👈 must match your repo name exactly
})
