import React from 'react';

import Card from './Card';

export default {
  component: Card,
  title: '/Molecules/Card',
  cardType: 'note',
};

const Template = (args) => <Card {...args} />;

export const Note = Template.bind({});
Note.args = {
  cardType: 'note',
};

export const Twitter = Template.bind({});
Twitter.args = {
  cardType: 'twitter',
};

export const Article = Template.bind({});
Article.args = {
  cardType: 'article',
};
