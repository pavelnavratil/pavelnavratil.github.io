import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	site: 'https://inp.cz',
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
