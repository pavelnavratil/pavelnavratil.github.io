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

export const showDefaultLang = false;

export const languages: Languages = {
  en: "EN",
  cs: "CZ",
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
    "nav.thoughts": "View All My Thoughts",
    "nav.allWork": "View All Work I Was Participated In",
    "nav.allProjects": "View All My Projects",
    "projects.title": " My Personal Projects",
    "projects.desc": "Here are some of my current personal projects I'm working on.",
    "projects.separator": "Check out my personal projects",
    "worked.title": " My Work",
    "worked.desc": "Here are some projects I have worked on over the years.",
    "worked.separator": "Check out my work projects",
    "writings.title": " My Thoughts",
    "writings.prelude": "About life, coding and stargazing.",
    "writings.desc": "Along with coding I also like to write about life. Here are some of my recent posts.",
    "writings.separator": " Some of my thoughts",
    "what.title": " What I Do",
    "what.desc": "Hi 👋, I'm an accomplished explorer, a full stack web developer with a passion for Salesforce.",
    "who.title": " Who I Am",
    "who.desc": "Hi 👋",
  },
  cs: {
    "nav.home": "Domů",
    "nav.what": "Co dělám",
    "nav.who": "Kdo jsem",
    "nav.worked": "Moje práce",
    "nav.projects": "Moje projekty",
    "nav.posts": "Blog",
    "nav.thoughts": "Všechny mé myšlenky",
    "nav.allWork": "Zobraz všechny práce, kterých jsem se zúčastnil",
    "nav.allProjects": "Zobraz všechny mé projekty",
    "projects.title": "Moje osobních projekty",
    "projects.desc": "Zde jsou některé z mých osobních projektů, na kterých teď pracuji.",
    "projects.separator": "Podívejte se na moje osobní projekty",
    "worked.title": " Moje práce",
    "worked.desc": "Zde jsou některé projekty, na kterých jsem pracoval v průběhu let.",
    "worked.separator": "Podívejte se na moje pracovní projekty",
    "writings.title": " Moje myšlenky",
    "writings.prelude": "O životě, kódování a pozorování hvězd.",
    "writings.desc": "Kromě kódování také rád píšu o životě. Zde jsou některé z mých nedávných příspěvků.",
    "writings.separator": " Některé z mých myšlenek",
    "what.title": " Co dělám",
    "what.desc": "Ahoj 👋, jsem úspěšný objevitel, full stack webový vývojář s vášní pro Salesforce.",
    "who.title": " Kdo jsem",
    "who.desc": "Ahoj 👋",
  },
} as const;
