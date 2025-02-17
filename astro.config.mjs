import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import icon from 'astro-icon'
import purgecss from 'astro-purgecss'
import metaTags from 'astro-meta-tags'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import { SITE_METADATA } from './src/consts.ts'

// https://astro.build/config
export default defineConfig({
  site: SITE_METADATA.siteUrl,
  prefetch: true,
  compressHTML: true,
  integrations: [
    mdx(),
    compress(),
    purgecss({
      fontFace: true, // removes any unused @font-face if set to true
      rejected: true, // scan through the removed list to see if there's anything wrong
      rejectedCss: true, // keeps the discarded CSS
      variables: true, // removes any unused CSS variables if set to true
      keyframes: false, // removes unused keyframes by setting if set to true
      safelist: {
        greedy: [
          /*astro*/
        ],
      },
    }),
    sitemap({
      filter: (page) => page !== `${SITE_METADATA.siteUrl}/privacy-policy/` && !/\/blog\/\d+\/$/.test(page),
    }),
    metaTags(),
    robotsTxt(),
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
  build: {
    inlineStylesheets: 'never',
  },
})
