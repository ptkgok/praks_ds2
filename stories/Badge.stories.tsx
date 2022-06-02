import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps } from '../src/atomic/atoms/badge';
import ResetStyleTemplate from '../src/configs/reset_style';

const meta: Meta = {
  title: 'Badge',
  component: Badge,
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

const Template: Story<BadgeProps> = (args) => (
  <ResetStyleTemplate>
    <Badge {...args}>Texto</Badge>
  </ResetStyleTemplate>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
