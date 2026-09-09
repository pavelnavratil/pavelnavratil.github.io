/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				card: "hsl(var(--card) / <alpha-value>)",
				primary: "hsl(var(--primary) / <alpha-value>)",
				"primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
				muted: "hsl(var(--muted) / <alpha-value>)",
				"muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
				border: "hsl(var(--border) / <alpha-value>)",
				heading: "var(--heading-color)",
			},
			fontFamily: {
				mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "monospace"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
