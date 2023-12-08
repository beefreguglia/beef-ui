import { StoryObj, Meta } from '@storybook/react';
import { BoxContent, BoxRoot, Button, ButtonProps } from '../index.tsx';

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Desabilita o botão',
    },
    isFull: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Faz o botão ocupar todo espaço disponível',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'quintenary'],
      description: 'Variantes do botão',
      defaultValue: 'primary',
    },
    children: {
      description: 'Texto do botão',
    },
    leftIcon: {
      control: { type: null },
      description: 'Ícone a esquerda',
    },
    ref: {
      control: { type: null },
    },
  },
  args: {
    children: 'Enviar',
    disabled: false,
    variant: 'primary',
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <BoxRoot>
          <BoxContent
            css={{
              backgroundColor: '$blue50',
              padding: '$4',
            }}
          >
            <BoxRoot>
              <BoxContent
                css={{
                  padding: '$4',
                  width: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {Story()}
              </BoxContent>
            </BoxRoot>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const PrimaryDisabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
};

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    disabled: true,
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
};

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    disabled: true,
  },
};

export const Quaternary: StoryObj<ButtonProps> = {
  args: {
    variant: 'quaternary',
  },
};

export const QuaternaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'quaternary',
    disabled: true,
  },
};

export const Quintenary: StoryObj<ButtonProps> = {
  args: {
    variant: 'quintenary',
  },
};

export const QuintenaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'quintenary',
    disabled: true,
  },
};
