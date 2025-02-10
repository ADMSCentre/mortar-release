// @ts-check
import { defineConfig } from 'astro/config';
import remarkGithubAlerts from 'remark-github-alerts';
import tailwindcss from '@tailwindcss/vite';
import { defaultLayout } from 'astro-default-layout';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [defaultLayout, remarkGithubAlerts],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [svelte()],
});
