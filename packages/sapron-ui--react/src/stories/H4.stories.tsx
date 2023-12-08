import { StoryObj, Meta } from '@storybook/react';
import { H4, H4Props } from '../index.tsx';

export default {
  title: 'Typography/Heading/H4',
  component: H4,
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
    children: 'Custom H4',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<H4Props>;

export const Primary: StoryObj<H4Props> = {};
