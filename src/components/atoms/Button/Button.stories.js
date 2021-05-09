import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: '/Atoms/Button',
};

const Template = (args) => <Button {...args}>{args.text}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  secondary: false,
  text: 'Primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  text: 'Secondary',
};
