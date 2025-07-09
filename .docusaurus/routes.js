import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '8d8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/thopterulu',
    component: ComponentCreator('/blog/authors/thopterulu', '64d'),
    exact: true
  },
  {
    path: '/blog/cool-website-i-found',
    component: ComponentCreator('/blog/cool-website-i-found', '317'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '2a5'),
    exact: true
  },
  {
    path: '/blog/i-tried-kvm',
    component: ComponentCreator('/blog/i-tried-kvm', 'c7d'),
    exact: true
  },
  {
    path: '/blog/optimizing-stuff',
    component: ComponentCreator('/blog/optimizing-stuff', '7c5'),
    exact: true
  },
  {
    path: '/blog/shit-gets-tiring',
    component: ComponentCreator('/blog/shit-gets-tiring', 'c96'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/automatisation',
    component: ComponentCreator('/blog/tags/automatisation', '2e7'),
    exact: true
  },
  {
    path: '/blog/tags/bonjour',
    component: ComponentCreator('/blog/tags/bonjour', 'd67'),
    exact: true
  },
  {
    path: '/blog/tags/kvm',
    component: ComponentCreator('/blog/tags/kvm', 'c0e'),
    exact: true
  },
  {
    path: '/blog/tags/lazy',
    component: ComponentCreator('/blog/tags/lazy', '510'),
    exact: true
  },
  {
    path: '/blog/tags/learning',
    component: ComponentCreator('/blog/tags/learning', '417'),
    exact: true
  },
  {
    path: '/blog/tags/pepega',
    component: ComponentCreator('/blog/tags/pepega', '73a'),
    exact: true
  },
  {
    path: '/blog/tags/planning',
    component: ComponentCreator('/blog/tags/planning', 'bc9'),
    exact: true
  },
  {
    path: '/blog/tags/programming',
    component: ComponentCreator('/blog/tags/programming', '713'),
    exact: true
  },
  {
    path: '/blog/tags/python',
    component: ComponentCreator('/blog/tags/python', 'e0b'),
    exact: true
  },
  {
    path: '/blog/tags/scripting',
    component: ComponentCreator('/blog/tags/scripting', '1a7'),
    exact: true
  },
  {
    path: '/blog/tags/setup',
    component: ComponentCreator('/blog/tags/setup', '259'),
    exact: true
  },
  {
    path: '/blog/tags/test',
    component: ComponentCreator('/blog/tags/test', 'f70'),
    exact: true
  },
  {
    path: '/blog/tags/tired',
    component: ComponentCreator('/blog/tags/tired', '3a1'),
    exact: true
  },
  {
    path: '/blog/what-about-the-future',
    component: ComponentCreator('/blog/what-about-the-future', '834'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c6f'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '15c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4b7'),
            routes: [
              {
                path: '/docs/building-websites/Docusaurus',
                component: ComponentCreator('/docs/building-websites/Docusaurus', '824'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/building-websites/serving-websites',
                component: ComponentCreator('/docs/building-websites/serving-websites', '3bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/building-websites',
                component: ComponentCreator('/docs/category/building-websites', '4a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/dev-environnement',
                component: ComponentCreator('/docs/category/dev-environnement', 'dd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/electronic-logic--computer-science',
                component: ComponentCreator('/docs/category/electronic-logic--computer-science', 'c40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/gaming',
                component: ComponentCreator('/docs/category/gaming', '3e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/jai-lu',
                component: ComponentCreator('/docs/category/jai-lu', '181'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/learning-languages',
                component: ComponentCreator('/docs/category/learning-languages', 'fa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/networks',
                component: ComponentCreator('/docs/category/networks', 'a1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/operating-systems',
                component: ComponentCreator('/docs/category/operating-systems', '469'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-environnement/git',
                component: ComponentCreator('/docs/dev-environnement/git', '8d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-environnement/linux-unix',
                component: ComponentCreator('/docs/dev-environnement/linux-unix', '04d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-environnement/make',
                component: ComponentCreator('/docs/dev-environnement/make', 'b6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-environnement/neovim',
                component: ComponentCreator('/docs/dev-environnement/neovim', '8e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-environnement/taking-notes',
                component: ComponentCreator('/docs/dev-environnement/taking-notes', 'c2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-environnement/tmux',
                component: ComponentCreator('/docs/dev-environnement/tmux', '01d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/electronic-stuff/buying_hardware',
                component: ComponentCreator('/docs/electronic-stuff/buying_hardware', '9ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/electronic-stuff/turing-complete',
                component: ComponentCreator('/docs/electronic-stuff/turing-complete', '27e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/g-lu/atomic-habits',
                component: ComponentCreator('/docs/g-lu/atomic-habits', '113'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/g-lu/du-bonheur',
                component: ComponentCreator('/docs/g-lu/du-bonheur', '3b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/g-lu/to-read-table',
                component: ComponentCreator('/docs/g-lu/to-read-table', '076'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gaming/achievement-hunting',
                component: ComponentCreator('/docs/gaming/achievement-hunting', '972'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gaming/buying-low',
                component: ComponentCreator('/docs/gaming/buying-low', '2c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gaming/gaming-culture',
                component: ComponentCreator('/docs/gaming/gaming-culture', '737'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gaming/playing-retro',
                component: ComponentCreator('/docs/gaming/playing-retro', 'dd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/Assembly',
                component: ComponentCreator('/docs/learning-languages/Assembly', '821'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/C',
                component: ComponentCreator('/docs/learning-languages/C', 'd7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/comparatif-lang',
                component: ComponentCreator('/docs/learning-languages/comparatif-lang', 'c47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/databases',
                component: ComponentCreator('/docs/learning-languages/databases', '386'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/go',
                component: ComponentCreator('/docs/learning-languages/go', 'cd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/python',
                component: ComponentCreator('/docs/learning-languages/python', '4ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/rust',
                component: ComponentCreator('/docs/learning-languages/rust', 'bcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/zig',
                component: ComponentCreator('/docs/learning-languages/zig', '780'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/misc/absolute-cinema',
                component: ComponentCreator('/docs/misc/absolute-cinema', '721'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/misc/automatisation',
                component: ComponentCreator('/docs/misc/automatisation', '33a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/misc/cybersecurity',
                component: ComponentCreator('/docs/misc/cybersecurity', '680'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/misc/getting-little-goldstars',
                component: ComponentCreator('/docs/misc/getting-little-goldstars', '5ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/misc/learning-platforms',
                component: ComponentCreator('/docs/misc/learning-platforms', '500'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/misc/magic-the-gathering',
                component: ComponentCreator('/docs/misc/magic-the-gathering', '24f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/misc/osint',
                component: ComponentCreator('/docs/misc/osint', '1ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/misc/privacy',
                component: ComponentCreator('/docs/misc/privacy', '719'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/misc/typing-faster',
                component: ComponentCreator('/docs/misc/typing-faster', '309'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/networks/Network',
                component: ComponentCreator('/docs/networks/Network', 'f56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/os/linux',
                component: ComponentCreator('/docs/os/linux', 'c24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/os/make-your-own-os',
                component: ComponentCreator('/docs/os/make-your-own-os', 'f7e'),
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
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
