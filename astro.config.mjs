import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://inp.cz",

	i18n: {
		locales: ["en", "cs"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: false,
		},
	},

	integrations: [
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en-US",
					cs: "cs-CZ",
				},
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
