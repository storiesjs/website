// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stories Framework',
  tagline: 'The Web Components based tool for UI development',
  url: 'https://storiesjs.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'storiesjs', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  trailingSlash: false,

  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local")
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/storiesjs/website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/storiesjs/website/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Stories',
        logo: {
          alt: 'Stories Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'components',
            position: 'left',
            label: 'Components',
          },
          {
            type: 'doc',
            docId: 'addons',
            position: 'left',
            label: 'Addons',
          },
          {
            type: 'doc',
            docId: 'cli',
            position: 'left',
            label: 'CLI',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          // {
          // type: 'iconLink',
          //   position: 'right',
          //   icon: {
          //     alt: 'twitter logo',
          //     src: `/logos/twitter.svg`,
          //     href: 'https://twitter.com/storiesjs',
          //     target: '_blank',
          //   },
          // },
          // {
          //   type: 'iconLink',
          //   position: 'right',
          //   icon: {
          //     alt: 'github logo',
          //     src: `/logos/github.svg`,
          //     href: 'https://github.com/storiesjs/stories',
          //     target: '_blank',
          //   },
          // },
          {
            href: 'https://github.com/storiesjs/stories',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          // {
          //   type: 'iconLink',
          //   position: 'right',
          //   icon: {
          //     alt: 'discord logo',
          //     src: `/logos/discord.svg`,
          //     href: 'https://ionic.link/storiesjs',
          //     target: '_blank',
          //   },
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro/overview',
              },
              {
                label: 'Components',
                to: '/docs/components/overview',
              },
              {
                label: 'CLI',
                to: '/docs/cli/overview',
              },
              {
                label: 'Addons',
                to: '/docs/addons/overview',
              }
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/@storiesjs',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/@storiesjs',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/@storiesjs',
          //     },
          //   ],
          // },
          {
            title: 'Resources',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/storiesjs/stories',
              },
              {
                label: 'Contact us',
                to: '/contact',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021-${new Date().getFullYear()} StoriesJS. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
