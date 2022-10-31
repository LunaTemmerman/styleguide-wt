import { createHeader } from './Header';
import { Meta, Story, StoryFn } from '@storybook/html';

export default {
  title: 'Organisms/Header',
  argTypes: {
    type: {
      options: ['home', 'place'],
      control: { type: 'radio' },
    },
    home: { control: { type: 'text' } },
    map: { control: { type: 'text' } },
  },
} as Meta;

const Template: StoryFn = (args): HTMLElement => {
  return createHeader({ ...args });
};

export const Home = Template.bind({});
Home.args = {
  type: 'home',
  home: './index.html',
  map: './map/index.html',
};

export const Place = Template.bind({});
Place.args = {
  type: 'place',
  home: '../index.html',
};
