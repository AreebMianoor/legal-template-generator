import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    tailwind(), 
    mdx()
  ],
  output: 'static',
  adapter: netlify(),
  vite: {
    assetsInclude: ['**/*.jpg', '**/*.svg'],
    build: {
      assetsDir: 'assets',
      copyPublicDir: true
    }
  }
});