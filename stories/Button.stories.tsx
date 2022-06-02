import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src/atomic/atoms/button';
import { FaArrowLeft } from 'react-icons/fa';

const meta: Meta = {
  title: 'Button',
  component: Button,
};
export default meta;

export const Default = () => <Button>Click Me</Button>;
export const Primary = () => <Button color="primary">Click Me</Button>;
export const Secondary = () => <Button color="secondary">Click Me</Button>;
export const Gray = () => <Button color="gray">Click Me</Button>;
export const Outline = () => (
  <Button color="primary" size="large" variant="outline">
    Click Me
  </Button>
);

export const Icon = () => (
  <Button icon={<FaArrowLeft size="13px" color="white" />}></Button>
);
