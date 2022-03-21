import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const sassPath = `../lib/scss/default.scss`



/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: "@import './src/lib/scss/default.scss';",
		}
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;
