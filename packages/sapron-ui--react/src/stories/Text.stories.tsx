import { StoryObj, Meta } from '@storybook/react';
import { BoxContent, BoxRoot, Text, TextProps } from '../index.tsx';

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'text',
      description: 'Texto utilizado como exemplo',
    },
    size: {
      options: ['$xxs', '$xs', '$sm', '$md', '$lg', '$2xl'],
      defaultValue: 'md',
      description: 'Tamanhos utilizados para os textos.',
      control: { type: 'select' },
    },
    ref: {
      control: { type: null },
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa excepturi possimus ut accusamus ad, sunt dolorum quasi culpa nam saepe, amet quam odio sint tenetur porro doloremque, at ex explicabo?',
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
            <BoxRoot hasShadow>
              <BoxContent
                css={{
                  padding: '$4',
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
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
