import { authorName } from '@utils/const';

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
    "home.title": authorName,
    "home.hello": "Hi, I'm Pavel.",
    "home.am": "I'm an accomplished explorer, ",
    "home.dev": "a full stack web developer with a passion for Salesforce.",
    "home.layered": "Layered by outdoor, travel, adventure, and bike.",
    "home.help": "I can help you out with:",
    "home.sfDev": "Salesforce Development",
    "home.sfArch": "Salesforce Architecture",
    "home.webDev": "Website Development",
    "home.more": "and more...",
    "projects.title": "My Personal Projects",
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
    "what.desc": "Hi 👋, I'm an accomplished explorer, a full stack web developer with a passion for Salesforce, Astro and Payload CMS.",
    "bio.title": " Short bio",
    "bio.desc": "Analytical thinker. Creative problem solver. Avid learner. Thoughtful listener. Engaging Mentor. Relentless.",
    "certifications.title": " Certifications",
    "who.title": " Who I Am",
    "who.desc": "Hi 👋",
    "about.title": " About",
    "about.desc": "Offline, I am usually cycling and garnering.",
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
    "home.title": authorName,
    "home.hello": "Dobrý den, jmenuji se Pavel.",
    "home.am": "Jsem zkušený dobrodruh,",
    "home.dev": "a plnohodnotný webový vývojář se zájmem o Salesforce.",
    "home.layered": "Formovaný přírodou, cestováním, dobrodružstvím a kolem.",
    "home.help": "Můžu vám pomoci s:",
    "home.sfDev": "Salesforce vývojem",
    "home.sfArch": "Salesforce architektůrou",
    "home.webDev": "Vývojem webových stránek",
    "home.more": "a více...",
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
    "what.desc": "Ahoj 👋, jsem zkušený průzkumník, full-stack webový vývojář s vášní pro Salesforce, Astro a Payload CMS.",
    "bio.title": " Krátce o mně",
    "bio.desc": "Analytický myslitel. Kreativní řešitel problémů. Zapálený student. Ohleduplný posluchač. Poutavý mentor. Neúnavný.",
    "certifications.title": " Certifikace",
    "who.title": " Kdo jsem",
    "who.desc": "Ahoj 👋",
    "about.title": " O mně",
    "about.desc": "Offline, obvykle jezdím na kole a zahradničím.",
  },
} as const;
