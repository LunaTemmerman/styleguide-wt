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
        'maplayers',
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
};

export const ForecastHeader = Template.bind({});
ForecastHeader.args = {
  type: 'forecastheader',
};

export const MapLayers = Template.bind({});
MapLayers.args = {
  type: 'maplayers',
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
