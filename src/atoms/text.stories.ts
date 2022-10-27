import { Meta } from '@storybook/html';
import './style.css';

export default {
  title: 'Atoms/Text',
  args: {
    size: 'medium',
    color: 'black',
    type: 'read',
    label: 'I am a piece of text',
  },
  argTypes: {
    type: {
      options: ['header', 'read'],
      control: { type: 'radio' },
    },
    label: {
      control: { type: 'text' },
    },
    color: {
      options: ['black', 'white', 'yellow', 'light-bleu'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Paragraph = (args): HTMLParagraphElement => {
  const p = document.createElement('p');
  p.innerText = args.label;
  p.className = ['text', `text--${args.size}`, `text--${args.color}`].join(' ');
  return p;
};
const Header = (args): HTMLHeadElement => {
  const h = document.createElement('h1');
  h.innerText = args.label;
  h.className = ['text', `text--${args.size}`, `text--${args.color}`].join(' ');
  return h;
};

export const LargeHeader = Header.bind({});
LargeHeader.args = {
  size: 'large',
  type: 'header',
};

export const MediumHeader = Header.bind({});
MediumHeader.args = {
  size: 'medium',
  type: 'header',
};

export const SmallHeader = Header.bind({});
SmallHeader.args = {
  size: 'small',
  type: 'header',
};

export const LargeText = Paragraph.bind({});
LargeHeader.args = {
  size: 'large',
  type: 'read',
};

export const MediumText = Paragraph.bind({});
MediumText.args = {
  size: 'medium',
  type: 'read',
};

export const SmallText = Paragraph.bind({});
SmallText.args = {
  size: 'small',
  type: 'read',
};
