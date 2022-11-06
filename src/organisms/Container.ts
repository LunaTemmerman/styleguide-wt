import '../style.css';
import { createCard } from '../molecules/Card';
import { createButton } from '../atoms/Button';
import { createText } from '../atoms/Text';
import { createGraph } from '../molecules/Graph';

export const createContainer = ({
  type = 'currentheader',
  city = 'Zomergem',
  weekday = 'Sunday',
  time = '12:11',
  temp = '19°/17°',
  src = '04d.svg',
  alt = 'overcast clouds',
  forecastdata = [
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
  currentdata = [
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
  hours = [
    { time: '11:00', humidity: 70, temp: 15 },
    { time: '12:00', humidity: 60, temp: 14 },
    { time: '13:00', humidity: 80, temp: 16 },
    { time: '14:00', humidity: 70, temp: 15 },
    { time: '15:00', humidity: 90, temp: 17 },
    { time: '16:00', humidity: 80, temp: 16 },
  ],
}) => {
  const container = document.createElement('div');
  container.tabIndex = 0;
  container.className = ['container', `container--${type}`].join(' ');

  switch (type) {
    case 'currentheader':
      container.appendChild(
        createText({
          size: 'large',
          color: 'black',
          type: 'header',
          label: "Today's weather",
          weight: 700,
        })
      );
      container.appendChild(
        createText({
          size: 'large',
          color: 'bleu',
          type: 'header',
          label: city,
          weight: 700,
        })
      );
      break;
    case 'forecastheader':
      container.appendChild(
        createText({
          size: 'large',
          color: 'black',
          type: 'header',
          label: '14 day forecast',
          weight: 700,
        })
      );
      break;
    case 'currentcards':
      container.appendChild(
        createCard({
          type: 'current',
          weekday: weekday,
          time: time,
          temp: temp,
          src: src,
          alt: alt,
          data: currentdata,
        })
      );
      container.appendChild(createGraph({}));
      break;
    case 'forecastcards':
      forecastdata.forEach(day => {
        container.appendChild(
          createCard({
            type: 'forecast',
            weekday: day.weekday,
            date: day.date,
            temp: day.temp,
            rain: day.rain,
            src: day.src,
            alt: day.alt,
          })
        );
      });
      break;
    case 'maplayers':
      container.appendChild(
        createButton({
          label: 'Clouds',
          primary: true,
          name: 'CL',
        })
      );
      container.appendChild(
        createButton({
          label: 'Rain',
          primary: true,
          name: 'PAR0',
        })
      );
      container.appendChild(
        createButton({
          label: 'Precipation',
          primary: true,
          name: 'PAC0',
        })
      );
      container.appendChild(
        createButton({
          label: 'Wind',
          primary: true,
          name: 'WS10',
        })
      );
      container.appendChild(
        createButton({
          label: 'Temperature',
          primary: true,
          name: 'TA2',
        })
      );
      break;
  }
  return container;
};
