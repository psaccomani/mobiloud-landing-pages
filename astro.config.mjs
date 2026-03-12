// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.mobiloud.com',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  build: { inlineStylesheets: 'auto' },
  output: 'static',
  compressHTML: true,
});
