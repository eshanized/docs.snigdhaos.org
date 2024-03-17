import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a9f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'f0a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '1fb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b75'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7a7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '83e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ec8'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '992'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c38'),
    exact: true
  },
  {
    path: '/blog/create-gpg-key-archlinux',
    component: ComponentCreator('/blog/create-gpg-key-archlinux', '95e'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'cfb'),
    exact: true
  },
  {
    path: '/blog/tags/eshanized',
    component: ComponentCreator('/blog/tags/eshanized', '097'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '31f'),
    exact: true
  },
  {
    path: '/blog/tags/snigdha-os',
    component: ComponentCreator('/blog/tags/snigdha-os', 'e01'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'e0c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '1be'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f36'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f0b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '469'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '28c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/naming',
                component: ComponentCreator('/docs/naming', 'fc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1b6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
