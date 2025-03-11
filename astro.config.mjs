import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	output: 'server',
  	adapter: cloudflare(),
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
