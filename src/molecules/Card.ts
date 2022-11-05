import '../style.css';
import { createTable } from '../atoms/Table';
import { createText } from '../atoms/Text';
import { createIcon } from '../atoms/Icon';

export const createCard = ({
  type = 'current',
  weekday = 'Sunday',
  date = '30 - 9',
  time = '12:11',
  temp = '19°/17°',
  rain = '70% 🌧',
  src = '01d.svg',
  alt = 'clear sky',
  data = [
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
}) => {
  const container = document.createElement('div');
  container.tabIndex = 0;
  const top = document.createElement('div');
  const middle = document.createElement('div');
  container.className = ['card', `card--${type}`].join(' ');
  switch (type) {
    case 'current':
      top.appendChild(
        createText({
          size: 'small',
          color: 'black',
          type: 'read',
          label: weekday,
          weight: 500,
        })
      );
      top.appendChild(
        createText({
          size: 'small',
          color: 'black',
          type: 'read',
          label: time,
          weight: 500,
        })
      );
      top.className = 'top';
      container.appendChild(top);

      middle.appendChild(
        createText({
          size: 'large',
          color: 'white',
          type: 'read',
          label: temp,
          weight: 700,
        })
      );
      middle.appendChild(
        createIcon({
          src: `/white/${src}`,
          alt: alt,
        })
      );
      middle.className = 'middle middle--current';
      container.appendChild(middle);

      container.appendChild(
        createTable({
          rows: data,
        })
      );
      break;
    case 'forecast':
      top.appendChild(
        createText({
          size: 'small',
          color: 'black',
          type: 'read',
          label: weekday,
          weight: 500,
        })
      );
      top.appendChild(
        createText({
          size: 'small',
          color: 'black',
          type: 'read',
          label: date,
          weight: 500,
        })
      );
      top.className = 'top';
      container.appendChild(top);

      middle.appendChild(
        createIcon({
          src: `/color/${src}`,
          alt: alt,
        })
      );
      middle.appendChild(
        createText({
          size: 'small',
          color: 'black',
          type: 'read',
          label: rain,
          weight: 500,
        })
      );
      middle.appendChild(
        createText({
          size: 'large',
          color: 'black',
          type: 'read',
          label: temp,
          weight: 500,
        })
      );
      middle.className = 'middle middle--forecast';
      container.appendChild(middle);
  }
  return container;
};
