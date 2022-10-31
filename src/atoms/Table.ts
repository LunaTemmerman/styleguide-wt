import '../style.css';
import { createRow } from './Row';

export const createTable = ({
  rows = [
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
  const table = document.createElement('table');
  rows.forEach(cells => {
    table.appendChild(createRow({ cells }));
  });
  table.className = 'table';
  return table;
};
