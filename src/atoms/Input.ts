import '../style.css';

export const createInput = ({
  type = 'text',
  placeholder = 'Search a place ...',
  name = 'place',
  value = 'Submit',
}) => {
  const input = document.createElement('input');
  input.type = type;
  switch (type) {
    case 'text':
      input.placeholder = placeholder;
      input.name = name;
      input.id = name;
      break;
    case 'submit':
      input.value = value;
      break;
  }
  input.className = ['input', `input--${type}`].join(' ');
  return input;
};
