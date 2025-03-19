type Locale = "en" | "cs" | string;

type Translation = {
  [locale in Locale]: {
    [key: string]: string;
  };
};

type Languages = {
  [locale in Locale]: string;
};

export type { Locale, Translation, Languages };

export const languages: Languages = {
  en: "English",
  cs: "Čeština",
};

export const defaultLang = "en";

export const ui: Translation = {
  en: {
    "nav.home": "Home",
    "nav.what": "What I Do",
    "nav.who": "Who I Am",
    "nav.worked": "My Work",
    "nav.projects": "My Projects",
    "nav.posts": "Blog",
  },
  cs: {
    "nav.home": "Domů",
    "nav.what": "Co dělám",
    "nav.who": "Kdo jsem",
    "nav.worked": "Moje práce",
    "nav.projects": "Moje projekty",
    "nav.posts": "Blog",
  },
} as const;
