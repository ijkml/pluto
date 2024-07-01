import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  srcDir: 'app',
  experimental: {
    typedPages: true,
  },
  modules: ['@vueuse/nuxt', '@unocss/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      // link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      link: [{ rel: 'icon', type: 'image/png', href: '/nuxt.png' }],
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [{ name: 'description', content: 'Nuxt Flint' }],
    },
  },
  alias: {
    '@img': fileURLToPath(new URL('./app/assets/images', import.meta.url)),
    // '@icons': fileURLToPath(new URL('./assets/icons', import.meta.url)),
    // '@data': fileURLToPath(new URL('./assets/data', import.meta.url)),
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
  devServer: {
    host: '',
    port: 3221,
  },
});
