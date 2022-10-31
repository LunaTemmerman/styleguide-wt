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
Hours.args = {
  hours: [
    { time: '11:00', humidity: 70, temp: 15 },
    { time: '12:00', humidity: 60, temp: 14 },
    { time: '13:00', humidity: 80, temp: 16 },
    { time: '14:00', humidity: 70, temp: 15 },
    { time: '15:00', humidity: 90, temp: 17 },
    { time: '16:00', humidity: 80, temp: 16 },
  ],
};
