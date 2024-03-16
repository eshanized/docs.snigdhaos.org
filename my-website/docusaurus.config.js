// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SNIGDHA OS - DOCS',
  tagline: 'Be silent when it is time to hear!',
  favicon: 'img/snigdhaos.svg',

  // Set the production url of your site here
  url: 'https://docs.snigdhaos.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            '#',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            '#',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SNIGDHA OS - DOCS',
        logo: {
          alt: 'Snigdha OS Logo',
          src: 'img/snigdhaos.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://snigdhaos.org/',
            label: 'Home',
            position: 'right',
          },
          {
            href: 'https://cloud.snigdhaos.org/',
            label: 'Cloud',
            position: 'right',
          },
          {
            href: 'https://forum.snigdhaos.org/',
            label: 'Forum',
            position: 'right',
          },
          {
            href: 'https://github.com/Snigdha-OS/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Important',
            items: [
              {
                label: 'Inspiration',
                to: '/docs/inspiration',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              // {
              //   label: 'Forum',
              //   href: 'https://forum.snigdhaos.org/',
              // },
              {
                label: 'Facebook',
                href: 'https://facebook.com/snigdhalinux',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/snigdhaos',
              },
              {
                label: 'Threads',
                href: 'https://instagram.com/snigdhaos',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/u/snigdhaos',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'SNIGDHA OS - HOME',
                href: 'https://snigdhaos.org/',
              },
              {
                label: 'SNIGDHA OS - CLOUD',
                href: 'https://cloud.snigdhaos.org/',
              },
              {
                label: 'SNIGDHA OS - FORUM',
                href: 'https://forum.snigdhaos.org/',
              },
              {
                label: 'SNIGDHA OS - DOCS',
                href: 'https://docs.snigdhaos.org/',
              },
              {
                label: 'SNIGDHA OS - GITHUB',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SNIGDHA OS. ALL RIGHTS RESERVED.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

