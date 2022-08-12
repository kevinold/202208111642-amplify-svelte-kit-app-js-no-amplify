import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	// per https://github.com/aws-amplify/amplify-js/issues/9639#issuecomment-1081781840
	resolve: { alias: { './runtimeConfig': './runtimeConfig.browser' } }
};

export default config;
