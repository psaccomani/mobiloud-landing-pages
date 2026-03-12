// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.mobiloud.com',
  base: '/pages',
  integrations: [
    react(),
  ],
  build: { inlineStylesheets: 'auto' },
  output: 'static',
  compressHTML: true,
});
