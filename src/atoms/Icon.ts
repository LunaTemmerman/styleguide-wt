import '../style.css';

export const createIcon = ({
  src = 'logo.svg',
  alt = 'upside down umbrella',
}) => {
  const icon = document.createElement('img');
  icon.src = src;
  icon.alt = alt;
  icon.className = 'icon';
  return icon;
};
