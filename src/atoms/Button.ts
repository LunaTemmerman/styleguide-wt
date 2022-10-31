import '../style.css';

export const createButton = ({ label = 'Do something', primary = true }) => {
  const btn = document.createElement('button');
  btn.innerText = label;
  btn.className = [
    'button',
    `button--${primary ? 'primary' : 'secondary'}`,
  ].join(' ');
  return btn;
};
