import { StoryObj, Meta } from '@storybook/react';
import { H1, H1Props } from '../index.tsx';

export default {
  title: 'Typography/Heading/H1',
  component: H1,
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
    children: 'Custom H1',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<H1Props>;

export const Primary: StoryObj<H1Props> = {};
