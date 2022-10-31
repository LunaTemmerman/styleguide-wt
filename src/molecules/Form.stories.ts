import { createForm } from './Form';
import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Molecules/Form',
  argTypes: {
    type: {
      options: ['place', 'link'],
      control: { type: 'radio' },
    },
    label: { control: { type: 'text' } },
    path: { control: { type: 'text' } },
  },
} as Meta;

const Template: StoryFn = (args): HTMLFormElement => {
  return createForm({ ...args });
};

export const Place = Template.bind({});
Place.args = {
  type: 'place',
};
