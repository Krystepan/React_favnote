import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

const Template = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  search: false,
};
export const Search = Template.bind({});
Search.args = {
  placeholder: 'search',
  search: true,
};
