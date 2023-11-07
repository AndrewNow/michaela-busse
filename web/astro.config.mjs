import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sanity({
    projectId: 'x10601ph',
    dataset: 'production',
    apiVersion: '2023-11-07',
    useCdn: true,
  })]
});