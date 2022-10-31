import '../style.css';
import { createCell } from './Cell';

export const createRow = ({
  cells = [
    { label: 'value', color: 'white', weight: 300 },
    { label: 'value', color: 'white', weight: 700 },
  ],
}) => {
  const row = document.createElement('tr');
  cells.forEach(cell => {
    row.appendChild(
      createCell({
        label: cell.label,
        color: cell.color,
        size: 'small',
        weight: cell.weight,
      })
    );
  });
  row.className = 'row';
  return row;
};
