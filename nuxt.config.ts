import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2024-08-22',
  future: {
    compatibilityVersion: 4,
  },
  features: {
    inlineStyles: true,
  },
  experimental: {
    typedPages: true,
    componentIslands: true,
    headNext: true,
  },
  modules: ['@vueuse/nuxt', '@unocss/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [{ name: 'description', content: 'Nuxt Flint' }],
    },
  },
  alias: {
    '@img': fileURLToPath(new URL('./app/assets/images', import.meta.url)),
    // '@icons': fileURLToPath(new URL('./app/assets/icons', import.meta.url)),
    // '@data': fileURLToPath(new URL('./app/assets/data', import.meta.url)),
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
    plugins: [
      svgLoader({
        defaultImport: 'url',
      }),
    ],
  },
  css: ['@unocss/reset/tailwind.css', '@/assets/styles/root.scss'],
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },
  devtools: { enabled: true },
  devServer: {
    host: '',
    port: 3221,
  },
});
