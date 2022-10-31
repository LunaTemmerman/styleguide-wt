import '../style.css';
import { createButton } from '../atoms/Button';
import { createForm } from '../molecules/Form';
import { createIcon } from '../atoms/Icon';

export const createHeader = ({
  type = 'home',
  home = './',
  map = './map/index.html',
}) => {
  const header = document.createElement('header');
  const homeLink = document.createElement('a');
  homeLink.href = home;
  const nav = document.createElement('nav');
  nav.appendChild(homeLink);
  homeLink.appendChild(
    createIcon({
      src: '/logo.svg',
      alt: 'upside down umbrella',
    })
  );
  switch (type) {
    case 'home':
      const mapLink = document.createElement('a');
      mapLink.href = map;
      mapLink.appendChild(
        createButton({
          label: 'Discover other places',
          primary: true,
        })
      );
      nav.appendChild(mapLink);
      header.appendChild(nav);
      break;
    case 'place':
      nav.appendChild(
        createForm({
          type: 'place',
        })
      );
      header.appendChild(nav);
  }
  return header;
};
