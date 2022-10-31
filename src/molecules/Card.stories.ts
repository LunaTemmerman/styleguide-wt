import { createCard } from './Card';
import { Meta, StoryFn } from '@storybook/html';
import { type } from 'os';
import { create } from 'domain';

export default {
  title: 'Molecules/Card',
  argTypes: {
    type: {
      options: ['current', 'forecast'],
      control: { type: 'radio' },
    },
    weekday: { control: { type: 'text' } },
    time: { control: { type: 'text' } },
    temp: { control: { type: 'text' } },
    src: { control: { type: 'text' } },
    alt: { control: { type: 'text' } },
  },
} as Meta;

const Template: StoryFn = (args): HTMLDivElement => {
  return createCard({ ...args });
};

export const Current = Template.bind({});
Current.args = {
  type: 'current',
  weekday: 'Sunday',
  time: '13:32',
  temp: '18°/15°',
  src: '01d.svg',
  alt: 'clear sky',
  data: [
    [
      { label: 'Feels like', color: 'white', weight: 300 },
      { label: '18.11°', color: 'white', weight: 700 },
    ],
    [
      { label: 'Humidity', color: 'white', weight: 300 },
      { label: '70%', color: 'white', weight: 700 },
    ],
    [
      { label: 'Weather', color: 'white', weight: 300 },
      { label: 'overcast clouds', color: 'white', weight: 700 },
    ],
    [
      { label: 'Wind', color: 'white', weight: 300 },
      { label: '2.27m/s|232°', color: 'white', weight: 700 },
    ],
  ],
};

export const Forecast = Template.bind({});
Forecast.args = {
  type: 'forecast',
  weekday: 'Sunday',
  date: '30 - 9',
  rain: '5% 🌧',
  temp: '19°/12°',
  src: '01d.svg',
  alt: 'clear sky',
};
