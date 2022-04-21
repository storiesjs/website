---
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/str-badge/props.md';
import Events from '@site/static/auto-generated/str-badge/events.md';
import Methods from '@site/static/auto-generated/str-badge/methods.md';
import Parts from '@site/static/auto-generated/str-badge/parts.md';
import CustomProps from '@site/static/auto-generated/str-badge/custom-props.md';
import Slots from '@site/static/auto-generated/str-badge/slots.md';



# Badge

The Badge (str-badge) is inline block element uses for notification of how many items associated with another element.

  
## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default -->
<str-badge>99</str-badge>

<!-- Colors -->
<str-badge color="primary">11</str-badge>
<str-badge color="secondary">22</str-badge>
<str-badge color="tertiary">33</str-badge>
<str-badge color="success">44</str-badge>
<str-badge color="warning">55</str-badge>
<str-badge color="danger">66</str-badge>
<str-badge color="light">77</str-badge>
<str-badge color="medium">88</str-badge>
<str-badge color="dark">99</str-badge>

<!-- Button with badge on left and right -->
<str-button>
  <str-badge slot="start">11</str-badge>
  <str-label>My Button</str-label>
  <str-badge slot="end">22</str-badge>
</str-item>
```

</TabItem>


<TabItem value="javascript">

```html
<!-- Default -->
<str-badge>99</str-badge>

<!-- Colors -->
<str-badge color="primary">11</str-badge>
<str-badge color="secondary">22</str-badge>
<str-badge color="tertiary">33</str-badge>
<str-badge color="success">44</str-badge>
<str-badge color="warning">55</str-badge>
<str-badge color="danger">66</str-badge>
<str-badge color="light">77</str-badge>
<str-badge color="medium">88</str-badge>
<str-badge color="dark">99</str-badge>

<!-- Button with badge on left and right -->
<str-button>
  <str-badge slot="start">11</str-badge>
  <str-label>My Button</str-label>
  <str-badge slot="end">22</str-badge>
</str-item>
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { StoriesBadge, StoriesButton, StoriesLabel } from '@str-js/react';

export const BadgeExample: React.FC = () => (
  <div>
    {/*-- Default --*/}
    <StoriesBadge>99</StoriesBadge>

    {/*-- Colors --*/}
    <StoriesBadge color="primary">11</StoriesBadge>
    <StoriesBadge color="secondary">22</StoriesBadge>
    <StoriesBadge color="tertiary">33</StoriesBadge>
    <StoriesBadge color="success">44</StoriesBadge>
    <StoriesBadge color="warning">55</StoriesBadge>
    <StoriesBadge color="danger">66</StoriesBadge>
    <StoriesBadge color="light">77</StoriesBadge>
    <StoriesBadge color="medium">88</StoriesBadge>
    <StoriesBadge color="dark">99</StoriesBadge>

    {/*-- Button with badge on left and right --*/}
    <StoriesButton>
      <StoriesBadge slot="start">11</StoriesBadge>
      <StoriesLabel>My Button</StoriesLabel>
      <StoriesBadge slot="end">22</StoriesBadge>
    </StoriesButton>
  </fiv>
);
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'badge-example',
  styleUrl: 'badge-example.css'
})
export class BadgeExample {
  render() {
    return [
      // Default
      <str-badge>99</str-badge>,

      // Colors
      <str-badge color="primary">11</str-badge>,
      <str-badge color="secondary">22</str-badge>,
      <str-badge color="tertiary">33</str-badge>,
      <str-badge color="success">44</str-badge>,
      <str-badge color="warning">55</str-badge>,
      <str-badge color="danger">66</str-badge>,
      <str-badge color="light">77</str-badge>,
      <str-badge color="medium">88</str-badge>,
      <str-badge color="dark">99</str-badge>,

      // Button with badge on left and right
      <str-button>
        <str-badge slot="start">11</str-badge>
        <str-label>My Button</str-label>
        <str-badge slot="end">22</str-badge>
      </str-button>
    ];
  }
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <!-- Default -->
  <str-badge>99</str-badge>

  <!-- Colors -->
  <str-badge color="primary">11</str-badge>
  <str-badge color="secondary">22</str-badge>
  <str-badge color="tertiary">33</str-badge>
  <str-badge color="success">44</str-badge>
  <str-badge color="warning">55</str-badge>
  <str-badge color="danger">66</str-badge>
  <str-badge color="light">77</str-badge>
  <str-badge color="medium">88</str-badge>
  <str-badge color="dark">99</str-badge>

  <!-- Button with badge on left and right -->
  <str-button>
    <str-badge slot="start">11</str-badge>
    <str-label>My Button</str-label>
    <str-badge slot="end">22</str-badge>
  </str-button>
</template>

<script>
import { StoriesBadge, StoriesButton, StoriesLabel } from '@str-js/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { StoriesBadge, StoriesButton, StoriesLabel }
});
</script>
```

</TabItem>

</Tabs>

<Props />
<Events />
<Methods />
<Parts />
<CustomProps />
<Slots />