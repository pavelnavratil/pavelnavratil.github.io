import { defaultLang, showDefaultLang, ui } from "@i18n/ui";

export function useTranslatedPath(lang: keyof typeof ui) {
	return function translatePath(path: string, locale: keyof typeof ui = lang) {
		const normalizedPath = path.startsWith("/") ? path : `/${path}`;
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
