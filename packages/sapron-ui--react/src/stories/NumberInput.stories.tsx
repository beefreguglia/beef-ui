import { StoryObj, Meta } from '@storybook/react';
import {
  BoxContent,
  BoxRoot,
  NumberInput,
  NumberInputProps,
} from '../index.tsx';

export default {
  title: 'Form/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: 'Componente NumberInput para utilizar no sistema',
      },
    },

    layout: 'centered',
  },
  args: {
    value: 0,
  },
  argTypes: {
    id: {
      description: 'Id do input',
    },
    label: {
      description: 'Label do input',
    },
    placeholder: {
      description: 'Placeholder do input',
    },
    ref: {
      control: { type: null },
    },
    errorMessage: {
      description: 'Mensagem de erro',
    },
    leftIcon: {
      control: { type: null },
    },
    rightIcon: {
      control: { type: null },
    },
    rightIconAction: {
      control: { type: null },
    },
    onValueChange: {
      control: { type: null },
    },
  },
  decorators: [
    (Story) => {
      return (
        <BoxRoot>
          <BoxContent
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '$blue50',
              padding: '$4',
            }}
          >
            <BoxRoot hasShadow>
              <BoxContent
                css={{
                  width: '500px',
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
} as Meta<NumberInputProps>;

export const Primary: StoryObj<NumberInputProps> = {};

export const WithLabel: StoryObj<NumberInputProps> = {
  args: {
    label: 'With label',
    id: 'label',
  },
};

export const WithError: StoryObj<NumberInputProps> = {
  args: {
    errorMessage: 'Error message',
  },
};
