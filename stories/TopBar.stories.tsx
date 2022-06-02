import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TopBar, TopBarProps } from '../src/atomic/organisms/top-bar';
import ResetStyleTemplate from '../src/configs/reset_style';
import { Avatar } from '../src/atomic/atoms/avatar';

const meta: Meta = {
  title: 'Topbar',
  component: TopBar,
  parameters: {
    controls: { expanded: true },
  },
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

const Template: Story<TopBarProps> = (args) => (
  <ResetStyleTemplate>
    <TopBar
      {...args}
      menuOptions={MenuOptions}
      loggedContent={
        <Avatar
          url="https://res.cloudinary.com/code-comunity/image/upload/v1633484858/site-gok/CASES/buying_xoic0r.png"
          withHoverPopover={true}
          optionsPopover={MenuOptions}
          {...args}
        />
      }
    />
  </ResetStyleTemplate>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
