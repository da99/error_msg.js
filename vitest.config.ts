import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'error_msg.js',
    root: './spec',
    environment: 'happy-dom',
    setupFiles: [],
  },
})
