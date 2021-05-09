import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Sidebar from './Sidebar';

export default {
  component: Sidebar,
  title: '/Organisms/Sidebar',
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Sidebar {...args} />;

export const Main = Template.bind({});
Main.args = {};
