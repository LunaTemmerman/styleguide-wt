import { createInput } from './Input';
import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Atoms/Input',
  argTypes: {
    type: {
      options: ['text', 'submit'],
      control: { type: 'radio' },
    },
    placeholder: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
} as Meta;

const Template: StoryFn = (args): HTMLInputElement => {
  return createInput({ ...args });
};

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  placeholder: 'Search a place ...',
  name: 'place',
};

export const SubmitInput = Template.bind({});
SubmitInput.args = {
  type: 'submit',
  value: 'Submit',
};
