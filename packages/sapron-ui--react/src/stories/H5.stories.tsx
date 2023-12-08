import { StoryObj, Meta } from '@storybook/react';
import { H5, H5Props } from '../index.tsx';

export default {
  title: 'Typography/Heading/H5',
  component: H5,
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
    children: 'Custom H5',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<H5Props>;

export const Primary: StoryObj<H5Props> = {};
