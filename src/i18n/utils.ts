import { defaultLang, showDefaultLang, ui } from "@i18n/ui";

/**
 * Builds a localized path. Always ends in a trailing slash to match the
 * directory-style routes Astro emits, so links don't cost a 301 hop.
 */
export function useTranslatedPath(lang: keyof typeof ui) {
	return function translatePath(path: string, locale: keyof typeof ui = lang) {
		const leadingSlash = path.startsWith("/") ? path : `/${path}`;
		const normalizedPath = leadingSlash.endsWith("/")
			? leadingSlash
			: `${leadingSlash}/`;
		return !showDefaultLang && locale === defaultLang
			? normalizedPath
			: `/${locale}${normalizedPath}`;
	};
}

export function getLangFromUrl(url: URL) {
	const [firstSegment] = url.pathname.split("/").filter(Boolean);
	if (firstSegment in ui) return firstSegment as keyof typeof ui;
	return defaultLang;
}

export function getPathWithoutLanguage(url: URL) {
	const segments = url.pathname.split("/").filter(Boolean);
	if (segments[0] in ui) segments.shift();
	return segments.length > 0 ? `/${segments.join("/")}` : "/";
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}
