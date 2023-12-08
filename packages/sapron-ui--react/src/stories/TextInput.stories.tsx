import { StoryObj, Meta } from '@storybook/react';
import { BoxContent, BoxRoot, TextInput, TextInputProps } from '../index.tsx';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: 'Componente TextInput para utilizar no sistema',
      },
    },

    layout: 'centered',
  },
  args: {
    placeholder: 'Digite aqui...',
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
              <BoxContent css={{ width: '500px' }}>{Story()}</BoxContent>
            </BoxRoot>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};

export const WithLabel: StoryObj<TextInputProps> = {
  args: {
    label: 'With label',
    id: 'label',
  },
};

export const WithError: StoryObj<TextInputProps> = {
  args: {
    errorMessage: 'Error message',
  },
};
