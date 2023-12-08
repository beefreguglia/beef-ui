import { StoryObj, Meta } from '@storybook/react';
import { BoxContent, BoxRoot, Checkbox, CheckboxProps } from '../index.tsx';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    label: 'Accept terms of use',
    id: 'checkbox',
  },
  argTypes: {
    label: {
      description: 'Label do checkbox',
    },
    errorMessage: {
      defaultValue: undefined,
      description:
        'Mensagem de erro (Devemos sempre utiliza-lo com o parâmetro hasError true)',
    },
    ref: {
      control: { type: null },
    },
    asChild: {
      control: { type: null },
    },
    hasError: {
      control: {
        type: null,
        description: 'Variável setada quando possui alguma mensagem de erro',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente checkbox para utilizar no sistema',
      },
    },

    layout: 'centered',
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
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '$2',
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
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};

export const withError: StoryObj<CheckboxProps> = {
  args: {
    errorMessage: 'Este campo é obrigatório',
    id: 'witherror',
  },
};
