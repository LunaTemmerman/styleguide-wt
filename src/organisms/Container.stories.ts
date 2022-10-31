import { createContainer } from './Container';
import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Organisms/Container',
  argTypes: {
    type: {
      options: [
        'currentheader',
        'currentcards',
        'forecastheader',
        'forecastcards',
      ],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: StoryFn = (args): HTMLDivElement => {
  return createContainer({ ...args });
};

export const CurrentHeader = Template.bind({});
CurrentHeader.args = {
  type: 'currentheader',
  city: 'Zomergem',
};

export const CurrentCards = Template.bind({});
CurrentCards.args = {
  type: 'currentcards',
  weekday: 'Monday',
  time: '11:21',
  temp: '14°/11°',
  src: '04d.svg',
  alt: 'overcast clouds',
  currentdata: [
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
  hours: [
    { time: '11:00', humidity: 70, temp: 15 },
    { time: '12:00', humidity: 60, temp: 14 },
    { time: '13:00', humidity: 80, temp: 16 },
    { time: '14:00', humidity: 70, temp: 15 },
    { time: '15:00', humidity: 90, temp: 17 },
    { time: '16:00', humidity: 80, temp: 16 },
  ],
};

export const ForecastHeader = Template.bind({});
ForecastHeader.args = {
  type: 'forecastheader',
};

export const ForecastCards = Template.bind({});
ForecastCards.args = {
  forecastdata: [
    {
      weekday: 'Sunday',
      date: '2 - 10',
      src: '02d.svg',
      alt: 'clear night',
      rain: '70% 🌧',
      temp: '14°|11°',
    },
    {
      weekday: 'Sunday',
      date: '2 - 10',
      src: '02d.svg',
      alt: 'clear night',
      rain: '70% 🌧',
      temp: '14°|11°',
    },
    {
      weekday: 'Sunday',
      date: '2 - 10',
      src: '02d.svg',
      alt: 'clear night',
      rain: '70% 🌧',
      temp: '14°|11°',
    },
    {
      weekday: 'Sunday',
      date: '2 - 10',
      src: '02d.svg',
      alt: 'clear night',
      rain: '70% 🌧',
      temp: '14°|11°',
    },
    {
      weekday: 'Sunday',
      date: '2 - 10',
      src: '02d.svg',
      alt: 'clear night',
      rain: '70% 🌧',
      temp: '14°|11°',
    },
    {
      weekday: 'Sunday',
      date: '2 - 10',
      src: '02d.svg',
      alt: 'clear night',
      rain: '70% 🌧',
      temp: '14°|11°',
    },
  ],
};
