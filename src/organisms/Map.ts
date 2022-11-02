import '../style.css';
import { createContainer } from './Container';

export const createMap = ({}) => {
  const container = document.createElement('div');
  container.className = 'container container--map';
  container.appendChild(
    createContainer({
      type: 'maplayers',
    })
  );
  const map = document.createElement('div');
  map.id = 'map';
  map.className = 'map';
  container.appendChild(map);
  return container;
};
