---
title: Stories Angular Overview
sidebar_label: Overview
sidebar_position: 1
---

The `@stories-js/angular` package has Angular component wrappers for Stories's web components. You may use them within any Angular application. The package as well includes the Stories renderer implemented on Angular.

Here are the benefits of using Angular's components wrappers over the standard web components:
- Prevents unnecessary repaints of web components via detaching them from the change detection mechanism;
- Converts web components events to RxJS observables to align them with Angular's `@Output()` decorators. This implementation prevents them from emitting events across components boundaries.
- Use form control web components with Angular's template-based or reactive forms via the control value accessors mechanism.

## Angular and TypeScript Versions Support

Stories supports `Angular 12+` and `TypeScript 4.0+`.