/**
 * Helpers for the `retiringOn` field on certifications.
 *
 * Collections store the retirement date as a machine-readable `YYYY-MM` month
 * so status can be derived from its value rather than its mere presence, and so
 * the same value serves both languages. The localized month name is produced at
 * render time with `Intl.DateTimeFormat`.
 *
 * Note: this is a static site, so the comparison runs at build time — a
 * certification flips to retired on the first build after its retirement month
 * begins, not the instant the date passes.
 */

const MONTH_PATTERN = /^(\d{4})-(\d{2})$/;

const localeTags: Record<string, string> = {
	en: "en-US",
	cs: "cs-CZ",
};

/** Parses a `YYYY-MM` month into the first day of that month, or null. */
export function parseRetiringOn(value?: string): Date | null {
	const match = value?.match(MONTH_PATTERN);
	if (!match) return null;
	const [, year, month] = match;
	return new Date(Number(year), Number(month) - 1, 1);
}

/** True once the retirement month has started; undated certifications stay active. */
export function isRetired(value?: string, now: Date = new Date()): boolean {
	const retiringOn = parseRetiringOn(value);
	if (!retiringOn) return false;
	return retiringOn <= new Date(now.getFullYear(), now.getMonth(), 1);
}

/** Renders `YYYY-MM` as a month name in the given language, e.g. "February 2026". */
export function formatRetiringOn(value: string, lang: string): string {
	const retiringOn = parseRetiringOn(value);
	if (!retiringOn) return value;
	return new Intl.DateTimeFormat(localeTags[lang] ?? localeTags.en, {
		month: "long",
		year: "numeric",
	}).format(retiringOn);
}
