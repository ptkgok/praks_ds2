import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputProps, InputField } from '../src/atomic/atoms/inputfield';
import { FaHome } from 'react-icons/fa';
import ResetStyleTemplate from '../src/configs/reset_style';
const meta: Meta = {
  title: 'InputField',
  component: InputField,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputProps> = (args) => (
  <ResetStyleTemplate>
    <InputField {...args} />
  </ResetStyleTemplate>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const WithIcon = Template.bind({});

WithIcon.args = {
  icon: <FaHome />,
};

Default.args = {};
