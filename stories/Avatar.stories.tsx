import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from '../src/atomic/atoms/avatar';
import ResetStyleTemplate from '../src/configs/reset_style';

const meta: Meta = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;

const MenuOptions: any = [
  {
    label: 'Cursos',
    path: '#',
  },
  {
    label: 'Sobre nós',
    path: '#',
  },
  {
    label: 'Contribua',
    path: '/contact',
  },
];

const Template: Story<AvatarProps> = (args) => (
  <ResetStyleTemplate>
    <Avatar
      url="https://res.cloudinary.com/code-comunity/image/upload/v1633484858/site-gok/CASES/buying_xoic0r.png"
      optionsPopover={MenuOptions}
      {...args}
    />
  </ResetStyleTemplate>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const WithPopover = Template.bind({});

WithPopover.args = {
  withHoverPopover: true,
};
