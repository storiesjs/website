---
title: Stories Packages
sidebar_label: Packages & CDN
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Stories Packages: CDN, Angular, Vue, and React</title>
  <meta
    name="description"
    content="View our different packages that can be used to quickly start using Stories in a test environment, Angular, Vue, React, or none at all."
  />
</head>

Stories provides different packages that can be used to quickly get started using Stories Components with framework, or none at all.

## Stories Components CDN

Stories Components can be included from a CDN for quick testing in a [Plunker](https://plnkr.co/), [Codepen](https://codepen.io), [CodeSandbox](https://codesandbox.io/) or any other online code editor!

It's recommended to use [jsdelivr](https://www.jsdelivr.com/) to access the Stories Components from a CDN. To get the latest version, add the following inside the `<head>` element in an HTML file, or where external assets are included in the online code editor:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@stories-js/components/dist/esm/index.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@stories-js/components/dist/index.cjs.min.js"></script>
```

With this it's possible to use all of the Stories Components without having to install a framework.

:::note
This does not install any frameworks integrations. This allows use of the Stories Components without a framework.
:::

## Stories in Angular project

When using Stories Components in an Angular project, install the latest `@stories-js/components` and `@stories-js/angular` packages from [npm](https://npmjs.com). This comes with all of the Stories Components and Angular specific services and story renderer.

```shell npm2yarn
$ npm install @stories-js/components@latest --save
$ npm install @stories-js/angular@latest --save
```

Each time there is a new Stories Angular release, this version will need to be updated to get the latest features and fixes.

For adding Stories Angular to an already existing Angular project, use the Angular CLI's `ng add` feature.

```shell npm2yarn
$ ng add @stories-js/components
$ ng add @stories-js/angular
```

This will add the necessary imports to the `@stories-js/angular` package as well as add the styles needed.

## Stories in React project

When using Stories Components in a React project, install the latest `@stories-js/components` and `@stories-js/react` packages from [npm](https://npmjs.com). This comes with all of the Stories Components and React story renderer.

```shell npm2yarn
$ npm install @stories-js/components@latest --save
$ npm install @stories-js/react@latest --save
```

Each time there is a new Stories React release, this version will need to be updated to get the latest features and fixes.

## Stories in Vue project

To add Stories Components to an existing Vue project, install the `@stories-js/components` and `@stories-js/vue` packages. This comes with all of the Stories Components and Vue story renderer.

```shell npm2yarn
$ npm install @stories-js/components@latest --save
$ npm install @stories-js/react@latest --save
```

Each time there is a new Stories Vue release, this version will need to be updated to get the latest features and fixes.

## Build Your First Stories

Pick the JavaScript framework you plan to use while building your stories:

<DocsCards>
  <DocsCard 
    header="Jump to Vanilla JS" 
    href="../angular/your-first-app" 
    icon="/img/javascript-logo.png">
    <p>A complete guide to get you up to speed with the basics of building Stories with Vanilla JS</p>
  </DocsCard>

  <DocsCard 
    header="Jump to Angular" 
    href="../angular/your-first-app" 
    icon="/img/logo-angular-icon.svg">
    <p>A complete guide to get you up to speed with the basics of building Stories with Angular</p>
  </DocsCard>

  <DocsCard 
    header="Jump to React" 
    href="../react/your-first-app" 
    icon="/img/logo-react-icon.svg">
    <p>A complete guide to get you up to speed with the basics of building Stories with React.</p>
  </DocsCard>

  <DocsCard 
    header="Jump to Vue" 
    href="../vue/your-first-app" 
    icon="/img/logo-vue-icon.svg">
    <p>A complete guide to get you up to speed with the basics of building Stories with Vue.</p>
  </DocsCard>
</DocsCards>