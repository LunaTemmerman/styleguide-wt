import './style.css';
import { createButton } from './Button';
import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Atoms/Button',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    label: 'I am a button',
    primary: true,
  },
} as Meta;
const Template: StoryFn = ({ label, ...args }): HTMLButtonElement => {
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'I am a primary button',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'I am a secondary button',
  primary: false,
};
