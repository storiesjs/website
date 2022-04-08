---
title: User Stories
---

User Stories are one of the core elements of an Agile program. They help provide a user-focused framework for daily work to drive collaboration, creativity, and a better product overall. The development team get the context from User Stories of what they are creating. Stories help them understand how they're providing value for the business and to keep the user top of mind.

User Story is a short, informal description of a software feature written from the end user's perspective.

## Story
The *Story* is representing User Story for the UI component and is the main object of interaction in Stories Framework. It connects the isolated environment of Stories and the *Component*. The *Story* is a render function that reflects the state of the *Component*. Once a *Story* is created, you have to add it to the Stories application and it appears in the UI along with the rendered state of the *Component*.

In order for Stories Framework to distinguish regular files from stories, naming is used with the *.stories.js* or *.stories.ts* prefix. It is considered good practice if one *.stories.js* or *.stories.ts* file include a number of stories  describes one *Component* in different states.

## Component Story Format (CSF)
The Component Story Format (CSF) is an open standard for writing stories of a *Component*, based on JavaScript ES6 modules. A *Story* is a code snippet that renders a *Component* in a specific state to provide it's the most accurate representation in a User Story. 

Benefits of CSF
- *Simple* - write story definition as export of ES6 module;
- *Open standard* - doesn't belong to any vendor-specific library;
- *Declarative* - easily use in MDX;

## Component Driven Development

Component Driven Development (CDD) is an approach that focuses solely on building applications around components. The development process involves creating the UI from scratch at the component level by building loosely-coupled independent components. The benefits of this approach are:

- *Component Reusability* - the ability to reuse the same component in different places. Component can be used with different data depending on the requirements;
- *Code Maintenance* - easy modify or extend specific component rather than an entire application. It help to avoid unnecessary refactoring or building application from scratch;
- *Easy testing* - easy implement unit-tests to validate the specific functionality per component;
- *Quicker learning curves* - developer spend less effort to understand the structure of a component because if it was built with known principles to create components;
- *Component Libraries* - offers the set of accessible, customizable, reusable and production-ready components. It helps teams independently and continuously deliver to product upgrades and fixes.

## Component and Story

Despite implementation details, the term *Component* is used extensively in many frameworks and libraries. Any *Component* may have:

- input/output properties similar to function parameters, so the parent component could pass data or listen to changes from it;
- an internal state similar to variables declared within a function.

Both hold information that influences the output of render, but you can manage it only via properties. You can use the Stories Framework for visual testing a *Component* via passing different data to properties.
