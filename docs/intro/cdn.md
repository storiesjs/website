---
title: Stories Packages
sidebar_label: Packages & CDN
sidebar_position: 2
---

Stories provides different packages that can be used to quickly get started using Stories Components with framework, or none at all.

## Stories Components CDN

Stories Components can be included from a CDN for quick testing in a [Plunker](https://plnkr.co/), [Codepen](https://codepen.io), [CodeSandbox](https://codesandbox.io/) or any other online code editor!

It's recommended to use [jsdelivr](https://www.jsdelivr.com/) to access the Stories Components from a CDN. To get the latest version, add the following inside the `<head>` element in an HTML file, or where external assets are included in the online code editor:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@stories-js/stories-components@0.1.1/dist/esm/index.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@stories-js/stories-components@0.1.1/dist/index.cjs.js"></script>
```

With this it's possible to use all of the Stories Components without having to install a framework.

:::note
This does not install any frameworks integrations. This allows use of the Stories Components without a framework.
:::

## Stories in Angular project

When using Stories Components in an Angular project, install the latest `@stories-js/stories-angular` package from [npm](https://npmjs.com). This comes with all of the Stories Components and Angular specific services and story renderer.

```shell
$ npm install @stories-js/stories-angular@latest --save
```

Each time there is a new Stories Angular release, this version will need to be updated to get the latest features and fixes.

For adding Stories Angular to an already existing Angular project, use the Angular CLI's `ng add` feature.

```shell
$ ng add @stories-js/stories-angular
```

This will add the necessary imports to the `@stories-js/stories-angular` package as well as add the styles needed.

## Stories in React project

When using Stories Components in a React project, install the latest `@stories-js/stories-react` package from [npm](https://npmjs.com). This comes with all of the Stories Components and React story renderer.

```shell
$ npm install @stories-js/stories-react@latest --save
```

Each time there is a new Stories React release, this version will need to be updated to get the latest features and fixes.

## Stories in Vue project

To add Stories Components to an existing Vue project, install the `@stories-js/stories-vue` package. This comes with all of the Stories Components and Vue story renderer.

```shell
$ npm install @stories-js/stories-react@latest --save
```

Each time there is a new Stories Vue release, this version will need to be updated to get the latest features and fixes.