import React from 'react';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import penIcon from '../../../assets/icons/pen.svg';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import magnifierIcon from '../../../assets/icons/magnifier.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import { theme } from '../../../theme/mainTheme';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.theme.primary};
`;

export default {
  component: ButtonIcon,
  title: '/Atoms/ButtonIcon',
  args: {
    active: false,
  },
  argTypes: {
    // color: {
    //   control: 'color',
    // },
    icon: {
      control: {
        type: 'select',
        options: [penIcon, bulbIcon, logoutIcon],
      },
    },
  },
  decorators: [
    (Story) => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
};

const Template = (args) => <ButtonIcon {...args} />;

export const ButtonPen = Template.bind({});
ButtonPen.args = {
  icon: penIcon,
  color: theme.primary,
};

export const ButtonBulb = Template.bind({});
ButtonBulb.args = {
  icon: bulbIcon,
};

export const ButtonLogout = Template.bind({});
ButtonLogout.args = {
  icon: logoutIcon,
};

export const ButtonMagnifier = Template.bind({});
ButtonMagnifier.args = {
  icon: magnifierIcon,
};

export const ButtonPlus = Template.bind({});
ButtonPlus.args = {
  icon: plusIcon,
};

export const ButtonTwitter = Template.bind({});
ButtonTwitter.args = {
  icon: twitterIcon,
};
