import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/scss/app.scss',
        'resources/js/index.js',
      ],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@js': path.resolve(__dirname, 'resources/js'),
    },
  },
});
