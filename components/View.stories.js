import React from "react";

import { View } from "./View";

export default {
  title: "Stories/View component",
  component: View,
  decorators: [
    (Story) => {
      return (
        <section style={{ margin: "3em" }}>
          <Story />
        </section>
      );
    }
  ],
  args: { name: "Potter" },
  argTypes: { onClick: { action: "clicked" } },
  parameters: {}
};

export const ByName = () => <View name="Test" />;

export const ByAge = () => <View age={30} />;
ByAge.storyName = "By Lovely Age";

const Template = (args) => <View {...args} />;

export const ByArgs = Template.bind({});
ByArgs.args = {
  name: "Harry Potter"
};
