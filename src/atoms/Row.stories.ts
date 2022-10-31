import { createRow } from './Row';
import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Atoms/Row',
} as Meta;

const Template: StoryFn = (args): HTMLTableRowElement => {
  return createRow({ ...args });
};

export const Standard = Template.bind({});
Standard.args = {
  cells: [
    { label: 'value', color: 'white', weight: 300 },
    { label: 'value', color: 'white', weight: 700 },
  ],
};
