import { defineConfig } from 'astro/config'
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import alpinejs from "@astrojs/alpinejs"
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), alpinejs(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});