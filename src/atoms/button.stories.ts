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
    name: {
      control: {
        type: 'text',
      },
    },
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
