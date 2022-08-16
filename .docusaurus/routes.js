import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '62a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '272'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a8d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd24'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '817'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '2fe'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f90'),
    exact: true
  },
  {
    path: '/author/author',
    component: ComponentCreator('/author/author', 'b2d'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '558'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '7f9'),
    exact: true
  },
  {
    path: '/blog/Create-a-Node.js-web-server-with-Express-Framework',
    component: ComponentCreator('/blog/Create-a-Node.js-web-server-with-Express-Framework', '641'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '66c'),
    exact: true
  },
  {
    path: '/blog/introduction-to-power-platform',
    component: ComponentCreator('/blog/introduction-to-power-platform', 'd05'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '352'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'fa1'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '78c'),
    exact: true
  },
  {
    path: '/blog/tags/backend-development',
    component: ComponentCreator('/blog/tags/backend-development', '9a5'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '942'),
    exact: true
  },
  {
    path: '/blog/tags/express',
    component: ComponentCreator('/blog/tags/express', '3fe'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'b21'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '9dd'),
    exact: true
  },
  {
    path: '/blog/tags/low-code',
    component: ComponentCreator('/blog/tags/low-code', 'e06'),
    exact: true
  },
  {
    path: '/blog/tags/node-js',
    component: ComponentCreator('/blog/tags/node-js', 'ba3'),
    exact: true
  },
  {
    path: '/blog/tags/power-apps',
    component: ComponentCreator('/blog/tags/power-apps', 'b68'),
    exact: true
  },
  {
    path: '/blog/tags/power-automate',
    component: ComponentCreator('/blog/tags/power-automate', 'ada'),
    exact: true
  },
  {
    path: '/blog/tags/power-bi',
    component: ComponentCreator('/blog/tags/power-bi', 'e7a'),
    exact: true
  },
  {
    path: '/blog/tags/power-pages',
    component: ComponentCreator('/blog/tags/power-pages', '4d6'),
    exact: true
  },
  {
    path: '/blog/tags/power-platform',
    component: ComponentCreator('/blog/tags/power-platform', '268'),
    exact: true
  },
  {
    path: '/blog/tags/web-server',
    component: ComponentCreator('/blog/tags/web-server', 'c46'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '7bf'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '227'),
    routes: [
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c7d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
