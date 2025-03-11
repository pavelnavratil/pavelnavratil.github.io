import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://pavelnavratil.github.io',
	base: 'pavelnavratil.github.io',
	integrations: [tailwind()],
	i18n: {
        locales: ['en', 'cs'],
        defaultLocale: 'en',
        routing: {
           prefixDefaultLocale: true
        },
		fallback: {
			cs: "en"
		}
    }
});
