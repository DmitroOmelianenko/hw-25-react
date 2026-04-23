import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  // ЗАМІНІТЬ 'назва-репозиторію' на реальну назву вашого проекту на GitHub
  base: 'hw-25-react', 
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
