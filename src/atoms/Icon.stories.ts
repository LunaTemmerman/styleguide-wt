import { createIcon } from './Icon';
import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Atoms/Icon',
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} as Meta;

const Template: StoryFn = (args): HTMLImageElement => {
  return createIcon({ ...args });
};

export const Logo = Template.bind({});
Logo.args = {
  src: '/logo.svg',
  alt: 'upside down umbrella',
};
