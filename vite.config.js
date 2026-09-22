import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import fs from 'node:fs'
import path from 'node:path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-404',
      closeBundle() {
        fs.copyFileSync(
          path.resolve('dist/index.html'),
          path.resolve('dist/404.html')
        )
      }
    }
  ],
  base: '/task-1-react/',
})
