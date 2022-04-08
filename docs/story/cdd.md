---
title: Component Driven Development
---
Component Driven Development (CDD) is an approach that focuses solely on building applications around components. The development process involves creating the UI from scratch at the component level by building loosely-coupled independent components. The benefits of this approach are:

- *Component Reusability* - the ability to reuse the same component in different places. Component can be used with different data depending on the requirements;
- *Code Maintenance* - easy modify or extend specific component rather than an entire application. It help to avoid unnecessary refactoring or building application from scratch;
- *Easy testing* - easy implement unit-tests to validate the specific functionality per component;
- *Quicker learning curves* - developer spend less effort to understand the structure of a component because if it was built with known principles to create components;
- *Component Libraries* - offers the set of accessible, customizable, reusable and production-ready components. It helps teams independently and continuously deliver to product upgrades and fixes.

## Component

Despite implementation details, the term *Component* is used extensively in many frameworks and libraries. Any *Component* may have:

- input/output properties similar to function parameters, so the parent component could pass data or listen to changes from it;
- an internal state similar to variables declared within a function.

Both hold information that influences the output of render, but you can manage it only via properties. You can use the Stories for visual testing a *Component* via passing different data to properties.
