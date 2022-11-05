import '../style.css';
import { createText } from './Text';

export const createCell = ({
  label = 'parameter',
  color = 'white',
  size = 'medium',
  weight = 700,
}) => {
  const cell = document.createElement('td');
  cell.appendChild(createText({ size, color, type: 'read', label, weight }));
  cell.tabIndex = 0;
  return cell;
};
