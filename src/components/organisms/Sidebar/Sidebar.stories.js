import React from 'react';
// import StoryRouter from 'storybook-react-router';
import { MemoryRouter } from 'react-router-dom';
// import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
// import penIcon from '../../../assets/icons/pen.svg';
// import bulbIcon from '../../../assets/icons/bulb.svg';
// import logoutIcon from '../../../assets/icons/logout.svg';
// import twitterIcon from '../../../assets/icons/twitter.svg';

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
