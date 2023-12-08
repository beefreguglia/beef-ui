import { StoryObj, Meta } from '@storybook/react';
import {
  BoxRoot,
  BoxContent,
  ScrollArea,
  ScrollAreaProps,
  Text,
} from '../index.tsx';

export default {
  title: 'Navigation/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  args: {
    children: (
      <Text size="$lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        mollitia quisquam amet blanditiis eligendi harum officia, dolorum
        perspiciatis quia cupiditate quam ducimus. Nihil fuga aut necessitatibus
        minima enim dolorum architecto?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        mollitia quisquam amet blanditiis eligendi harum officia, dolorum
        perspiciatis quia cupiditate quam ducimus. Nihil fuga aut necessitatibus
        minima enim dolorum architecto?
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Componente filho',
    },
    ref: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente responsável por colocar scrolls estilizados',
      },
    },

    layout: 'centered',
  },
} as Meta<ScrollAreaProps>;

export const Vertical: StoryObj<ScrollAreaProps> = {
  decorators: [
    (Story) => {
      return (
        <BoxRoot hasShadow>
          <BoxContent
            css={{
              backgroundColor: '$blue50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '$4',
              flexDirection: 'row',
            }}
          >
            <BoxRoot>
              <BoxContent css={{ height: '150px' }}>{Story()}</BoxContent>
            </BoxRoot>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
};

export const Horizontal: StoryObj<ScrollAreaProps> = {
  decorators: [
    (Story) => {
      return (
        <BoxRoot hasShadow>
          <BoxContent
            css={{
              backgroundColor: '$blue50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '$4',
              flexDirection: 'row',
            }}
          >
            <BoxRoot>
              <BoxContent css={{ maxWidth: '350px' }}>{Story()}</BoxContent>
            </BoxRoot>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
  args: {
    children: (
      <Text size="$lg" css={{ minWidth: '500px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        mollitia quisquam amet blanditiis eligendi harum officia, dolorum
        perspiciatis quia cupiditate quam ducimus. Nihil fuga aut necessitatibus
        minima enim
      </Text>
    ),
  },
};

export const Both: StoryObj<ScrollAreaProps> = {
  decorators: [
    (Story) => {
      return (
        <BoxRoot hasShadow>
          <BoxContent
            css={{
              backgroundColor: '$blue50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '$4',
              flexDirection: 'row',
            }}
          >
            <BoxRoot>
              <BoxContent css={{ maxWidth: '350px', height: '350px' }}>
                {Story()}
              </BoxContent>
            </BoxRoot>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
  args: {
    children: (
      <Text size="$lg" css={{ width: '500px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        mollitia quisquam amet blanditiis eligendi harum officia, dolorum
        perspiciatis quia cupiditate quam ducimus. Nihil fuga aut necessitatibus
        minima enim
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        mollitia quisquam amet blanditiis eligendi harum officia, dolorum
        perspiciatis quia cupiditate quam ducimus. Nihil fuga aut necessitatibus
        minima enim dolorum architecto?
      </Text>
    ),
  },
};
