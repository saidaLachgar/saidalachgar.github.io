import { defineConfig } from 'astro/config';
import { SITE_URL } from "./src/data/config";
import astroMetaTags from "astro-meta-tags"
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  compressHTML: true,
  integrations: [
    mdx(),
    compress(),
    astroMetaTags(),
    sitemap(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
  output: 'server',
  adapter: netlify(),
})
