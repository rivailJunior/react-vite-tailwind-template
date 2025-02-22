import path from 'node:path'

import EnvironmentPlugin from 'vite-plugin-environment'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  plugins: [EnvironmentPlugin(['REACT_APP_TEXT']) as any, react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    // include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['src/types', 'node_modules'],
  },
})
