import { createMap } from './Map';
import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Organisms/Map',
} as Meta;

const Template: StoryFn = (args): HTMLDivElement => {
  return createMap({ ...args });
};

export const Map = Template.bind({});
