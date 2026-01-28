import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sassGlobImports from 'vite-plugin-sass-glob-import';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  // 環境変数：https://docs.astro.build/en/guides/environment-variables/#type-safe-environment-variables
  env: {
    schema: {},
  },
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
  site: 'https://sample.co.jp',
  server: {
    host: true,
    open: true,
  },
  build: {
    assets: 'assets',
    inlineStylesheets: 'never',
  },
  trailingSlash: 'always',
  integrations: [
    //
    sitemap(),
    mdx(),
    icon(),
  ],
  experimental: {
    liveContentCollections: true,
  },
  vite: {
    plugins: [
      //
      sassGlobImports(),
    ],
    // https://ja.vite.dev/config/build-options.html
    build: {
      assetsInlineLimit: 0,
      // https://rollupjs.org/configuration-options/
      rollupOptions: {
        output: {
          entryFileNames: 'js/main.js',
          assetFileNames: (assetInfo) => {
            const extType = assetInfo.names[0]?.split('.').at(-1);
            if (extType && /css|scss|sass/i.test(extType)) {
              return `css/[name].css`;
            }
            return `[extname]/[name][extname]`;
          },
          manualChunks: (id) => {
            if (id.includes('main.scss')) {
              return 'main.css';
            }
            if (id.includes('.astro?astro&type=style')) {
              return 'main.css';
            }
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/global/index.scss" as *;`,
        },
      },
    },
  },
});
