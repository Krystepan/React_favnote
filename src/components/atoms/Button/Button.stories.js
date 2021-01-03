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

// storiesOf('Button', module)
//   .addDecorator(withKnobs)
//   .add('Primary', () => {
//     const label = 'Colors';
//     const options = {
//       Primary: 'hsl(49, 100%, 58%)',
//       Secondary: 'hsl(196, 83%, 75%)',
//       Tertiary: 'hsl(106, 47%, 64%)',
//     };
//     const defaultValue = 'hsl(49, 100%, 58%)';
//     const groupId = 'GROUP-ID1';

//     const value = select(label, options, defaultValue, groupId);
//     return <Button color={value}>Hello Hutas</Button>;
//   });
