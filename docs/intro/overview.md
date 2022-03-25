---
title: Introduction to Stories
sidebar_label: Overview
sidebar_position: 1
---

Stories is a set of [packages](https://github.com/storiesjs/stories/tree/main/lib) that helps you visually test UI components and pages in an isolated environment in the context of the application. The main element of Stories is Web Components and their encapsulation ability to keep the markup structure, style and behaviour, hidden and separate from other running code of an application. The Shadow DOM is a key part of this, providing a way for different components to not clash with each other. Web Components as a web standard, widely supported by default in Firefox, Chrome, Opera, Safari, and Chromium-based Edge and make them the best candidate for Stories.

You can seamlessly integrate Stories with various cross-platform native and web app experiences. Here is a list of those tested so far:
- [Angular](/docs/angular/overview)
- [React](/docs/react/overview)
- [Vue](/docs/vue/overview)
Alternatively, it can be used standalone without any frontend framework using a simple script include.

Stories supports visual testing on both client and server-side rendering out of the box!