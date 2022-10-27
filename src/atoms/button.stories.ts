import './style.css';
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

const Template = (args): HTMLButtonElement => {
  const btn = document.createElement('button');
  btn.innerText = args.label;
  btn.className = [
    'button',
    `button--${args.primary ? 'primary' : 'secondary'}`,
  ].join(' ');
  return btn;
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
