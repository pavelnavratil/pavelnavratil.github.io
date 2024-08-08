import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pavel Navrátil',
  tagline: 'Senior Full Stack Salesforce Developer',
  favicon: 'img/favicon.ico',

  url: 'http://inp.cz/',
  baseUrl: '/',

  organizationName: 'navratilpavel',
  projectName: 'navratilpavel.github.io', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Pavel Navrátil',
      logo: {
        alt: 'Pavel Navrátil Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'about',
          label: 'About Me',
          position: 'left',
          activeBaseRegex: `/about/`,
        },
        {
          to: 'cv',
          label: 'CV',
          position: 'left',
          activeBaseRegex: `/cv/`,
        },
        {
          to: 'projects',
          label: 'Projects',
          position: 'left',
          activeBaseRegex: `/projects/`,
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Pavel Navrátil.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
