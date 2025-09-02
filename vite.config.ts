import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
    },
  },
});
