import { type Config } from 'prettier';

const config: Config = {
  plugins: [
    //
    'prettier-plugin-astro',
  ],
  printWidth: 120,
  singleQuote: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;
