import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: '/Atoms/Heading',
};

const Template = (args) => <Heading {...args}>Heading</Heading>;

export const Normal = Template.bind({});
Normal.args = {
  search: false,
};
