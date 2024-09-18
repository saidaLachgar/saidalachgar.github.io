import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import icon from 'astro-icon'
import astroMetaTags from 'astro-meta-tags'
import metaTags from 'astro-meta-tags'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import { SITE_URL } from './src/data/config'

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  prefetch: true,
  compressHTML: true,
  integrations: [
    mdx(),
    compress(),
    astroMetaTags(),
    sitemap(),
    metaTags(),
    robotsTxt(),
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
  output: 'server',
  adapter: netlify(),
})
