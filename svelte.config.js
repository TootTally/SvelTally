import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      fallback: 'index.html' // may differ from host to host
    }),
    alias: {
      $paraglide: './src/paraglide/'
    },

    // Need for crawling to work until
    // https://github.com/sveltejs/kit/issues/11133
    // is fixed
    prerender: {
      entries: ['/']
    }
  }
};

export default config;
