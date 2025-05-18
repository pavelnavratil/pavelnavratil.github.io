import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
	site: 'https://inp.cz',

	i18n: {
		locales: ['en', 'cs'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: false
		},
		fallback: {
			cs: "en"
		}
	},
	
	integrations: [tailwind()],
});
