import { StoryObj, Meta } from '@storybook/react';
import { H2, H2Props } from '../index.tsx';

export default {
  title: 'Typography/Heading/H2',
  component: H2,
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
    children: 'Custom H2',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<H2Props>;

export const Primary: StoryObj<H2Props> = {};
