import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), alpinejs(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});