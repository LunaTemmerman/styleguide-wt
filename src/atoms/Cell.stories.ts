import { Meta, StoryFn } from '@storybook/html';
import { createCell } from './Cell';

export default {
  title: 'Atoms/Cell',
  args: {
    label: 'value',
    color: 'black',
    size: 'medium',
    weight: 500,
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    color: {
      options: ['black', 'white', 'yellow', 'light-bleu'],
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

const Template: StoryFn = (args): HTMLTableCellElement => {
  return createCell({ ...args });
};

export const White = Template.bind({});
White.args = {
  color: 'White',
};

export const Black = Template.bind({});
Black.args = {
  color: 'black',
};

export const Bold = Template.bind({});
Bold.args = {
  weight: 700,
};

export const Regular = Template.bind({});
Regular.args = {
  weight: 500,
};

export const Thin = Template.bind({});
Thin.args = {
  weight: 300,
};
