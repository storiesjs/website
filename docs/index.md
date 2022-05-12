---
title: Introduction to Stories Framework
sidebar_label: Overview
slug: /
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Open-Source UI Toolkit for visually testing and documenting UI components and pages</title>
  <meta
    name="description"
    content="Stories is a set of packages that helps you visually test and document UI components and pages using Web Components technologies with integrations for popular frameworks."
  />
  <link rel="canonical" href="https://storiesjs.org/docs" />
  <link rel="alternate" href="https://storiesjs.org/docs" hreflang="x-default" />
  <link rel="alternate" href="https://storiesjs.org/docs" hreflang="en" />
  <meta property="og:url" content="https://storiesjs.org/docs" />
</head>

Stories Framework is a set of [packages](https://github.com/storiesjs/stories/tree/main/packages) that helps you visually test and document UI components and pages in an isolated environment in the context of the application. The main element of Stories is Web Components and their encapsulation ability to keep the markup structure, style and behaviour, hidden and separate from other running code of an application. The Shadow DOM is a key part of this, providing a way for different components to not clash with each other. Web Components as a web standard, widely supported by default in Firefox, Chrome, Opera, Safari, and Chromium-based Edge and make them the best candidate for Stories.

You can seamlessly integrate Stories with various cross-platform native and web app experiences. Here is a list of those tested so far:
- [Angular](/docs/angular/overview)
- [React](/docs/react/overview)
- [Vue](/docs/vue/overview)

Alternatively, it can be used standalone without any frontend framework using a simple [script include](/docs/intro/cdn) on web page.

Stories supports visual testing and documentation on both client and server-side rendering out of the box!

<DocsCards>
  <DocsCard 
    header="Installation Guide" 
    href="/intro/cli" 
    icon="/icons/guide-installation-icon.svg" 
    hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>Step-by-step guides to setting up your system and installing the framework.</p>
  </DocsCard>

  <DocsCard
    header="UI Components"
    href="/components"
    icon="/icons/guide-components-icon.svg"
    hoverIcon="/icons/guide-components-icon-hover.svg">
    <p>Dive into Ionic beautifully designed UI component library.</p>
  </DocsCard>
</DocsCards>