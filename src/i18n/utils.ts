import { ui, defaultLang, showDefaultLang } from '@i18n/ui';

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    if (path.includes("/post/")){
      return `/${l}${path}`;
    }
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}

export function getLangFromUrl(url: URL) {
  const [first, second] = url.pathname.split('/');
  if (second in ui) return second as keyof typeof ui;
  return defaultLang;
}

export function getPathWithoutLanguage(url: URL) {
  const [first, second, third, fourth] = url.pathname.split('/');
  if (second in ui) return '/'+third + (fourth ? `/${fourth}` : '');
  return '/'+second + (third ? `/${third}` : '');
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  }
}