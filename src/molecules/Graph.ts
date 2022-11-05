import '../style.css';
import { createText } from '../atoms/Text';

export const createGraph = ({
  hours = [
    { time: '11:00', humidity: 70, temp: 15 },
    { time: '12:00', humidity: 60, temp: 14 },
    { time: '13:00', humidity: 80, temp: 16 },
    { time: '14:00', humidity: 70, temp: 15 },
    { time: '15:00', humidity: 90, temp: 17 },
    { time: '16:00', humidity: 80, temp: 16 },
  ],
}) => {
  const graph = document.createElement('ul');
  const colorindex = document.createElement('li');
  colorindex.appendChild(
    createText({
      size: 'small',
      color: 'light-bleu',
      type: 'read',
      label: 'Humidity(x%)',
    })
  );
  colorindex.appendChild(
    createText({
      size: 'small',
      color: 'yellow',
      type: 'read',
      label: 'Temperature(x/50°)',
    })
  );
  colorindex.className = 'colorindex';

  const max = document.createElement('li');
  max.appendChild(document.createElement('div'));
  max.appendChild(document.createElement('div'));
  max.appendChild(document.createElement('p'));
  max.className = 'max';

  graph.appendChild(colorindex);
  graph.appendChild(max);

  hours.forEach(hour => {
    const element = document.createElement('li');
    const hum = document.createElement('div');
    hum.style.height = `${(hour.humidity / 100) * 85}%`;
    const temp = document.createElement('div');
    temp.style.height = `${(hour.temp / 50) * 85}%`;
    hum.tabIndex = 0;
    temp.tabIndex = 0;
    element.appendChild(hum);
    element.appendChild(temp);
    element.appendChild(
      createText({
        size: 'small',
        color: 'black',
        type: 'read',
        label: hour.time,
        weight: 500,
      })
    );
    graph.appendChild(element);
  });
  graph.className = 'graph';
  return graph;
};
