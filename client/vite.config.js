import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      features: `${path.resolve(__dirname, './src/features')}`,
      assets: `${path.resolve(__dirname, './src/assets')}`,
    },
  },
  server: {
    port: 3000,
  },
});
