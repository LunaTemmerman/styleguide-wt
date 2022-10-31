import '../style.css';

export const createText = ({
  size = 'medium',
  color = 'black',
  type = 'read',
  label = 'I am a piece of text',
  weight = 500,
}) => {
  let element: HTMLElement;
  element =
    type === 'read'
      ? document.createElement('p')
      : document.createElement('h1');
  element.innerText = label;
  element.style.fontWeight = `${weight}`;
  element.className = ['text', `text--${size}`, `text--${color}`].join(' ');
  return element;
};
