

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    tailwindcss(),
  ],
  server: {
    port: 5001,
  },
  optimizeDeps: {
    include: [
      'codemirror',
      'codemirror/mode/javascript/javascript',
      'codemirror/addon/edit/closebrackets',
      'codemirror/addon/edit/closetag'
    ],
  },
});
