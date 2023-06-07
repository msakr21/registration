import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
// import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],
  // build: {
  //   // generate manifest.json in outDir
  //   manifest: true,
  //   rollupOptions: {
  //     // overwrite default .html entry
  //     input: '~/app/frontend/components/index.jsx',
  //   },
  // },
})
