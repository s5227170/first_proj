import React from "react";

import { CustomBtn } from "./CustomBtn";

export default {
  title: "CustomBtn",
  component: CustomBtn,
  argTypes: {
    color1: { control: "color" },
    color2: { control: "color" },
    textColor: { control: "color" },
    label: { control: "text" },
  },
};

const Template = (args) => <CustomBtn {...args}></CustomBtn>;

export const test = Template.bind({});

test.args = {
  label: "Hello",
  color1: "#ED6A5A",
  color2: "#9BC1BC",
  textColor: "#fff",
};
