import { createInput } from '../atoms/Input';
import { createButton } from '../atoms/Button';
import '../style.css';

export const createForm = ({ type = 'place', label = 'Home', path = '#' }) => {
  const form = document.createElement('form');
  switch (type) {
    case 'place':
      form.appendChild(
        createInput({
          type: 'text',
          placeholder: 'Search a place ...',
          name: 'place',
        })
      );
      form.appendChild(
        createInput({
          type: 'submit',
          value: '🔍',
        })
      );
      form.name = type;
      break;
  }
  form.className = ['form', `form--${type}`].join(' ');
  return form;
};
