import '../style.css';

export const createButton = ({
  label = 'Do something',
  primary = true,
  name = '',
}) => {
  const btn = document.createElement('button');
  btn.innerText = label;
  name ? (btn.name = name) : '';
  btn.className = [
    'button',
    `button--${primary ? 'primary' : 'secondary'}`,
  ].join(' ');
  return btn;
};
