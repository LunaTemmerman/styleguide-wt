import { createTable } from './Table';
import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Atoms/Table',
};

const Template: StoryFn = (args): HTMLTableElement => {
  return createTable({ ...args });
};

export const Standard = Template.bind({});
Standard.args = {
  cells: [
    [
      { label: 'value', color: 'white', weight: 300 },
      { label: 'value', color: 'white', weight: 700 },
    ],
    [
      { label: 'value', color: 'white', weight: 300 },
      { label: 'value', color: 'white', weight: 700 },
    ],
    [
      { label: 'value', color: 'white', weight: 300 },
      { label: 'value', color: 'white', weight: 700 },
    ],
    [
      { label: 'value', color: 'white', weight: 300 },
      { label: 'value', color: 'white', weight: 700 },
    ],
  ],
};
