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

	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
