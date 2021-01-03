import React from 'react';

import Card from './Card';

export default {
  component: Card,
  title: '/Molecules/Card',
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  search: false,
  activeColor: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  search: false,
  activeColor: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  search: false,
  activeColor: 'tertiary',
};
