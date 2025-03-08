// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ETOJ Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'ET的博客',
					autogenerate: { directory: 'Blog' },
				},
				{
					label: 'ETOJ Docs',
					autogenerate: { directory: 'ETOJ_DOCS' },
				},

			],
		}),
	],
});
