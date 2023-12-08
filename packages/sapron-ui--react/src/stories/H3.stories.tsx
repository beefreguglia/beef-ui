import { StoryObj, Meta } from '@storybook/react';
import { H3, H3Props } from '../index.tsx';

export default {
  title: 'Typography/Heading/H3',
  component: H3,
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'Componente filho',
      description: 'Texto utilizado como exemplo',
    },
    size: {
      options: ['$xxs', '$xs', '$sm', '$md', '$lg', '$xl', '$2xl'],
      defaultValue: '$md',
      description: 'Tamanhos utilizados para os cabeçalhos.',
      control: { type: 'select' },
    },
    ref: {
      control: { type: null },
    },
  },
  args: {
    children: 'Custom H3',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<H3Props>;

export const Primary: StoryObj<H3Props> = {};
