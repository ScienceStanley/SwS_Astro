// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://smarterwithscience.org',
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
    mdx(),
    sitemap(),
    icon(),
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/lit'],
    },
    ssr: {
      external: ['svgo'],
    },
  },
});
