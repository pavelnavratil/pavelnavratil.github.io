import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pavel Navrátil',
  tagline: 'My personal space about coding, life and stargazing.',
  favicon: 'img/favicon.ico',

  url: 'http://space.inp.cz/',
  baseUrl: '/',

  organizationName: 'pavelnavratil',
  projectName: 'pavelnavratil.github.io', 

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
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'About me',
        },
        {to: '/blog', label: 'Blog', position: 'left'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'About me',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pavel Navrátil.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
