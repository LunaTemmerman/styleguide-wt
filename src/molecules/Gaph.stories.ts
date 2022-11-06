import { createGraph } from './Graph';
import { Meta, StoryFn } from '@storybook/html';
import { create } from 'domain';

export default {
  title: 'Molecules/Graph',
} as Meta;

const Template: StoryFn = (args): HTMLUListElement => {
  return createGraph({ ...args });
};

export const Hours = Template.bind({});
