import { Meta, StoryFn } from '@storybook/html';
import { createText } from './Text';

export default {
  title: 'Atoms/Text',
  argTypes: {
    type: {
      options: ['header', 'read'],
      control: { type: 'radio' },
    },
    label: {
      control: { type: 'text' },
    },
    color: {
      options: ['black', 'white', 'yellow', 'light-bleu', 'bleu', 'red'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    weight: {
      options: [300, 500, 700],
      control: { type: 'number' },
    },
  },
} as Meta;

const Template: StoryFn = ({ ...args }) => {
  return createText({ ...args });
};

export const Header = Template.bind({});
Header.args = {
  type: 'header',
};

export const Read = Template.bind({});
Read.args = {
  type: 'read',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
