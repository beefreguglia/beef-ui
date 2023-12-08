import { StoryObj, Meta } from '@storybook/react';
import { BoxContent, BoxRoot, Select, SelectProps } from '../index.tsx';

export default {
  title: 'Form/Select/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    selectOptions: [
      { value: 'option1', text: 'option 1' },
      { value: 'option2', text: 'option 2' },
      { value: 'option3', text: 'option 3' },
      { value: 'option4', text: 'option 4' },
      { value: 'option5', text: 'option 5' },
    ],
    ariaLabel: 'options',
    placeholder: 'Select a option',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Componente filho composto por componentes SelectOption',
    },
    id: {
      description: 'Id do select',
    },
    label: {
      description: 'Label do select',
    },
    placeholder: {
      description: 'Placeholder do select',
    },
    ref: {
      control: { type: null },
    },
    errorMessage: {
      description: 'Mensagem de erro',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente caixa para utilizar no sistema',
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
              <BoxContent css={{ width: '500px' }}>{Story()}</BoxContent>
            </BoxRoot>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<SelectProps>;

export const Primary: StoryObj<SelectProps> = {};

export const WithCategory: StoryObj<SelectProps> = {
  args: {
    selectOptions: [
      { value: 'option1', text: 'option 1', category: 'Category1' },
      { value: 'option2', text: 'option 2', category: 'Category1' },
      { value: 'option3', text: 'option 3', category: 'Category1' },
      { value: 'option4', text: 'option 4', category: 'Category2' },
      { value: 'option5', text: 'option 5', category: 'Category2' },
    ],
  },
};

export const WithLabel: StoryObj<SelectProps> = {
  args: {
    label: 'With Label',
    id: 'withLabel',
  },
};

export const WithError: StoryObj<SelectProps> = {
  args: {
    label: 'With Error',
    id: 'withLabel',
    errorMessage: 'Error',
  },
};
